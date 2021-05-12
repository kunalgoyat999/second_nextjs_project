// api/new-meetup
// Post /api/new-meetup

import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://kunal:MyPassword@cluster0.rkvlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
