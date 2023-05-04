{
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
    const newNode: LinkedNode = { val: value, next: this.head };
    this.head = newNode;
    this._size++;
  }

  pop(): string {
    if (!this.head) {
      return '';
      
    }

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.val;
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
}