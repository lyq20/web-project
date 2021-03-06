import homeController from './controllers/home';
import movieController from './controllers/movie';
import comingController from './controllers/coming';
import cinemaController from './controllers/cinema';
import positionController from './controllers/position';
import navController from './controllers/aside';
import detailsController from './controllers/details';
import loginController from './controllers/login'
import Router from './utils/router';

homeController.render();
// movieController.render()
// cinemaController.render();
//comingController.render();
navController.render();
// detailsController.render()

const router = new Router()
router.init()
router.route('#position',positionController.render)
router.route('#movie',movieController.render)
router.route('#cinema',cinemaController.render)
router.route('#details',detailsController.render)
router.route('#coming',comingController.render)
router.route('#login',loginController.render)


