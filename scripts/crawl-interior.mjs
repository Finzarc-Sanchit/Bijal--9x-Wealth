import https from "node:https";

const base = "https://9x-wealth-website-web.vercel.app";

const paths = [
  "/services/term-legacy",
  "/services/health",
  "/services/keyman",
  "/services/wealth-ulips",
  "/services/global",
  "/services/specie",
  "/services",
  "/about",
  "/about/practice",
  "/about/team",
  "/about/press",
  "/families",
  "/families/uhni",
  "/families/nri",
  "/families/business-owners",
  "/families/listed-promoters",
  "/resources",
  "/resources/mwpa-guide",
  "/resources/glossary",
  "/resources/faq",
  "/resources/calculators",
  "/insights",
  "/careers",
  "/contact",
  "/offices/mumbai",
  "/offices/bengaluru",
  "/offices/delhi",
  "/portal",
  "/legal/privacy",
  "/legal/terms",
  "/legal/disclosures",
];

function fetch(path) {
  return new Promise((resolve, reject) => {
    https
      .get(base + path, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      })
      .on("error", reject);
  });
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 1);
}

const navPairs = [];
const html0 = await fetch("/");
const re = /label\\":\\"([^"\\]+)\\",\\"href\\":\\"([^"\\]+)\\"/g;
let m;
while ((m = re.exec(html0)) !== null) {
  navPairs.push({ label: m[1], href: m[2] });
}
console.log("NAV_PAIRS", JSON.stringify(navPairs, null, 2));

for (const p of paths) {
  const html = await fetch(p);
  const texts = stripHtml(html);
  console.log("\n---PATH---", p);
  console.log(texts.join("\n"));
}
