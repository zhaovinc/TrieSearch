import data from "./data.json";

interface Suburb {
  Name: string;
  State: string;
  Postcode: string;
}

const australianSuburbs = data as Suburb[];
console.log({ australianSuburbs });
