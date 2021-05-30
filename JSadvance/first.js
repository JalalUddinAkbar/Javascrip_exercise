function evenify(num) {
    if (num % 2 == 0){
        console.log( num, ": is even number");
    }
    else{
        console.log( num * 2, ": doubled");
    }
}

function loopify(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];    
        evenify(num)
    }
    
}

nums = [4,7,3,12,34,9,8]
loopify(nums)


friendAge = [13,15,16,12,20,17]
loopify(friendAge)

rank = [1,2,3,4,5,6,7,8]
loopify(rank)
