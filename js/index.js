// Q9

// var num = Number(window.prompt("enter a number"));
// if (num < 0 || num > 100 || isNaN(num)) {
//     console.log("Invalid marks entered. Please enter a number ");
// }
// else{
//     for (var i = 1; i <= num ; i++){
//         console.log(i);
//      }
// }



// Q10

// var num = Number(window.prompt("enter a number"));
// if (num < 0 || num > 100 || isNaN(num)) {
//     console.log("Invalid marks entered. Please enter a number ");
// }
// else{
//     for (var i = 0; i <= 12 ; i++){
//         console.log(i*num);
//      }
// }


// Q11

// var num = Number(window.prompt("enter a number"));
// if (num < 0 || num > 100 || isNaN(num)) {
//     console.log("Invalid marks entered. Please enter a number );
// }
// else{
   
// for (var i = 1; i <= num ; i++){
//      if(i%2==0)
//      {
//         console.log(i);
//      }
// }

// }

// Q12

// var num = Number(window.prompt("enter a number"));
// var power  = Number(window.prompt("enter a power"));
// var result =1;
// if ((num < 0 || num > 100 || isNaN(num)) ||((power < 0 || power > 100 || isNaN(power))))
// {
//     console.log("Invalid marks entered. Please enter a number");
// }else{
//     for (var index = 1; index <= power  ; index++) {
   
//         result=num*result;
//     }
//     console.log(result);
    
// }


// Q12

// var num=0; var total=0 ;
// for (var i = 1; i <= 5 ; i++){
//     num = Number(window.prompt("enter subject mark"));
// if (num < 0 || num > 100 || isNaN(num)) {
//     console.log("Invalid marks entered. Please enter a number between 0 and 100.");
//     break;
// }
//     total=total+num;
   
// }
// console.log("total mark = "+total);
// console.log("Average mark = "+(total/5));
// console.log("total mark = "+(total/5));


// Q13

// var month=0;
// while (true) {
//     month = Number(window.prompt("Enter the month number (1-12):"));
//     if (month < 1 || month > 12 || isNaN(month)) {
//     console.log("Invalid marks entered. Please enter a number between 1 and 12.");
//     break;
// }
//     if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12 ){
//         console.log("the month has 31 days");
//     }
//     else if ( month==4 || month==6 || month==9 || month==11){
//         console.log("the month has 30 days");
//     }
//     else if(month==2){
//         console.log("the month has 28 days and 29 days in a leap year");
//     }
// }

// Q14

// var num; var total=0 ;
// for (var i = 1; i <= 5 ; i++){
//     num = Number(window.prompt("enter subject mark"));
//     if (num < 0 || num > 100 || isNaN(num)) {
//         console.log("Invalid marks entered. Please enter a number between 0 and 100.");
//         break;
//     }
//     total=total+num;
   
// }

// var percentage= (total/5);
// console.log(percentage);
// console.log(total);
// if (percentage >= 90) {
//     console.log("Grade A");
   
// } else if (percentage >= 80) {
//     console.log("Grade B");
// } else if (percentage >= 70) {
//     console.log("Grade C");
// } else if (percentage >= 60) {
//     console.log("Grade D");
// } else if (percentage >= 40) {
//     console.log("Grade E");
// } else if (percentage < 40) {
//     console.log("Grade F");
// } else {
//     console.log("Invalid input. Please enter a valid percentage.");
// }
