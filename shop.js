var Name=document.getElementById('Name').value;
var Email=document.getElementById('Email').value;
var Password=document.getElementById('Password').value;
var Male=document.getElementById('Male');
var Female=document.getElementById('Female');
var Prefer=document.getElementById('Prefer');
var Gender;
if(Male.checked){
    var Gender=Male;
}
else if(Female.checked){
    var Gender=Female;
}
else{
    var Gender=Prefer ;
}
var signin=document.getElementById('signin');
signin.addEventListener('click',function(){
    var Name=document.getElementById('Name').value;
    var Email=document.getElementById('Email').value;
    var Password=document.getElementById('Password').value;
    if(Name&&Email&&Password!=""){
        alert('You have been signed in');
    }
    else{
        alert('Check if all the required fields have been filled');
    }
})