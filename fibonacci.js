function fibs(n){
    let fibArr = [0,1];

    for (let index = 0; index < n-1; index++) {
        let result = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
        fibArr.push(result)
    }
    
    return fibArr
} //get fibonacci sequence iteratively

function fibsRec(n){

    if ( n < 2 ){
        return n
    }
    else {
        return fibsRec(n-1)+fibsRec(n-2)
    }
} // //get nth fibonacci number recursively

function getFibArr(n){
    let fibArr = []
    for (let index = 0; index <= n; index++) {

        function fibsRec(index){

            if ( index < 2 ){
                return index
            }
            else {
                return fibsRec(index-1)+fibsRec(index-2)
            }
        }
        fibArr.push(fibsRec(index))
    }
    return fibArr
} //get fibonacci sequence using mix of iteration and recursiveness

function getFibArrRec(n, index = 0){

    let fibArr = [];

    if (index > n){
        return fibArr
    } else {
        function fibsRec(index){

            if ( index < 2 ){
                return index
            }
            else {
                return fibsRec(index-1)+fibsRec(index-2)
            }
        }
        fibArr.push(fibsRec(index))
        return fibArr.concat(getFibArrRec(n, index+1))
    }
}//get fibonacci sequence using only recursion

console.log('Iteration:',fibs(5), 'Iteration and Recursiveness:', getFibArr(5), 'Recursiveness:', getFibArrRec(5))