function LeapYear(year){

    // check = year%4==0 ? "This is a Leap Year": "Not Leap Year"
    
    // return check;
    check = year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
    
    return check;

}
first = LeapYear(1700);
console.log(first);