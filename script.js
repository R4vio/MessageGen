function Quote(author, message){
    if(author === ''){
        author = 'Unknown'
    }
    author = author.slice(1,)
    author = author.slice(0, author.indexOf('"'))
    message = message.slice(0, message.indexOf('"', 2)+1)
    return {
        author,
        message
    }  
}
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
    const quote = Quote(line[0], line[1])
    console.log(`${quote.message} ~ ${quote.author}`);
});