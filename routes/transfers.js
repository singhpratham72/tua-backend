const express = require('express')
const router = express.Router()
const Transfer = require('../models/transfer')

// Get all transfers
router.get('/api/transfers', async (req, res) => {
    try {
      // Retrieve all transfers from the database
      const transfers = await Transfer.find();
  
      // Return the transfers array in the response
      res.json(transfers);
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ error: 'An error occurred while retrieving the transfers' });
    }
  });

// Get transfer details
router.get('/api/transfers/:transferId', async (req, res) => {
    try {
      const transferId = req.params.transferId;
  
      // Retrieve the transfer from the database by its ID
      const transfer = await Transfer.findById(transferId);
  
      if (!transfer) {
        // If the transfer is not found, return a 404 response
        return res.status(404).json({ error: 'Transfer not found' });
      }
  
      // Return the transfer details in the response
      res.json(transfer);
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ error: 'An error occurred while retrieving the transfer details' });
    }
  });


// Create and post a transfer
router.post('/api/create-transfer', async (req, res) => {
    try {
      // Extract the form data from the request body
      const { sender, senderBankDetails, beneficiary, amount } = req.body;
  
      // Create a new transfer instance using the Transfer model
      const transfer = new Transfer({
        sender,
        senderBankDetails,
        beneficiary,
        amount,
      });
  
      // Save the transfer to the database
      const newTransfer = await transfer.save();
  
      // Return the newly created transfer in the response
      res.json(newTransfer);
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the transfer' });
    }
  });

module.exports = router