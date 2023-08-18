function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the entered username and password are correct
    if (username === "username" && password === "password") {
      // Redirect to the desired page
      window.location.href = "../html/home.html";
    } else {
      // Show an error message
      alert("Incorrect username or password. Please try again.");
    }
  }