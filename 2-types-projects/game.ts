type Position = {
  x: number;
  y: number;
}

let position: Position = {
  x: 0,
  y: 0
}

type moveType = 'up' | 'down' | 'left' | 'right';

function move(moveType: moveType): void {
  switch (moveType) {
    case 'up':
      position.y = position.y +1 ;
      break;
    case 'down':
      position.y = position.y -1 ;
      break;
    case 'left':
      position.x = position.x -1 ;
      break;
    case 'right':
      position.x = position.x +1 ;
      break; 
  }
}

 

/**
 * Let's make a game 🕹
 */
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
