import { MongoClient } from "mongodb";



 async function handler(req,res){
    if(req.method==='POST'){
        const data=req.body;
        const client=MongoClient.connect("mongodb+srv://roshan1992:lordbuddha@cluster0.4tt52ji.mongodb.net/meetups?retryWrites=true&w=majority")
    const db=client.db();
    const meetupsCollection=db.collection("meetups");
      const result=  await meetupsCollection.insertOne({data})
      console.log(result)
      client.close()
    res.status(201).json({message:"meetup inserted!"})
}

}
export default handler