const mainRoutes = require('express').Router();

const foodsRoutes = require('./foodsroutes');

mainRoutes.use('/api/foods',foodsRoutes);

module.exports=mainRoutes;