import mongoose from 'mongoose'
import colors from 'colors'


const connectDB = async () => {
    
    try{
        // Mongoose: the `strictQuery` option will be switched back to `false` 
        // by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` 
        // if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` 
        // to suppress this warning.
        mongoose.set('strictQuery', false);
        
        const conn = await mongoose.connect(process.env.MONGODB_LOCAL_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            // useCreateIndex: true
        })

        console.log(`Sample MongoDB connected: ${conn.connection.host}`.cyan.bold)
    }catch(error){
        console.error(`Sample:DB:ERROR ${error.message}`.red.bold)
    }
}

export default connectDB