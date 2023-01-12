import { TrieSearch } from "../TrieSearch";

test("basic search", () => {
  const trie = new TrieSearch();
  trie.add("abc", "abc");
  trie.add("abgl", "abgl");
  trie.add("cdf", "cdf");
  trie.add("abcd", "abcd");
  trie.add("lmn", "lmn");
  trie.add("lmed", "lmed");
  //console.info(trie.stringify());

  const search1 = trie.prefixSearch("ab");
  const search2 = trie.prefixSearch("abc");
  const search3 = trie.prefixSearch("lmed");
  const search4 = trie.prefixSearch("az");

  expect(search1.length).toBe(3);
  expect(search2.length).toBe(2);
  expect(search3.length).toBe(1);
  expect(search4.length).toBe(0);
});

test("reverse adding scenario", () => {
  const trie = new TrieSearch();
  trie.add("abcd", "abcd");
  trie.add("abc", "abc");

  const result = trie.prefixSearch("ab");
  expect(result.length).toBe(2);
});
