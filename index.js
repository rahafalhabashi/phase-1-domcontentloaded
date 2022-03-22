document.addEventListener("DOMContentLoaded", function() {
        console.log("The DOM has loaded")
        const text = document.getElementById("text")
        text.innerHTML = "This is really cool!"
    // document.text.innerHTML = document.text.innerHTML.replace("JavaScript is so cool. It lets me add text to my page programmatically.","This is really cool!")
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );