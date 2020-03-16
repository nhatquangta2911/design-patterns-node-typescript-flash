import express from 'express';
import { TaxCalculator2020 } from './controllers/taxController';

const app = express();
const port = 4000;

app.get('/', async (req, res) => {
  const taxCalculator2020 = new TaxCalculator2020();
  res.json(taxCalculator2020.calculateTax() * 2);
});

app.listen(port, error => {
  if (error) {
    return console.log(error);
  }
  return console.log(`SERVER IS LISTENING ON PORT ${port}`);
});
