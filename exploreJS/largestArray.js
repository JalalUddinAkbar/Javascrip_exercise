var arr = [2,34, 90, 67,8,4,3,5];

var max = arr[0];

for(i=0; i<arr.length; i++){
    var element = arr[i];
    if(max < element){
        max = element;
    }
}


console.log(max);