const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("keyup", handleOtp);
  input.addEventListener("paste", handleOnPasteOtp);
});

function handleOtp(e) {
  /**
   * <input type="text" 👉 maxlength="1" />
   * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
   * So we to write our own logic to make it work. 🙂
   */
  const input = e.target;
  let value = input.value;
  let isValidInput = value.match(/[0-9a-z]/gi);
  input.value = "";
  input.value = isValidInput ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (fieldIndex < inputs.length - 1 && isValidInput) {
    input.nextElementSibling.focus();
  }

  if (e.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == inputs.length - 1 && isValidInput) {
    submit();
  }
}

function handleOnPasteOtp(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    submit();
  }
}

function submit() {
  console.log("Submitting...");
  // 👇 Entered OTP
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(otp);
  // 👉 Call API below
}
///////////////////////////////////////////////////////////////////////
// start show forget modal
let forgetInput = document.getElementById("forget-input");
let btnForget = document.getElementById("submit-forget");

btnForget.onmousemove = function (e) {
  if (forgetInput.value != "") {
    btnForget.setAttribute("data-bs-toggle", "modal");
    btnForget.setAttribute("data-bs-target", "#exampleModal");
  } else if (forgetInput.value == "") {
    btnForget.removeAttribute("data-bs-toggle");
    btnForget.removeAttribute("data-bs-target");
  }
};
btnForget.onclick = function (e) {
  if (forgetInput.value != "") {
    // btnForget.removeAttribute("disabled");
    // data-bs-toggle="modal"
    // data-bs-target="#exampleModal"
    btnForget.setAttribute("data-bs-toggle", "modal");
    btnForget.setAttribute("data-bs-target", "#exampleModal");
    console.log(forgetInput.value);
  } else if (forgetInput.value == "") {
    // btnForget.setAttribute("disabled", "");
    btnForget.removeAttribute("data-bs-toggle");
    btnForget.removeAttribute("data-bs-target");
    console.log("sssssssssssss");
  }
  //   e.preventDefault();
};
// end show forget modal
