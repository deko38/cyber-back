import {MongoClient} from "mongodb";

const uri = `mongodb+srv://dekodumbadze:dekukuna123@clusterdemo.z2nma.mongodb.net/?retryWrites=true&w=majority&appName=Clusterdemo`;
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        return client.db('cyber_db');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

export {connectToDatabase, client};

