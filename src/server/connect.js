const { MongoClient, ServerApiVersion } = require('mongodb');
const password = encodeURIComponent('Conboanco@1');
const url = `mongodb+srv://chimsegoimatdat:${password}@cluster0.dtdl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,

    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

const db = client.db('sample_mflix');
console.log('db', db);
run().catch(console.dir);
