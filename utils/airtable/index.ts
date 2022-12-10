// airtable fn reference: https://flaviocopes.com/airtable/
import Airtable from "airtable";
import { SpeakerRecord } from "./SpeakerRecord";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base("appuULVkcWSPfrGuG");
const table = base("Main");

export class AirtableDB {
  getData = async (subId: string) => {
    const records = await table
      .select({
        filterByFormula: `{sub} = "${subId}"`,
      })
      .all();

    console.log(records)
    return {
      id: records[0].getId(),
      fields: records[0].fields,
    };
  };

  getSpeakerRecord = async (subId: string):Promise<void | {
    id: string;
    fields: any
  }> => {
    try {
      const speaker = await this.getData(subId);
      return speaker;
    } catch (err: any) {
      return err;
    }
  };

  writeNewSpeakerRecord = async (subId: string, request: SpeakerRecord) => {
    try {
      if (!subId) {
        throw new Error("sub required");
      }
      const speaker = await this.getSpeakerRecord(subId);
      if (speaker && speaker.id) {
        base("Main").update(
          speaker.id,
          {
            ...request,
          },
          (err, record) => {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
      } else {
        base("Main").create(
          {
            ...request,
            sub: subId,
          },
          { typecast: true },
          function (err, record) {
            if (err) {
              console.error(err);
              return {
                status: "error",
              };
            }

            if (record) {
              return {
                status: "ok",
              };
            }
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
}
