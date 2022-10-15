import express from 'express';
import controller from '../controllers/offers.controller';

const router: express.Router = express.Router();

router.get('/offers', controller.getOffers);

export = router;