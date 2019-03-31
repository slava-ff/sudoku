module.exports = function solveSudoku(matrix) {
        
 
        let x = matrix.flat();
        console.log(x);
        
        let solved = calc(0);
        
        if (solved) {
            matrix = [];
            for (let r = 0; r < 9; r++)
                matrix.push(x.splice(0,9));

        } else matrix = 'no solution :(';

        return matrix;


        function calc (z) {
            console.log(z);
            
            let i = x.indexOf(0);
            console.log(z, i);
            
            if (i < 0) return true; // no more empty cells left, so we are done
            
            for (let n = 1; n <= 9; n++) { // for each number
                if (check(z, i, n)) { // if n can be placed into x[i]
                    x[i] = n;  // place it, and try to solve next cell
                    if (calc (z+1)) return true; // solved
                    x[i] = 0; // rollback
                }
            }
            return false; // if we are here, we did not find solution yet
        }

        function check (z, i, n) {
            console.log(z,i,n);
            // row and col of i
            let r = Math.floor(i / 9),  // row
                c = i % 9;              // col
            // check row and column
            for (let z = 0; z < 9; z++) { 
                if (x [r * 9 + z] === n) {console.log(z,i,n,'r'); return false; } // row
                if (x [z * 9 + c] === n) {console.log(z,i,n,'c'); return false; } // column
            }
            // check square    
            r = Math.floor(r / 3) * 3; // first row of square
            c = Math.floor(c / 3) * 3; // first col of square
            for (let zr = 0; zr < 3; zr++) // 3 rows
                for (let zc = 0; zc < 3; zc++) // by 3 columns
                    if (x [ 9*(r+zr) + c+zc] === n) { console.log(z,i,n,'s'); return false; }
            return true;
        }
    }
