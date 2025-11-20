import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db';
import userRouter from './src/api/user/user.routes';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1', userRouter);

app.use('/', (req, res) => {
  res.status(401).send('Unauthorized access');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
