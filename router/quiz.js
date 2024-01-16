const quizController = require('../controllers/quiz');
const { verifyToken } = require("../middlewares/authJwt");
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', [verifyToken], quizController.getAll);
router.get('/:id', [verifyToken], quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/category/:id', [verifyToken], quizController.getByCategoryId);
router.get('/level/:id', [verifyToken], quizController.getByLevelId);

module.exports = router;