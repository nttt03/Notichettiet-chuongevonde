// JavaScript Document
function KiemTraThongTin(){

var firstname=document.getElementById("firstname");
 
   if (firstname.value==""){
   alert("Please enter First Name.");
   firstname.focus();
    return false;
   }
   if (isNaN(firstname.value)==false){
   alert("First Name must be the word.");
   firstname.value="";
   firstname.focus();
 return false;
}
var lastname=document.getElementById("lastname");
 
   if (lastname.value==""){
   alert("Please enter Last Name.");
   lastname.focus();
    return false;
   }
   if (isNaN(lastname.value)==false){
   alert("Last Name must be the word.");
   lastname.value="";
   lastname.focus();
 return false;
}

var email=window.document.register.txtemail;
  re=/\w+@\w+\.\w+/;
  if(email.value==""){
	  alert("Please enter email.");
	  email.focus();
	  return false;
  }
  else
      if(re.test(email.value)==false){
		  alert("Email malformed!");
		  email.focus();
		  return false;
	  }
var address=document.getElementById("address");
 
   if (address.value==""){
   alert("Please enter Address.");
   address.focus();
    return false;
}	

var choice = confirm('Your Information\n'+firstname.value+"\n"+lastname.value+"\n"+email.value+"\n"+address.value)
 	  if(choice == 1){	  
          alert("Successful registration congratulations :].");
	  }
 return true;
}