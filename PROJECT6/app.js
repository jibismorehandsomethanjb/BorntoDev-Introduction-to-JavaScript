let round = prompt("ja play gee rob dee?")
for(var i = 0 ; i < round ; i++){
    var answer = prompt("head or tail krub?")
    if(Math.floor(Math.random() *10) <=4){
        //head
        random_answer = "head"
    }
    else{
        //tail
        random_answer = "tail"
    }
    if(answer == random_answer){
        alert("Congrats")
    }
    else{
        alert("Why bad things happen to good ppl :(")
    }
}
console.log(random_answer+ " : " +answer)