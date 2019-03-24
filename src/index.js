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
      если да - выгоняю результат, с которым начинаю сначала
  */
/*while (findEmptyPosition(matrix) != -1) {
    let cell = findEmptyPosition (matrix);
  }  */
  //console.log('findEmptyPosition (matrix): ', findEmptyPosition (matrix));
  let matrixTwo = matrix;
  let x = 0;
  while (x < 2) {
    console.log('findEmptyPosition(matrixTwo)[0] :', findEmptyPosition(matrixTwo)[0]);

    matrixTwo = insertNum(matrixTwo, findEmptyPosition(matrixTwo));
    console.log('matrixTwo :', matrixTwo);
    //if ()
    x++;
  }
  return matrixTwo;
  
  function insertNum (matrixTwo, emptyPosition) {
    console.log('START insertNum');

    let strok = emptyPosition[0];
    let stolb = emptyPosition[1];
    console.log('strok: ', strok);
    console.log('stolb: ', stolb);

    for (let chislo = 1; chislo < 10; chislo++) {
      //console.log('START proverka, na vhode chislo: ', chislo);
      if (strokCheck(matrixTwo, strok, chislo) == true && stolbCheck(matrixTwo, stolb, chislo) == true && kvadrCheck(matrixTwo, strok, chislo) == true) {
        matrixTwo[strok][stolb] = chislo;
        break;
      }
    }
    console.log('matrixTwo :', matrixTwo);
    return matrixTwo;
  }

  function strokCheck (matrixTwo, strok, chislo) {
    for (let stolb=0; stolb<9; stolb++) {
      if (matrixTwo[strok][stolb] == chislo) {
        console.log('не прошло strokCheck');
        return false;
      } 
    }
    return true;
  }

  function stolbCheck (matrixTwo, stolb, chislo) {
    for (let strok=0; strok<9; strok++) {
      //console.log('matrixTwo[strok][stolb] = ', matrixTwo[strok][stolb]);
      if (matrixTwo[strok][stolb] == chislo) {
        console.log('не прошло stolbCheck');
        return false;
      } 
    }
    return true;
  }

  function kvadrCheck (matrixTwo, strok, stolb, chislo) {
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

  function findEmptyPosition (matrixTwo) {
    console.log('START findEmptyPosition');
    let strok = 0;
    let stolb = -1;
    let position = [];
    
    for (; matrixTwo[strok][stolb] != 0 && strok <9; ) {
      if (stolb < 8) {
        stolb = stolb+1;
      } else {
        strok = strok+1;
        stolb = 0;
      }
    } 
    
    position.push(strok);
    position.push(stolb);
    console.log('FIND position: ', position);
    return position;
  }
}
