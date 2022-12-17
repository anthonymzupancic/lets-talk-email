// airtable fn reference: https://flaviocopes.com/airtable/
import Airtable from "airtable";
import { SpeakerRecord } from "./SpeakerRecord";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base("appuULVkcWSPfrGuG");

export class AirtableDB {
  getData = async (value: string, key: string, table: string) => {
    const tableRef = base(table);
    const records = await tableRef
      .select({
        filterByFormula: `{${key}} = "${value}"`,
      })
      .all();

    return {
      id: records[0].getId(),
      fields: records[0].fields,
    };
  };

  getSpeakerRecord = async (
    subId: string,
    table: string
  ): Promise<void | {
    id: string;
    fields: any;
  }> => {
    try {
      const speaker = await this.getData(subId, 'sub', table);
      return speaker;
    } catch (err: any) {
      return err;
    }
  };

  getPresentationRecord = async (
    presentationId: string,
    table: string
  ): Promise<void | {
    id: string;
    fields: any;
  }> => {
    try {
      const speaker = await this.getData(presentationId, 'presentationId', table);
      return speaker;
    } catch (err: any) {
      return err;
    }
  };

  writeNewSpeakerRecord = async (
    subId: string,
    request: SpeakerRecord,
    table: string
  ) => {
    try {
      if (!subId) {
        throw new Error("sub required");
      }
      const tableRef = base(table);
      const speaker = await this.getSpeakerRecord(subId, table);
      if (speaker && speaker.id) {
        await tableRef.update(
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
        await tableRef.create(
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

  writeRecord = async (
    recordId: string,
    request: SpeakerRecord,
    table: string
  ) => {
    try {
      if (!recordId) {
        throw new Error("recordId required");
      }
      const tableRef = base(table);
      const presentation = await this.getPresentationRecord(recordId, table);
      if (presentation && presentation.id) {
        await tableRef.update(
          presentation.id,
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
        await tableRef.create(
          {
            ...request,
            sub: request.sub,
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
