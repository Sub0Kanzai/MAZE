const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  
  const mazeContainer = document.getElementById('maze');
  const wallColor = '#999'; // Default wall color
  
  function createMaze() {
    maze.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        if (cell === 1) {
          cellElement.classList.add('wall');
          cellElement.style.backgroundColor = wallColor; // Apply wall color
        }
        mazeContainer.appendChild(cellElement);
      });
    });
  }
  
  const player = document.createElement('div');
  player.classList.add('player');
  player.style.gridColumn = '2'; // Initial player column position
  player.style.gridRow = '2'; // Initial player row position
  mazeContainer.appendChild(player); // Append player to maze container
  
  function movePlayer(event) {
    let x = parseInt(player.style.gridColumn);
    let y = parseInt(player.style.gridRow);
  
    switch(event.key) {
      case 'ArrowUp':
        if (y > 1 && maze[y - 2][x - 1] !== 1 && maze[y - 1][x - 1] !== 1) {
          y--;
        }
        break;
      case 'ArrowDown':
        if (y < maze.length && maze[y][x - 1] !== 1 && maze[y][x - 1] !== 1) {
          y++;
        }
        break;
      case 'ArrowLeft':
        if (x > 1 && maze[y - 1][x - 2] !== 1) {
          x--;
        }
        break;
      case 'ArrowRight':
        if (x < maze[0].length && maze[y - 1][x] !== 1) {
          x++;
        }
        break;
      default:
        return;
    }
  
    player.style.gridColumn = x;
    player.style.gridRow = y;
  
    checkGameCompletion(x, y);
  }
  
  function checkGameCompletion(x, y) {
    if (x === maze[0].length && y === maze.length) {
      alert('Congratulations! You have completed the maze.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createMaze();
    document.addEventListener('keydown', movePlayer);
  });
  