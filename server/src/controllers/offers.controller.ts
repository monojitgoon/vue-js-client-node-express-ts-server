import { Offer } from './../models/interfaces/Offer';
import { Request, Response, NextFunction } from 'express';
var offerData = require('../../data/offersdata');

// getting all offers
const getOffers = async (req: Request, res: Response, next: NextFunction) => {
    let offers: [Offer] = offerData;
    return res.status(200).json(offers);
};


export default { getOffers};