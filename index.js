import Matrix from './Matrix.js';
// сортировка
const mSort = new Matrix([[9,8,7],[2,1,3],[5,4,6]]);
mSort.sortMatrix();
console.log('sortMatrix');
for(let y = 0; y < mSort.sY; y++){
    let s = '[';
    for(let x = 0; x < mSort.sX; x++){
        s+=' '+mSort.fData[y][x];
    }
    s+=' ]';
    console.log(s);
}
//сложение
const a = new Matrix([[1,2,3],[3,4,5]]);
const b = new Matrix([[6,5,4],[6,5,4]]);
const mSum = Matrix.Sum(a,b);
console.log('SumMatrix');
for(let y = 0; y < mSum.sY; y++){
    let s = '[';
    for(let x = 0; x < mSum.sX; x++){
        s+=' '+mSum.fData[y][x];
    }
    s+=' ]';
    console.log(s);
}

//умножение
const m1 = new Matrix([[1,2,3],[4,5,6]]);
const m2 = new Matrix([[7,8],[9,1],[2,3]]);
const mMult = Matrix.Mult(m1,m2);
console.log('MultMatrix');
for(let y = 0; y < mMult.sY; y++){
    let s = '[';
    for(let x = 0; x < mMult.sX; x++){
        s+=' '+mMult.fData[y][x];
    }
    s+=' ]';
    console.log(s);
}

