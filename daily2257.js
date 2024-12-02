/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  let tableau = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
   
  let pion = [guards,walls]
  for (let n = 0; n < pion.length; n++) {
    for (let index = 0; index < pion[n].length; index++) {
        if (pion[n]==pion[0]) {
            var type="G";
        }else{
            var type ="W"
        }
        tableau[pion[n][index][0]][pion[n][index][1]] = type;
   } 
  }
  
  for (let i = 0; i < m; i++) {
    console.log(tableau[i].join(" "))
}
  return tableau;
};
console.log(countUnguarded(4, 6, [[0,0],[1,1],[2,3]], [[0,1],[2,2],[1,4]]))