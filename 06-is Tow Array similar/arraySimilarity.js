// write your func here
function equality (array1,array2) {
    let truthy = [];
    if(array1.length == array2.length) {
        for( item of array1) {
            truthy[item] = array1[item] === array2[item] ; 
        };
        return truthy.every(function(boulean){
            return boulean === true;
        });
    } else return false;
}
const results = equality([1,2,3,4,5,6,7,8,88] , [1,2,3,4,5,6,7,8,9]);
console.log(results);
