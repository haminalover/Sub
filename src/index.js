var input_value = 0;
function getTFNumber() {
  input_value = document.getElementById("in").value;
  input_value = input_value.split(" ");
  var result = input_value[0] + input_value[2];

  document.getElementById("display").innerHTML = result;
}
document.getElementById("en").addEventListener("click", getTFNumber);
function MakeArray() {
  console.log(Array.from(input_value));
}
var input = document.getElementById("input_value");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    getTFNumber();
  }
});
