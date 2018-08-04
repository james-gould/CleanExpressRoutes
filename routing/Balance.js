const BalanceTransactions = require('express').Router();

BalanceTransactions.get('/GetBalance', (req, res) => {
    res.json({ Balance: 0 });
});

module.exports = BalanceTransactions;