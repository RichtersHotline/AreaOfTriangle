let Answer = document.getElementById("Output")
let Display = document.getElementById("Area")
function Base() {
let UserInputH = document.getElementById("UserInputHeight").value
let UserInputB = document.getElementById("UserInputBase").value

Answer.innerHTML = UserInputB / 2 * UserInputH;
Display.style.display = "block";


}