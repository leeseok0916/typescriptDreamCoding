interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type LinkedNode = {
  val: string;
  next?: LinkedNode;
};

class StackNodes implements Stack {
  private _size: number = 0;

  get size(): number {
    return this._size;
  }

  private head?: LinkedNode;

  push(value: string): void {
    this._size++;
    if (!this.head) {
      const newNode: LinkedNode = { val: value };
      this.head = newNode;
    } else {
      const newNode: LinkedNode = { val: value, next: this.head };
      this.head = newNode;
    }
  }

  pop(): string {
    this._size--;
    if (this.head) {
      const node = this.head;
      this.head = node.next;
      return node.val;
    } else {
      return '';
    }
  }
}

const stack = new StackNodes();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());