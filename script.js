"use strict";

const check = function () {
  if (
    document.querySelector("#right-side-form-password").value ===
    document.querySelector("#right-side-form-confirm-password").value
  ) {
    document.querySelector(`#right-side-form-password`).style.borderColor =
      "green";
    document.querySelector(`#right-side-form-password`).style.boxShadow =
      "0px 0px 10px 5px var(--green)";
    document.querySelector(
      `#right-side-form-confirm-password`
    ).style.borderColor = "green";
    document.querySelector(
      `#right-side-form-confirm-password`
    ).style.boxShadow = "0px 0px 10px 5px var(--green)";
    console.log("Matching");
  } else {
    document.querySelector(`#right-side-form-password`).style.borderColor =
      "red";
    document.querySelector(`#right-side-form-password`).style.boxShadow =
      "0px 0px 10px 5px var(--red)";
    document.querySelector(
      `#right-side-form-confirm-password`
    ).style.borderColor = "red";
    document.querySelector(
      `#right-side-form-confirm-password`
    ).style.boxShadow = "0px 0px 10px 5px var(--red)";
    console.log("Not Matching");
  }
};
