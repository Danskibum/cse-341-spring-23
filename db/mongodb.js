const dotenv = require('dotenv');
dotenv.config();
const {mongoClient} = requre('mongodb').MongoClient;

async function main() {

    const uri = "mongodb+srv://Daniel:Dan2Happy@cluster0.u3vv4du.mongodb.net/?retryWrites=true&w=majority";

    const client = new mongclient (uri);

    try {
        await client.conntect();
        
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}