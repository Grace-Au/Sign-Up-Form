const input = {
  firstName: document.querySelector("#firstname"),
  lastName: document.querySelector("#lastname"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  passWord: document.querySelector("#password"),
  confirm: document.querySelector("#confirm"),
};

const errorMsg = {
  firstName: document.querySelector("#firstname-error"),
  lastName: document.querySelector("#lastname-error"),
  email: document.querySelector("#email-error"),
  phone: document.querySelector("#phone-error"),
  password: document.querySelector("#password-error"),
  confirm: document.querySelector("#confirm-error"),
};

const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  checkName(input.firstName, errorMsg.firstName);
  checkName(input.lastName, errorMsg.lastName);
  checkEmail();
  checkPhone();
  checkPw();
  checkConfirm();
  for (let i of document.querySelectorAll(".error")) {
    if (i.innerText) {
      e.preventDefault();
    }
  }
});

function checkName(name, error) {
  const checkSpecial = name.value.match(/[\W_]/g);
  const checkNum = name.value.match(/[0-9]/g);
  if (name.value === "") {
    error.innerText = "Name cannot be empty";
  } else {
    error.innerText = "";
    if (checkSpecial) {
      const spec = document.createElement("div");
      spec.setAttribute("id", name.name + "-error-spec");
      spec.append(`Do not accept special character: ${checkSpecial}`);
      error.appendChild(spec);
    } else if (document.querySelector("#" + name.name + "-error-spec")) {
      document.querySelector("#" + name.name + "-error-spec").innerText = "";
    }
    if (checkNum) {
      const num = document.createElement("div");
      num.setAttribute("id", name.name + "-error-num");
      num.append(`Do not accept number: ${checkNum}`);
      error.appendChild(num);
    } else if (document.querySelector("#" + name.name + "-error-num")) {
      document.querySelector("#" + name.name + "-error-num").innerText = "";
    }
  }
}

function checkEmail() {
  const check = /^[\w\W]{1,}@\w{1,}\.\w{1,}$/.test(input.email.value);
  if (input.email.value === "") {
    errorMsg.email.textContent = "Email cannot be empty";
  } else if (!check) {
    errorMsg.email.textContent = "Email is not valid";
  } else {
    errorMsg.email.textContent = "";
  }
}

function checkPhone() {
  const check = /^[0-9]{1,}$/g.test(input.phone.value);
  if (input.phone.value === "") {
    errorMsg.phone.textContent = "Phone number cannot be empty";
  } else if (!check) {
    errorMsg.phone.textContent = "Only accept number";
  } else {
    errorMsg.phone.textContent = "";
  }
}

function checkPw() {
  if (input.passWord.value === "") {
    errorMsg.password.textContent = "Password cannot be empty";
  } else {
    errorMsg.password.textContent = "";
  }
}

function checkConfirm() {
  if (input.confirm.value === "") {
    errorMsg.confirm.textContent = "Confirm password cannot be empty";
  } else if (input.passWord.value !== input.confirm.value) {
    errorMsg.confirm.textContent = "Password did not match";
  } else {
    errorMsg.confirm.textContent = "";
  }
}
