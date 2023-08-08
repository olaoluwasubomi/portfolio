let one = document.getElementById("bugger");
let two = document.getElementById("menu");
let three = document.getElementById("remove");
one.onclick = function(){
        one.style.display = "none";
        two.style.display = "block";
        three.style.display = "block";
}
three.onclick = function(){
        two.style.display = "none";
        three.style.display = "none";
        one.style.display = "block";
}