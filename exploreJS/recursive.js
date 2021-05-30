function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return n * fact(n-1)
    }

}

result = fact(10);
console.log(result);