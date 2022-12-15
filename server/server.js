const express =require('express');
const colors=require('colors');
const mongoose =require ('mongoose');
const PORT=process.env.PORT || 5000;
const dotenv =require('dotenv').config();

const app=express();
app.use(express.json({extended:false}));

const connectDB = async()=> {
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    }
    catch (err){
        console.log(`ERROR: ${err.message}`.bgRed.underline.bold);
        process.exit(1); 
    }
}

connectDB();

app.get('/',function(req,res){res.send("HI")});

app.use('/api/users',require('./routes/userRoutes'));

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`.bgCyan.underline.bold));