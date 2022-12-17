// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {AirtableDB} from  '../../../../../utils/airtable'
const db = new AirtableDB()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      throw new Error("Must be a GET Request");
    }

    if(!req.query.subId){
      throw new Error("No SubID Provided")
    }

    let subId;

    if(Array.isArray(req.query.subId)){
      subId = req.query.subId[0];
    } else {
      subId = req.query.subId;
    }   
    
    const presentationRequest = req.body;
    const presentationId = presentationRequest && presentationRequest.presentationId;
    const speakerRecordRequest = await db.getSpeakerRecord(subId, 'Main')
    const writePresentation = await db.writeRecord(presentationId, presentationRequest, 'Presentation')

    console.log(writePresentation)
    res.status(200).json({speakerRecordRequest, write: writePresentation});
  } catch (err: any) {
    console.log(err)
    if (err && err.message) {
      res.status(400).send(err.message);
    } else {
        res.status(400).send(err)
    }    


  }
}
