
function emailValidation() { 
    var checkemail=document.getElementById("email").value;

    if (checkemail!="") { 

            var emailValidationRegularExpression = /\S+@\S+\.\S+/;

            var validation = emailValidationRegularExpression.test(document.getElementById("email").value);

            if (!validation) {
               // document.getElementById("email").style.borderColor='red';
               // document.getElementById("email").style.borderRadius= ' 2px solid red';
                document.getElementById("error").innerHTML="Check your email please";
            } else { 
                document.getElementById("success").innerHTML="Email is valid";
                document.getElementById("error").style.display='none';
                document.getElementById("email").style.borderColor='red';
            }
            return validation;
   }
   else{
    document.getElementById("email").style.borderColor='red';
    document.getElementById("error").innerHTML=" add email plz";
     
   } 
}