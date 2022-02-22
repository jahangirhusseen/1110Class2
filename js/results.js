


let s_name = prompt ('Enter Your Student Name');
let s_roll = prompt ('Enter Your Student Rool Number')
let marks = prompt ('Enter Your  Marks');


if( marks >=0 && marks <= 32){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 0 and Grade F`);
}else if( marks >=33 && marks <40){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 1 and Grade D`);
}else if( marks >=40 && marks  <50){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 2 and Grade C`);
}else if( marks >=50 && marks  <60){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 3 and Grade B`);
}else if( marks >=60 && marks  <70){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 3.5 and Grade A-`);
}else if( marks >=70 && marks  <80){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 4 and Grade A`);
}else if( marks >=80 && marks  <=100){
    console.log(`Hi ${s_name} your roll number is ${s_roll} and you got a GPA of 5 and Grade A+`);
}else {
    console.log(`Please Enter The Correct Information`);
}
