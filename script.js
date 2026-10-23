function instersects(a,b){
    return new Set(a.filter((elem)=>{return b.includes(elem);}));
}
console.log(instersects([1,2,3],[2,4]));