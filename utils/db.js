import mongoose from 'mongoose';

const connection ={};

async function connect() {
    if (connection.isConnected) {
        console.log('Connected');
        return ;
    }
    if(mongoose.connectionslength >0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log('Use previous connection');
            return ;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('Connected to mongo');
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('Not Disconnected from mongo');
        }
    }
}

const db = { connect, disconnect };
export default db;