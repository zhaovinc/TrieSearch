import { TrieSearch } from "../TrieSearch";

test("adds 1 + 2 to equal 3", () => {
  const trie = new TrieSearch();
  trie.add("abc", "abc");
  trie.add("abgl", "abgl");
  trie.add("cdf", "cdf");
  trie.add("abcd", "abcd");
  trie.add("lmn", "lmn");
  trie.add("lmed", "lmed");
  console.info(trie.stringify());

  const search1 = trie.prefixSearch("ab");
  const search2 = trie.prefixSearch("abc");
  const search3 = trie.prefixSearch("lmed");
  const search4 = trie.prefixSearch("az");

  expect(search1.length).toBe(3);
  expect(search2.length).toBe(2);
  expect(search3.length).toBe(1);
  expect(search4.length).toBe(0);
});
