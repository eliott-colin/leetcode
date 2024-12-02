function slidingPuzzle(board) {
    const target = [1, 2, 3, 4, 5, 0];
    
    
    let start = [].concat(...board).map(num => num);  // [1, 2, 3, 4, 0, 5] for example
    
     const directions = [-1, 1, -3, 3];  

   function getNeighbors(state) {
        const neighbors = [];
        const zeroPos = state.indexOf(0);  
        for (let direction of directions) {
            const newPos = zeroPos + direction;
            if (newPos >= 0 && newPos < 6 && (zeroPos % 3 !== 0 || direction !== -1) && (zeroPos % 3 !== 2 || direction !== 1)) {
                const newState = [...state];
                [newState[zeroPos], newState[newPos]] = [newState[newPos], newState[zeroPos]];
                neighbors.push(newState);
            }
        }
        return neighbors;
    }

    let queue = [[start, 0]]; 
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [currentState, moves] = queue.shift();
        
        if (currentState.toString() === target.toString()) {
            return moves;
        }

        for (let neighbor of getNeighbors(currentState)) {
            const neighborString = neighbor.toString();
            if (!visited.has(neighborString)) {
                visited.add(neighborString);
                queue.push([neighbor, moves + 1]);
            }
        }
    }

    return -1;
}
console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]]));  // Output: 1
console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]]));  // Output: -1
console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]));  // Output: 5
