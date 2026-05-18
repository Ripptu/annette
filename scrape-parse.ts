import fs from "fs";

const html = fs.readFileSync("scrape.html", "utf-8");

// extract readable text from paragraphs
const paragraphs = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
const texts = html.match(/<p[^>]*>(.*?)<\/p>/gi) || [];

console.log("Headings:");
paragraphs.forEach(p => console.log(p.replace(/<[^>]+>/g, '').trim()));
console.log("\nParagraphs:");
texts.forEach(p => console.log(p.replace(/<[^>]+>/g, '').trim()));
