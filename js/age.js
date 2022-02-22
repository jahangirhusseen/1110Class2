
let gName = prompt ('Please enter your name');
let gage = prompt ('Please enter your Age');

if( gage >=0 && gage <= 17){
    console.log(`Hi ${gName} 
You are not old enough to get married Yet.
You have to wait ${17 - gage } years.
Thank you.
 `);
} else if(gage >= 18 && gage<= 32 ){
    console.log(`Hi ${gName} 
It's the right time for your wedding.
Thank you.`);
}
else if(gage >= 33 && gage<= 55 ){
    console.log(`Hi ${gName} 
You're late for marriage. You get married soon.
Thank you.`);
}else{
     console.log(`Hi ${gName} 
Your wedding time is over.
Thank you.`);
}
