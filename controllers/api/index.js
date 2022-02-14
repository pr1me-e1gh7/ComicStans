const router = require('express').Router();
const userRoutes = require('./userRoutes');
const collectionsRoutes = require('./collectionsRoutes');

router.use('/users', userRoutes);
router.use('/collections', collectionsRoutes);
// router.use('/comics', comicsRoutes);

module.exports = router;
