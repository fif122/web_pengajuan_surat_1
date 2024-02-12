function eyesPassword() {
    const a = document.getElementById("password");
    const b = document.getElementById("eyes");
    if (a.type === "password") {
      a.type = "text";
      b.innerHTML = "visibility_off";
    } else {
      a.type = "password";
      b.innerHTML = "visibility";
    }
  }
  