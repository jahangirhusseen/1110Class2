






/**
 * var k same variable dara  declare kora jai. 

 *  */
 var _name;
_name=('rana')
_name=('raju')
var _name=('rony')



console.log('my name is ' + _name);

/**
 *  let k same variable dara declare kora jaina.
 */
let name;
name =('jamal');
name =('kamal');


// let name =('kasem');
console.log('amar nam ' + name);
/**
 * const e  variable &  value ekbar use kora jay.
 * const er variable namta ekbar use kora hoye hele ar use kora jaina .
 */
const name_=('jon');
// const name_=('jon');

console.log('amar nam '+ name_);







// String ='a-z/ 0-9' quotes er modde ja likha hobe sob string.
// Number =0-9  
// Boolean = true and false 
// Array; ekadik value thakbe.


let nb_p = 20;
let pen_p = 10;
let pp = 10;
let ep = 10;



let total_ammount= nb_p + pen_p + pp + ep;

console.log(`
Notebook Price  =  ${nb_p} Tk
Pen Price       =  ${pen_p} Tk
Pencil Price    =  ${pp} Tk
Eraser Price    =  ${ep} Tk
----------------------------------------
Total Price     =  ${total_ammount} Taka
`);



/** 
 * 
 * 
 * problem
 * 
 */
// let Notebook_price = prompt('Notebook Price');
// let pen_price = prompt();
// let pencil_price = prompt();
// let eraser_price = prompt();



// let total =Notebook_price +pencil_price + pencil_price + eraser_price;


// console.log(`
// Notebook Price  =  ${Notebook_price} Tk
// Pen Price       =  ${pen_price} Tk
// Pencil Price    =  ${pencil_price} Tk
// Eraser Price    =  ${eraser_price} Tk
// ----------------------------------------
// Total Price     =  ${total} Taka
// `);



/** Operators
 * 
 *  Arithmetic
 *  + - * / % -- ++
 * 
 *  Assignment
 *  =
 * 
 *  Comparison
 * = === <> <= >= != !== ?
 * 
 * LOgical
 * && || !
 * 
 * String
 * + +=
 * 
 * Bitwise
 * & ~ ^| << >> >>> <<<
 * 
 * Special (type operator)
 * (?:) delete - in - instanceof - typeof - new - void - yield
 * 
 *  
 */

let vage = prompt('ENTER YOURE AGE') ; 

if (vage >=20 ){
console.log(`apni voter`);
}else{
    console.log(`apni voter na`);
}



let nbr = 20;

switch(nbr){
    case 10:
    console.log('you are the right person');
    break;
    case 15:
        console.log('you are the right person');
        break;
        case 20:
            console.log('you are the right person');
            break;
        
    default:
        console.log(`No value found`);
}