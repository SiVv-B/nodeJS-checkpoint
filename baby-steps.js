var array = process.argv;
var i = 2 ;
var sum = 0 ;

while ( i< array.length){
    sum+= parseInt(array[i]);
    i+=1;
}
console.log(sum);

