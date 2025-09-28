const { URL } = require('url');

const date = "202302";
const period = "m";
const json = "";

const myURL = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation");

myURL.searchParams.append("date", date);
myURL.searchParams.append("period", period);
myURL.searchParams.append("json", json);

console.log(myURL.toString());