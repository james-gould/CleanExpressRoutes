const TransactionRoutes = require('express').Router();

// Removed db call from blog post to omit unnecessary code
TransactionRoutes.get('/GetTransaction/:id', (req, res) => {
    const transactionId = req.params.id;

    res.json({ Transaction: transactionId });
})

module.exports = TransactionRoutes;