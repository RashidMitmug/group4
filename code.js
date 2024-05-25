var fname;
var lname;
var email;
var pword;
var cnum;
var reason;
var sex;

function submitting(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    pword = document.getElementById("pword").value;
    cnum = document.getElementById("cnum").value;
    reason = document.getElementById("reason").value;
    sex = document.getElementsByName("opt").value;
    alert(sex);
   
    
    window.location.href="secondpage.html";
}
