let val;

const today = new Date();
let birthday = new Date('06-27-2001 12:30');
birthday = new Date ('May 28 1983');
birthday = new Date ('8/27/90');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(27);
birthday.setFullYear(2070);
birthday.setHours(2);
birthday.setMinutes(24);
birthday.setSeconds(20);


console.log(today);