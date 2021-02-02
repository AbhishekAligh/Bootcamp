/*Implementing any 5 loadash methods*/
/*chunk method*/
function chunk(arr,val){
    var finalArr=[];
    for(var i=0; i<arr.length; i += val)
    {
        var tempArray = [];
        for(var j=i; (j<i+val) && (j<arr.length); j++)
        {
            tempArray.push(arr[j]);
        }
        finalArr.push(tempArray);
    }
    return finalArr;
}

console.log(chunk([0,1,2,3,4,5,6,7,8,9],3));

/*reduce method*/
function reduce(array, callBackFunction, n=0){
    for(var i=0;i<array.length; i++)
    {
        n = callBackFunction(n,array[i]);
    }
    return n;
}
console.log(reduce([10,3,4,5], function(accumulator, item){
    return accumulator+item;
},2));


/*filter method*/
function filter(array, callBackFunction){
    var finalArr = [];
    var k =0;
    for(var i=0;i<array.length;i++)
    {
        callBackFunction(array[i])?finalArr[k++]=array[i]:1;
    }
    return finalArr;
}
console.log(filter([{name:'bike', price:10000}, {name:'toy', price:10}, {name: 'tv',price:15000}], function(item){
    return item.price>10;
}));

/*find method*/
function find(array, callBackFunction){
    var flag=0;
    for(var i=0;i<array.length;i++)
    {
        callBackFunction(array[i])?flag=1:1;
        if(flag===1) return array[i];
    }
    return 0;
}
console.log(filter([{name:'bike', price:10000}, {name:'toy', price:10}, {name: 'tv',price:15000}], function(item){
    return item.price===10;
}));


/*sum Method*/
function sum(array){
    let result = 0;
    for(var i=0;i<array.length;i++)
    {
        result = result+array[i];
    }
    return result;
}
console.log(sum([12,3,43,5]));