interface Price {
    amount: number;
    currency: String;
}

export interface Offer {
    origin: String;
    destination: String;
    departureDate: String;
    returnDate: String;
    seatAvailability : Number;
    price : [Price];
    offerType: String;
    uuid : String;
}