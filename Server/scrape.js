
const ScrapeIt = require("scrape-it");
const fs = require('fs');
async function GetData() {
  try {
    const result = await ScrapeIt(
      "https://www.amazon.com.mx/s?k=box+gloves&sprefix=box+glo%2Caps%2C137&ref=nb_sb_ss_ts-doa-p_1_7",
      {
        presentations: {
            listItem: "div.s-card-container",
          data: {
            Description: "span.a-size-base-plus",
          },
        },
      }
    );
return result.data;
   } catch (error) {
    console.log("Ocurrio un error: " + error);
  }
}

module.exports = GetData;