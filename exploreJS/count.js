var words = "My name is King and I am the best";
var count = 0;
for(i=0; i<= words.length; i++){
    if(words[i]==" " && words[i-1] != " "){
        count++;
    }
}

count++;


console.log(count);