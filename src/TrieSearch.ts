interface TrieNode<T> {
  children: Map<string, TrieNode<T>>;
  candidate: T | null;
}

export class TrieSearch<T = string> {
  root: TrieNode<T>;

  constructor() {
    this.root = {
      children: new Map<string, TrieNode<T>>(),
      candidate: null,
    };
  }

  add(word: string, candidate: T) {
    for (var i = 0, current = this.root; i < word.length; i++) {
      const node = current.children.get(word[i]);
      if (node) {
        current = node;
      } else {
        const newNode = {
          children: new Map<string, TrieNode<T>>(),
          candidate: i === word.length - 1 ? candidate : null,
        };
        current.children.set(word[i], newNode);
        current = newNode;
      }
    }
  }

  prefixSearch(prefix: string): T[] {
    prefix = prefix.toUpperCase();
    for (var i = 0, current = this.root; i < prefix.length; i++) {
      const node = current.children.get(prefix[i]);
      if (node) {
        current = node;
        if (i === prefix.length - 1) {
          return this.getAllMatches(current);
        }
      } else {
        break;
      }
    }
    return [];
  }

  private getAllMatches(from: TrieNode<T>): T[] {
    let stack: TrieNode<T>[] = [from];
    let matches: T[] = [];

    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) break;

      if (current.candidate) {
        matches.push(current.candidate);
      }
      stack.push(...Array.from(current.children.values()));
    }

    return matches;
  }

  stringify(): string {
    var replacer = (key: string, value: any) => {
      if (value instanceof Map) {
        return Object.fromEntries(value);
      } else {
        return value;
      }
    };
    return JSON.stringify(this.root, replacer, 2);
  }
}
