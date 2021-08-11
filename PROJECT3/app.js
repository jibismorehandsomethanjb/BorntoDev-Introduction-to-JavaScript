let score = prompt("Put your score here :")
if(score >= 80){
    document.getElementById("result").innerHTML = "You got A"
}else if(score >= 70){
    document.getElementById("result").innerHTML = "You got B"
}else if(score >= 60){
    document.getElementById("result").innerHTML = "You got C"
}else if(score >= 50){
    document.getElementById("result").innerHTML = "You got D"
}else{
    document.getElementById("result").innerHTML = "You got F"
}