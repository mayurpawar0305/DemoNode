var mym = require('./mymodule.js');

console.log("string : "+mym.str.toUpperCase());

mym.arr.forEach((v,i)=>{console.log(v+" is present at index "+i)});

console.log("Full name : "+mym.person.fname+" "+mym.person.lname);

console.log("Area : "+mym.calArea(6.3));

console.log(mym.msg.charAt(2));