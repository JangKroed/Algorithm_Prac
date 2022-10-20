let arr = [1,2,3,4,5,6,7]

function checkForOdd(item){
    return item %2 ===0;
}

function remoiveOdd(items){
    return items.filter(checkForOdd)
}

console.log(remoiveOdd(arr))