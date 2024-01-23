const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.c');
const genresController = require('../controllers/genres.c');
const ordersController = require('../controllers/orders.c');
const usersController = require('../controllers/users.c');
//multer
const path = require('path');
const multer = require('multer')
const upload = multer({ dest: path.join(__dirname, '../public/images/products') })




router.get('/dashboard', productsController.dashBoardController);

// Products management
router.get('/products', productsController.productsController);
router.get('/products/create',productsController.createProductController);
router.post('/products/create', upload.array('cover-img', 2),productsController.createProductControllerPost);
router.get('/products/:productId/edit', productsController.updateProductController);
router.post('/products/:productId/edit', upload.array('cover-img', 2) ,productsController.updateProductControllerPost);

// Genres management
router.get('/genres', genresController.genresController);
router.post('/genres', genresController.createGenreController);
router.post('/genres/:genreId/update', genresController.updateGenreController);
router.post('/genres/:genreId/delete', genresController.deleteGenreController);

router.get('/orders', ordersController.ordersController);
router.get('/orders/:orderId/detail', ordersController.adminOrderSummaryController);
router.post('/orders/:orderId/detail', ordersController.adminUpdateOrderSummaryController);
router.post('/orders/:orderId/change-status', ordersController.adminUpdateOrderStatusController);

router.get('/customers', usersController.usersController);

module.exports = router;
