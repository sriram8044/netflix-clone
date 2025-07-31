function loginPrompt() {
  const user = prompt("Enter your name to sign in:");
  if (user) {
    alert("Welcome to Netflix, " + user + "!");
  } else {
    alert("Please enter a name to continue.");
  }
}
