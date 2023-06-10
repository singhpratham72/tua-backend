const mongoose = require('mongoose')

const transferSchema = new mongoose.Schema({
    sender: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      nationalIdNumber: { type: String, required: true },
      address: { type: String, required: true },
    },
    senderBankDetails: {
      bankName: { type: String, required: true },
      accountNumber: { type: String, required: true },
      ifscCode: { type: String, required: true },
    },
    beneficiary: {
      accountHolderName: { type: String, required: true },
      accountNumber: { type: String, required: true },
      bankName: { type: String, required: true },
      swiftCode: { type: String, required: true },
      routingNumber: { type: String, required: true },
    },
    amount: { type: Number, required: true },
    transferId: { type: String },
  });
  
  const Transfer = mongoose.model('Transfer', transferSchema);
  
  module.exports = Transfer;