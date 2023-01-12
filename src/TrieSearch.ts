interface TrieNode {
  children: Map<string, TrieNode>;
  candidate: string | null;
}

export class TrieSearch {
  root: TrieNode;

  constructor() {
    this.root = {
      children: new Map<string, TrieNode>(),
      candidate: null,
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
          candidate: i === word.length - 1 ? word : null,
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
        if (i === prefix.length - 1) {
          return this.getAllMatches(current);
        }
      } else {
        break;
      }
    }
    return [];
  }

  private getAllMatches(from: TrieNode): string[] {
    let stack: TrieNode[] = [from];
    let matches: string[] = [];

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
