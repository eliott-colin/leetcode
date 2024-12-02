function countUnguarded(m, n, guards, walls) {
    // Create a grid to represent the cells
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Mark guards and walls on the grid
    for (const [row, col] of guards) {
        grid[row][col] = "G"; // Guard
    }

    for (const [row, col] of walls) {
        grid[row][col] = "W"; // Wall
    }

    // Mark the cells guarded by guards
    const directions = [
        [-1, 0], // North
        [1, 0],  // South
        [0, -1], // West
        [0, 1],  // East
    ];

    for (const [row, col] of guards) {
        for (const [dr, dc] of directions) {
            let r = row + dr;
            let c = col + dc;

            // Move in the direction until a wall or another guard is hit
            while (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] !== "W" && grid[r][c] !== "G") {
                grid[r][c] = "X"; // Mark as guarded
                r += dr;
                c += dc;
            }
        }
    }

    // Count unguarded cells
    let unguardedCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) { // Empty and unguarded cell
                unguardedCount++;
            }
        }
    }

    return unguardedCount;
}

// Example usage
const m1 = 4, n1 = 6;
const guards1 = [[0, 0], [1, 1], [2, 3]];
const walls1 = [[0, 1], [2, 2], [1, 4]];
console.log(countUnguarded(m1, n1, guards1, walls1)); // Output: 7

const m2 = 3, n2 = 3;
const guards2 = [[1, 1]];
const walls2 = [[0, 1], [1, 0], [2, 1], [1, 2]];
console.log(countUnguarded(m2, n2, guards2, walls2)); // Output: 4
