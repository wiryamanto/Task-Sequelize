const foodsRoutes = require('express').Router();
const foodsControllers = require('../controllers/foodscontroller');

foodsRoutes.get('/', foodsControllers.getAllMakanan);
foodsRoutes.post('/', foodsControllers.createNewMakanan);
foodsRoutes.get('/:id',foodsControllers.getMakanId);
foodsRoutes.put('/:id',foodsControllers.updateMakanan);
foodsRoutes.delete('/:id',foodsControllers.deleteDataMakan)

module.exports= foodsRoutes;