const router = require('express').Router();
const userRoutes = require('./userRoutes');
const comicsRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/comics', comicsRoutes);

module.exports = router;
