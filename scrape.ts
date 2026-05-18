import fs from "fs";

async function scrape() {
  const res = await fetch("https://www.annettelachmann.earth/");
  const text = await res.text();
  fs.writeFileSync("scrape.html", text);
  console.log("Scraped successfully.");
}

scrape();
