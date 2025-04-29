import express from 'express';
import cors from 'cors';
import paymentRoutes from './api/payment';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 