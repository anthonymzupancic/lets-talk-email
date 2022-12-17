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
      throw new Error("Must be a POST Request");
    }

    if(!req.query.subId){
      throw new Error("No SubID Provided")
    }

    let subId;
    const request = req.body;

    if(Array.isArray(req.query.subId)){
      subId = req.query.subId[0];
    } else {
      subId = req.query.subId;
    }   
    
    const writeRecordRequest = await db.writeNewSpeakerRecord(subId, request, 'Main')
    const output = {
      status: 'ok'
    }

    res.status(200).json(output);
  } catch (err: any) {
    if (err && err.message) {
      res.status(400).send(err.message);
    } else {
        res.status(400).send(err)
    }    


  }
}
