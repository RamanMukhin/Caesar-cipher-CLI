
const fs = require('fs');

fs.readFile('./input', function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});

/*
const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;
 
console.log(userName);
*/
