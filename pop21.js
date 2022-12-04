const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});




// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});



window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector("#popup").style.display = "block";
    // document.querySelector(".container").style.display = "block";
  }, 
  4000);
});

//function one

document.querySelector("#close1").addEventListener("click", take1);
document.querySelector("#close2").addEventListener("click", take2);

function take1() {
  var in1 = document.getElementById("username");
  var in2 = document.getElementById("passwd");
  var in3 = document.getElementById("tick");

  if (in1.value.trim() == "" && in2.value.trim() == "") {
    alert("*Fill the blank spaces");
    return false;
  }
   else if (in1.value.trim() == "") {
    document.getElementById("erroruser").innerText =
      " Please enter email address";
    return false;
  }
   else if (in2.value.trim() == "") {
    document.getElementById("errorpw").innerHTML = " Please enter password";
    return false;
  }

  function checkpasswd(str) {
    var re = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }

   if (in2.value != "") {
    if (in2.value.trim().length < 9) {
      document.getElementById("errorpw").innerText =
        "Password length must be atleast 8 characters";
      return false;
    } else if (!checkpasswd(in2.value)) {
      document.getElementById("errorpw").innerText = "Invalid password";
      return false;
    }
  }

  if (in3.checked != true) {
    document.getElementById("errortick").innerText = "Check this";
    return false;
  } else {
    document.querySelector("#popup").style.display = "none";

    true;
  }
}

//second function



function take2() {
  var a1 = document.getElementById("passwd1");
  var a2 = document.getElementById("conpasswd");
  var a3 = document.getElementById("username1");
  var a4 = document.getElementById("email");
//   var a5 = document.querySelector(".check");

  if (a3.value.trim() == "") {
    document.getElementById("erroruser1").innerText ="Please enter your username";

    return false;
  } 
  else if (a4.value.trim() == "") {
    document.getElementById("erroremail").innerText =" Please enter email address";
    return false;
  } 
  else if (a1.value.trim() == "") {
    document.getElementById("errorpw1").innerHTML = " Please enter password";
    return false;
  }

  function checkpasswd(str) {
    var re = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }

   if (a1.value != "") {
    if (a1.value.trim().length < 9) {
      document.getElementById("errorpw1").innerText =
        "Password length must be atleast 8 characters";
      return false;
    } else if (!checkpasswd(a1.value)) {
      document.getElementById("errorpw1").innerText = "Invalid password";
      return false;
    } else if (a1.value != a2.value) {
      document.getElementById("errorpw2").innerText ="Password did not match .Try again";
      return false;
    }
  }

//   else if(a5.checked!=true){
//       document.getElementById("errortick1").innerText= "Agree to proceed";
//       return false;}

  else {
    
    
    // document.querySelector(".container.active .signup").style.display = "none";
    true;
  }

  document.querySelector("#popup ").style.display = "none";
}