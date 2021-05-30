Doct = 350;
Engr = 570;
Minister = 139;

if (Doct>Engr && Doct> Minister){
    console.log("Doct is Rich");
}

else if(Engr>Doct && Engr> Minister){
    console.log("Engr is Rich");
}
else{
    console.log("Minister is Rich");
}