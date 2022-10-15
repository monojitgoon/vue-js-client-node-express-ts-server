# Rest API with NODE using Typescript
This is a simple REST API developed using node and express with typescript

The service returns mocked data, mentioned as following response structure as RESULT which contains several origin and destination promotions

There is a get operation available which returns static json array.


## Installation

1.  Install Dependencies

    * [Node.js (version 16.x is recommended)](https://nodejs.org/en/)

3.  Go to the project's root directory **cd /my/path/to/directory**
4.  Run **npm install**
5.  Start using it! **npm run dev**

## Available end-points

### GET http://localhost:6060/promotions/offers

Gets all the available offer (25 sample offers).

### Response structure 
```js
[
  {
    "departureDate": "2021-08-03",
    "destination": "DDD",
    "offerType": "BestPrice",
    "origin": "CBB",
    "price": [
      {
        "amount": 995.72,
        "currency": "EUR"
      }
    ],
    "returnDate": "2022-08-01",
    "seatAvailability": 34,
    "uuid": "fb286e53-1d81-4e9c-8088-bd80c90283d8"
  }
]
```
