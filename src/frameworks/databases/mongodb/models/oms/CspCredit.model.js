import mongoose from 'mongoose';

const cspCreditSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  id: {
    type: String,
    required: true,
  },
  subscriptionId: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
  },
  st_dt: {
    type: String,
  },
  end_dt: {
    type: String,
  },
  category: {
    type: String,
  },
  reason: {
    type: String,
  },
  updateDt: {
    type: String,
  },
  updateId: {
    type: String,
  },
});
