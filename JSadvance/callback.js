function callBack(name, age, task){
    console.log('Hello', name)
    console.log('Your age is', age)
    task()
    
}
function takebath(){
    console.log('Take Shower')
}
function washHand(){
    console.log('Wash your hand')
}

callBack('Rakib', 17, takebath);
callBack('Karim', 23, washHand);