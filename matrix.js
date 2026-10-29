export default class Matrix{
    constructor(x){
        this.fData = x;
        this.sY = this.fData.length;
        this.sX = this.fData[0].length;
    }
    sortMatrix(){
        const flatData = this.fData.flat().sort();
        const result = [];
        for(let i = 0; i < this.sY; i++){
            result.push(flatData.slice(i*this.sX, (i+1)*this.sX));
        }
        this.fData = result;
    }
    static Sum(a,b){
        if((a.sX !== b.sX)||(a.sY !== b.sY)){
            return undefined;
        }else{
            const resultData = [];//new Array(a.sY).fill(new Array(a.sX).fill(0));
            for(let y = 0; y < a.sY; y++){
                const s = new Array(a.sX).fill(0);
                for(let x = 0; x < a.sX; x++){
                    s[x] = (a.fData[y][x] + b.fData[y][x]);
                }
                resultData.push(s);
            }
            return new Matrix(resultData);
        }
    }
    static Mult(a,b){
        if(a.sX !== b.sY){
            return undefined;
        }else{
            const resultData = [];//new Array(a.sY).fill(new Array(b.sX).fill(0));
            for(let ay = 0; ay < a.sY; ay++){
                const s = new Array(a.sY).fill(0);
                for(let bx = 0; bx < b.sX; bx++){
                    for(let i = 0; i < a.sX; i++){
                        s[bx] += a.fData[ay][i]*b.fData[i][bx]
                    }                    
                }
                resultData.push(s);
            }
            return new Matrix(resultData);
        }
    }
}