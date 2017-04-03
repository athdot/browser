function search(){
var input = document.getElementById('search').value;
var length = input.length
var run = 0
var woobsat = 0
while(run<length){
if(input.substring(run,run+1) === "."){
if(input.substring(run,run+4) === ".com"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".org"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".net"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".edu"){
var woobsat = 1
}
if(input.substring(run,run+5) === ".html"){
var woobsat = 1
}
if(input.substring(run,run+3) === ".js"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".bat"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".txt"){
var woobsat = 1
}
if(input.substring(run,run+3) === ".io"){
var woobsat = 1
}
if(input.substring(run,run+3) === ".de"){
var woobsat = 1
}
if(input.substring(run,run+3) === ".py"){
var woobsat = 1
}
if(input.substring(run,run+5) === ".json"){
var woobsat = 1
}
if(input.substring(run,run+4) === ".css"){
var woobsat = 1
}
}
var run = run+1
}
if(woobsat === 1){
var location = input
}
if(woobsat === 0){
var location = ("https://www.google.com/?safe=active&ssui=on#safe=active&q=" + input + "&*")
}
document.getElementById('content').setAttribute('src',location);
document.getElementById('search').setAttribute('value',location);
}
