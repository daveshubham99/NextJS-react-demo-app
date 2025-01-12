import { MongoClient } from 'mongodb'


export default async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1')
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data)
        console.log(result)
        client.close();
        res.status(201).json({ message: 'Meetup Inserted Successfully' })

    }



}