fs = require('fs')
function separate(sentence){
    const index = sentence.indexOf(',')
    return [sentence.slice(0,index) , sentence.slice(index+1)]
}
fs.readFile('messages.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const messages = data.split('\n')
    let line = messages[Math.floor(Math.random()*messages.length)]
    line = separate(line)
    console.log(line)
});