import express from "express";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

dotenv.config({});




const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:5173',
//      
// }

// app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });