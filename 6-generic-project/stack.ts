{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type LinkedNode<T> = {
    val: T;
    next?: LinkedNode<T>;
  };

  class StackNodes<T> implements Stack<T> {
    private _size: number = 0;

    get size(): number {
      return this._size;
    }

    private head?: LinkedNode<T>;

    push(value: T): void {
      const newNode: LinkedNode<T> = { val: value, next: this.head };
      this.head = newNode;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('stack empty')
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
  // console.log(stack.pop());

  const stack2 = new StackNodes();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  console.log(stack2.pop());
  console.log(stack2.pop());
  console.log(stack2.pop());
  // console.log(stack2.pop());
}