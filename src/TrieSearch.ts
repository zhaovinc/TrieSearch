interface TrieNode {
  children: Map<string, TrieNode>;
}

export class TrieSearch {
  root: TrieNode;

  constructor() {
    this.root = {
      children: new Map<string, TrieNode>(),
    };
  }

  add(word: string) {
    for (var i = 0, current = this.root; i < word.length; i++) {
      const node = current.children.get(word[i]);
      if (node) {
        current = node;
      } else {
        const newNode = {
          children: new Map<string, TrieNode>(),
        };
        current.children.set(word[i], newNode);
        current = newNode;
      }
    }
  }

  prefixSearch(prefix: string): string[] {
    for (var i = 0, current = this.root; i < prefix.length; i++) {
      const node = current.children.get(prefix[i]);
      if (node) {
        current = node;
      } else {
        break;
      }
    }
    return [];
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
