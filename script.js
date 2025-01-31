//Step 2: If-else Condition
let number = 0;

if (number > 0) {
    console.log("This number is positive.") 
} 
else if (number < 0) {
    console.log("This number is negative.")
} 
else {
    console.log("this number is zero") 
}

//Step 3: Switch Statement
var day = 3;

switch (day) {
    case 1:
     console.log("Sunday") 
        break;
    case 2:
     console.log("Monday") 
        break;
    case 3:
     console.log("Tuesday") 
        break;
    case 4:
     console.log("Wednesday") 
        break;
    case 5:
     console.log("Thursday") 
        break;
    case 6:
     console.log("Friday") 
        break;
    case 7:
     console.log("Saturday") 
        break; 
}
//Step 4: Loops (For, While, Do...While)
//FOR LOOP
for (let i = 1; i <= 5; i++){ 
   if(i === 5){
   }
    console.log(i);
}
 
//WHILE LOOP
let i = 0; 
   while (i <= 4) { 
     i++;
     console.log(i);
}
//DO...WHILE
let j = 1; 
 
do {
    console.log(j);
    j++;
} 
while (j <= 5);

//Step 5: Control Flow with break and continue
//Break
for (var f = 1; f <= 6; f++){
  if (f === 4) {
    break;
  }
  console.log(f);
} 
console.log("loop exited  f = 3")

//Continue
for (var f = 0; f < 6; f++){
  if (f === 3) {
    continue;
  }
  console.log("The number " + f + " is to continue");
}

//Step 6: Scope and Context
let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar)
    console.log(localVar)
}
