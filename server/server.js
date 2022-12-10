const express =require('express');
const colors=require('colors');
const mongoose =require ('mongoose');
const PORT=process.env.PORT || 5000;
app.use=express();
app.use(express.json({extended:false}));

const connectDB = async()=> {
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    }
    catch (err){
        console.log(`ERROR: ${err.message}`)
    }
}

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`.bgCyan.underline.bold));