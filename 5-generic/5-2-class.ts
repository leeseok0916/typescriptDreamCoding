// interface Either {
//   left: () => number;
//   right: () => number;
// }

// class SimpleEither implements Either {
//   constructor(private leftValue: number, private rightValue: number) {}

//   left(): number { return this.leftValue }

//   right(): number { return this.rightValue }
// }

// const either = new SimpleEither(4, 5);
// console.log(either.left()); // 4
// console.log(either.right()); // 5

interface Either<L, R> {
  left: () => L;
  right: () => R;
}


class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L { return this.leftValue }

  right(): R { return this.rightValue }
}

const either1 = new SimpleEither(4, 5);
console.log(either1.left()); // 4
console.log(either1.right()); // 5

const either2 = new SimpleEither(4, 'twostones');
console.log(either2.left()); // 4
console.log(either2.right()); // twostones
