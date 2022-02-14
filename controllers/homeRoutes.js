const router = require('express').Router();
const { Comics, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('homepage',);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/allcomics', async (req, res) => {
  try {
    // Get all comics and JOIN with user data
    const comicsData = await Comics.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const comics = comicsData.map((comics) => comics.get({ plain: true }));

    res.json(comics)
    // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   comics, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comics/:id', async (req, res) => {
  try {
    const comicsData = await Comics.findByPk(req.params.id, {
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    });

    const comics = comicsData.get({ plain: true });

    res.json(comics)
    // res.render('comics', {
    //   ...comics,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comics }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
