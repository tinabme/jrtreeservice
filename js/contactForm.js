
function readyToSend(e) {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let message = document.querySelector("#message");
  let form = document.querySelector("#contact-form");
  let error = document.querySelector(".error");
  let success = document.querySelector(".success");
  
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://9g5xqoyvc3.execute-api.us-east-1.amazonaws.com/dev", true);

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      console.log('we did it')
    }
  };
  var data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    gem: "smallstep",
    message: message.value
  };

  if (name.value && email.value && message.value) {
    success.style.display = "block";
    success.innerHTML = "Thanks for submitting";
    form.style.display = "none";
    error.style.display = "none";
    xhr.send(JSON.stringify(data));

  } else {
      error.style.display = "block";
      error.innerHTML = "Please Fill  All Details";
      success.display = "none";

  }
};