function validatefname() {
  fnm =mainform.fname.value;
  
  if (fnm=='') 
  {
  window.alert('Your First name is a required field. Please try again.');
  event.returnValue=false;
}

}


function validatelname() {

lmn = mainform.lname.value;

if (lmn== '') {
window.alert('Your Last name is a required field. Please try again.');
  event.returnValue=false;
 }
 
 }

function validateage() {
if (mainform.age.options[0].selected) {
alert('Please choose an Age Range.');
event.returnValue=false;
}
}

function validatecountry1() 
{
if (mainform.country1.options[0].selected) 
{
alert('Select your country');
event.returnValue=false;
}
}

function validatedob() 
{
 dob =mainform.dob.value;
  
  if (dob=='') {
  window.alert('Please enter your Date of Birth.');
  event.returnValue=false;
 }
}


onsubmit="validatefname() || validatelname() || validateage() || validatecountry1() ||  validatedob();">
   