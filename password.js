const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('password Validator')

reader.question('please enter your password!', function
(response){
    if(response.length >= 10){
        console.log('good password.')
    } else {
        console.log('bad password.')
    }

    reader.close()
})