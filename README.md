# Financial Trasactions - API
RocketSeat GoStack BootCamp - Node.js/Express Challenge

## Preview
![preview](https://github.com/GermainPereira/node-financial-transactions-api/blob/master/2020-06-26-preview-transactions-api.gif?raw=true)


## Features

#### POST: `localhost:3333/transactions`
* Receive requests for creating a new financial ()  
* request.body params: title (string), type ('outcome' | 'income'), value (number)
* note: if outcome value > balance.total value, the request is denied (see example in preview)

#### GET: `localhost:3333/transactions`
* Returns list containing previous request and balance   
* request.body - no body


#### Possible Improvements
* Add a databank storage;
* Create customer model and authentication;
* Add more registry data to the transactions (eg. create_at, customer_id);
