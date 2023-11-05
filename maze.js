/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  const row = index[0];
  const col = index[1];

  // Check if we have reached the exit
  if (maze[row][col] === "e") {
    return "";
  }

  // Mark the current cell as visited
  maze[row][col] = "*";

  // Define possible moves (right, left, down, up)
  const moves = [
    { direction: "R", newRow: row, newCol: col + 1 },
    { direction: "L", newRow: row, newCol: col - 1 },
    { direction: "D", newRow: row + 1, newCol: col },
    { direction: "U", newRow: row - 1, newCol: col },
  ];

  // Try each possible move
  for (const move of moves) {
    const { direction, newRow, newCol } = move;

    // Check if the move is valid (inside the maze and not blocked)
    if (
      newRow >= 0 &&
      newRow < maze.length &&
      newCol >= 0 &&
      newCol < maze[newRow].length &&
      maze[newRow][newCol] !== "*"
    ) {
      const path = mazeSolver(maze, [newRow, newCol]);

      // If a path is found, return the direction and append it to the path
      if (path !== null) {
        return direction + path;
      }
    }
  }

  // If no path is found, backtrack by marking the cell as unvisited
  maze[row][col] = " ";

  // Return null to indicate that no path was found
  return null;
}

module.exports = mazeSolver;
