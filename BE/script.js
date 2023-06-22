import { XMLParser } from "fast-xml-parser";
import { readFileSync } from "fs";
import { createServer } from "http";
import { lodash } from "./lodash.js";

const xmlFile = readFileSync(`${process.cwd()}/IoTSySML_QM.xml`, "utf8");

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  ignoreDeclaration: true,
});
const json = parser.parse(xmlFile);

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  console.log(lodash.pickDeep(json, ["@_Name"]));
  res.end(JSON.stringify(lodash.pickDeep(json, ["@_Name"])));
});

server.listen(1337, () => {
  console.log("Server running at 1337");
});
