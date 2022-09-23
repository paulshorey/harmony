import Airtable from "airtable";

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);

/**
 * Get rows from Airtable table
 * @param options.rec - IDK - forget what this is exactly - find record in table
 * @param options.table {string} - name of the "base" in Airtable (*required*)
 * @param options.columns {string} - specify any column that you want to read data from (*required*)
 * @param options.view {string} - Default is "Grid view". Specify if different.
 * @param options.formula {string} - Airtable "formula". Example: `{page} = "general"`.
 * @returns {array} - list of objects. Each object is a row. Each value in the object is a cell.
 */
export default function getAirtableRows({
  rec,
  table,
  columns,
  view = "Grid view",
  formula = ""
}): Promise<Array<Record<string, any>>> {
  return new Promise((resolve) => {
    let output = [];

    if (rec) {
      base(table).find(rec, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }

        let row = {};
        for (let key of columns) {
          row[key] = record.get(key) || null;
        }
        output.push(row);
        resolve([row]);
      });
      return;
    }

    base(table)
      .select({
        maxRecords: 100,
        view,
        filterByFormula: formula
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // each cell in row
          records.forEach(function (record) {
            let row = {};
            for (let key of columns) {
              row[key] = record.get(key) || null;
            }
            output.push(row);
          });
          // next row
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          }
          resolve(output);
        }
      );
  });
}
