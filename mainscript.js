/*function dropdownFunc() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}*/

var popup ='';

var visible = 0;

function showPopup1(popupname) {
        popup = popupname;
        document.getElementById('overlay').classList.add('active');
        document.getElementById(popupname).classList.add('active');
}
function removePopup1() {
        document.getElementById('overlay').classList.remove('active');
        document.getElementById(popup).classList.remove('active');
}

function dropMenu(){
  if(visible == 0){
    document.getElementById('DropdownMenu').classList.add('active');
    visible = 1;
  }
  else{
    document.getElementById('DropdownMenu').classList.remove('active');
    visible = 0;
  }
}