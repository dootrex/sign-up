const formViewer = () => {
  const controller = document.querySelector("#controller");
  const signUpForm = document.querySelector(".sign-up");

  controller.addEventListener("click", () => {
    //toggle view for sign up
    signUpForm.classList.toggle("view");
  });
};
formViewer();
