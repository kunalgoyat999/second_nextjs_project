// api/new-meetup
// Post /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kunal:MyPassword@cluster0.rkvlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    // console.log(result);

    client.close();

    res.status(201).json({ message: "data inserted" });
  }
}

export default handler;
