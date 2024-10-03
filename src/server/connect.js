const { MongoClient, ServerApiVersion } = require('mongodb')
const username = 'chimsegoimatdat'
const passwrod = 'Caumq3ADhz2Irpof'
const url = `mongodb+srv://${username}:${password}@cluster0.dtdl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        trict: true,
        deprecationErrors: true,
    },
})

const database = null
const DATABASE_NAME = 'gettingStarted'
export const connectDB = async () => {
    await client.connect()
    console.log('connect databse')
    database = client.db(DATABASE_NAME)
}

export const getDB = () => {
    if (!database) throw new Error('Connect database first!')
    return database
}
