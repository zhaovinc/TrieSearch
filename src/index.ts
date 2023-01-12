import data from "./data.json";
import { TrieSearch } from "./TrieSearch";

interface Suburb {
  Name: string;
  State: string;
  Postcode: string;
}

const australianSuburbs = data as Suburb[];

console.time("build trie search tree");
const trie = new TrieSearch<Suburb>();
for (var suburb of australianSuburbs) {
  trie.add(suburb.Name, suburb);
}
console.timeEnd("build trie search tree");

let searchResult: Suburb[] = [];

const search = (word: string) => {
  console.time(`search suburb ${word}`);
  const searchResult = trie.prefixSearch(word);
  console.log({ searchResult });
  console.timeEnd(`search suburb ${word}`);
};

search("mount");
search("calam");
search("sunny");
search("su");
