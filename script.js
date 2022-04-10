/*function dropdownFunc() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}*/


function showPopup1() {
        document.getElementById('overlay').classList.add('active');
        document.getElementById('popup1').classList.add('active');
}
function removePopup1() {
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('popup1').classList.remove('active');
}