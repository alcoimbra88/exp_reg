const {html2} = require('./base')

// $1 $2 $3 <- Retrovisores  /1 /2 /3

// .* -> tudo que estiver dentro
// \s -> espaço    \S -> nao espaço

//console.log(html2);
//console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 hahah "$3" hahah $4'))