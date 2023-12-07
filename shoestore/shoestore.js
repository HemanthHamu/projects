const dash = document.getElementById("dash");
const plus = document.getElementById("plus");
const quantity = document.getElementById("quantity");

plus.addEventListener("click",increment)
var i = 0;
function increment () {
   quantity.innerHTML = ++i
}
dash.addEventListener("click",decrement)
var j = i;
var k = j - 1
function decrement () {
    quantity.innerHTML = k
}
const imgButton = document.getElementById('sidebar-image')
const sidebar = document.getElementById('js-sidebar')

imgButton.addEventListener('click',()=> {
    if(sidebar.style.right==='-110%'){
        sidebar.style.right = 0;
    }
    else{
        sidebar.style.right = '-110%'
    }
})