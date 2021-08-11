let lotto_number = prompt("กรุณาเลือกเลขที่ต้องการ (1-999)")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
document.getElementById("lotto_number").innerHTML = lotto_number
if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "YOU WIN THE LOTTO"
}
else{
    document.getElementById("result").innerHTML = "Sorry for your bad luck :("
}