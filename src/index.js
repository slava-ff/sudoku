module.exports = function solveSudoku(matrix) {
  /*
  1. я получаю матрицу
  2. делю на зоны (или при проверке смотрю в зоны)
  3. начинаю в первой строке искать нули, 
  4. как только нашел 1й ноль начинаю цикл подставляя 1 или наименьшее из 9 чисел, которого нет в зоне, столбе или строке
  5. внутри опять вызываю такую же вункцию, где делаю то же самое
  6. внутри опять
  7. внутри опять
  8. ...
  9. если что-то где-то не сходится, то возвращаюсь на уровень выше, где подбираю следующее
  10. если тут все до 9 пройдено и не подошло, опять поднимаюсь на уровень выше, где подбираю следующее число

  проблемы:
  как сделать функцию вложенную саму в себя
  как правильно определять зону 3*3, к которой относится эта ячейка
  console.log(': ', );
  */
  
  
  /* //////////////////////////////           АЛГОРИТМ            //////////////////////////
  пока поиск ячеек не дойдет до matrix[8][8]
    найти пустую ячейку
    подставляю число x = x+1
      проверяю столбец строку квадрат
      если нет - брэйк
      если да - выгоняю результат, с которым начинаю сначала но уже на уровень глубже
  */
/*while (findEmptyPosition(matrix) != -1) {
    let cell = findEmptyPosition (matrix);
  }  */
  //console.log('findEmptyPosition (matrix): ', findEmptyPosition (matrix));







  /*  ////////////////////     ПСЕВДО КОД         ////////////////
  let matrix = ishodnayaMatrix.flat();
  let result = abc(0);
  console.log(result, matrix);

  function abc (floor) {
    console.log(floor);
    let idx = matrix.indexOf(0); // должно делать return -1; что возвращает если индекс не найден?
    if (idx[x] > 8) return check(null);
    for (let i = 1 ; i < 9; i++) {
      console.log(floor, i);
      if check(idx, i) {
        matrix[idx] = i; 
        if (abc(floor+1)) return true;
      } 
    }
    matrix[idx] = 0;
    console.log(floor, 'exit');
    return false;
  }

  function check(idx, i) {
    if (idx === null) {
      ??????????????? 
    } else {
      /*
      let row = Math.floor(idx / 9);
      let col = Math.floor(idx % 9);
      let res = false;
      for (let n=row*9; n<row*9+9; n++) 
        if (matrix[n]===i) return false;
      for (let n=0; n<9; n++)
        if (matrix[n*9+col]===i) return false;


        * /
      
    }
  }

  */



  /////////////      МОЕ РЕШЕНИЕ    //////////
  
  let matrixTwo = matrix;
  let resheno = podbor (0);
  if (!resheno) matrixTwo = 'no solution';
  return matrixTwo;

  function podbor (floor) {
    console.log('floor: ', floor);
    let emptyPosition = findEmptyPosition(); // i = ПОИСКЯЧЕЙКИ. Возвращает: (+) координаты / (-) координаты[0]==9
    let strok = emptyPosition[0];
    let stolb = emptyPosition[1];

    if (!emptyPosition) return true;
    
    for (let chislo = 1; chislo <=9; chislo++) {  // (chislo == n)
      console.log('floor, chislo: ', floor, chislo);
      if (check(strok, stolb, chislo) == true) {
        matrixTwo[strok][stolb] = chislo; // вместо функции ВСТАВКАЧИСЛА
        if (podbor(floor+1)) return true;
        matrixTwo[strok][stolb] = 0;
      }
      console.log('floor exit: ', floor);
    }
    return false;
  }

  /*
  function solveSudoku(matrixTwo, strok, stolb) {
    let cell = findEmptyPosition (matrixTwo);
    strok = emptyPosition[0];
    stolb = emptyPosition[1];
    if (strok == 9) {
      console.log("solved");
      return true;
    }


    for (let chislo = 1; chislo < 10; chislo++) {
      //console.log('START proverka, na vhode chislo: ', chislo);
      if (strokCheck(matrixTwo, strok, chislo) == true && stolbCheck(matrixTwo, stolb, chislo) == true && kvadrCheck(matrixTwo, strok, chislo) == true) {
        matrixTwo[strok][stolb] = chislo;
        if ( solveSudoku(matrixTwo, strok, stolb) ) {                
              return true;
        }
        matrixTwo[strok][stolb] = 0;
      }
    }
    // trigger back tracking
    return false;
  } */

  function strokCheck (strok, chislo) {
    for (let stolb=0; stolb<9; stolb++) {
      if (matrixTwo[strok][stolb] == chislo) {
        console.log('не прошло strokCheck');
        return false;
      } 
    }
    return true;
  }

  function stolbCheck (stolb, chislo) {
    for (let strok=0; strok<9; strok++) {
      //console.log('matrixTwo[strok][stolb] = ', matrixTwo[strok][stolb]);
      if (matrixTwo[strok][stolb] == chislo) {
        console.log('не прошло stolbCheck');
        return false;
      } 
    }
    return true;
  }

  function kvadrCheck (strok, stolb, chislo) {
    let strokStart;
    if (strok == 0 || strok == 1 || strok == 2) {
      strokStart = 0;
    } else if (strok == 3 || strok == 4 || strok == 5) {
      strokStart = 3;
    } else if (strok == 6 || strok == 7 || strok == 8) {
      strokStart = 6;
    }

    let stolbStart;
    if (stolb == 0 || stolb == 1 || stolb == 2) {
      stolbStart = 0;
    } else if (stolb == 3 || stolb == 4 || stolb == 5) {
      stolbStart = 3;
    } else if (stolb == 6 || stolb == 7 || stolb == 8) {
      stolbStart = 6;
    }

    for (let str=0; str<3; str++) {
      for (let stlb=0; stlb<3; stlb++) {
        if (matrixTwo[strok + str][stolb + stlb] == chislo) {
          console.log('не прошло kvadrCheck');
          return false;
        } 
      }
    }
    return true;
  }

  function check (strok, stolb, chislo) {
    if (null) {
      return false;
    } else
    if (strokCheck(strok, chislo) == true && stolbCheck(stolb, chislo) == true && kvadrCheck(strok, stolb, chislo) == true) {
      return true;
    } else {
      return false;
    }
  }

  function findEmptyPosition () {
    //console.log('START findEmptyPosition');
    
    let strok = 0;
    let stolb = 0;
    let position = [];
    if (matrixTwo[strok][stolb] != 0) {
      //console.log('FIND position START: ', matrixTwo[strok][stolb]);
      for (; matrixTwo[strok][stolb] != 0 && strok<9; ) {
        if (stolb < 8) {
          stolb = stolb+1;
        } else {
          strok = strok+1;
          stolb = 0;
          if (strok == 9) {
            console.log('No empty position');
            return false;
          };
        }
      }
    }
    
    position[0] = strok;
    position[1] = stolb;
    console.log('FIND position FINISH: ', position);
    return position;
  }
  

 /*function solveSudoku(grid, row, col) {
  var cell = findUnassignedLocation(grid, row, col);
  row = cell[0];
  col = cell[1];

  // base case: if no empty cell  
  if (row == -1) {
      console.log("solved");
      return true;
  }

  for (var num = 1; num <= 9; num++) {

      if ( noConflicts(grid, row, col, num) ) {   
          grid[row][col] = num;

          if ( solveSudoku(grid, row, col) ) {                
              return true;
          }

                  // mark cell as empty (with 0)    
          grid[row][col] = 0;
      }
  }

  // trigger back tracking
  return false;
}


function findUnassignedLocation(grid, row, col) {
  var done = false;
  var res = [-1, -1];

  while (!done) {
      if (row == 9) {
          done = true;
      }
      else {
          if (grid[row][col] == 0) {
              res[0] = row;
              res[1] = col;
              done = true;
          }
          else {
              if (col < 8) {
                  col++;
              }
              else {
                  row++;
                  col = 0;
              }
          }
      }
  }

  return res;
}

function noConflicts(grid, row, col, num) {
  return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
  for (var col = 0; col < 9; col++)
      if (grid[row][col] == num)
          return false;

  return true;
}
function isColOk(grid, col, num) {
  for (var row = 0; row < 9; row++)
  if (grid[row][col] == num)
      return false;

  return true;    
}
function isBoxOk(grid, row, col, num) {
  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (var r = 0; r < 3; r++)
      for (var c = 0; c < 3; c++)
          if (grid[row + r][col + c] == num)
              return false;

  return true;
}

function printGrid(grid) {
  var res = "";

  for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
          res += grid[i][j];
      }
      res += "\n";
  }
  console.log(res);
}*/

}
