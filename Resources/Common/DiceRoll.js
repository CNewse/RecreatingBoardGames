function SingleRoll() {
    var DiceRoll = Math.floor((Math.random() * 6) + 1);
    document.getElementById("DiceRoll").innerHTML = DiceRoll;
}

function DoubleRoll() {
    var DoubleRoll = (Math.floor((Math.random() * 6) + 1) + (Math.floor((Math.random() * 6) + 1);
    document.getElementById("DoubleRoll").innerHTML = DoubleRoll;
}
