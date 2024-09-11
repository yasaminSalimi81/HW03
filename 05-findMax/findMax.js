// write your func here
function arrays(arr) {
    let bignumber = 0 ;
    for ( i = 0 ; i < arr.length ; i ++) {
        if (  bignumber < arr[i] ) {
            bignumber = arr[i];
        }
    }
    return bignumber;
}
const arr = arrays([2,5,1,15,7])
console.log(arr);
