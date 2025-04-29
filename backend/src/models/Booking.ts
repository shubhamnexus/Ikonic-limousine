import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  // Define your booking fields here
  user: String,
  vehicle: String,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);