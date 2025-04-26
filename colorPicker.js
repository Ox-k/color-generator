// query the DOM tree
//get the header h1
const headerLabel = document.querySelector("h1");

//get the input buttons
const sStandard = document.querySelector("#selectStandard");
const sManual = document.querySelector("#selectSManual");
const sGradient = document.querySelector("#selectGradient");

//get the random button generator
const randomButton = document.querySelector(".random-generate");

//get the color picker input
const input1 = document.querySelector(".colorDigit1");
const input2 = document.querySelector(".colorDigit2");
const input3 = document.querySelector(".colorDigit3");
const input4 = document.querySelector(".colorDigit4");
const input5 = document.querySelector(".colorDigit5");
const input6 = document.querySelector(".colorDigit6");

//getting input color values for the opacity
const opacityValue = document.querySelector(".colorOpacity");

//get the body element
const bodyDOM = document.querySelector("body");

//getting the input section box
const inputSectionBox = document.querySelector(".standard");

/*create an array that has values from 0 to 9 and A to F
this array is where we will get the values for the color picker
*/
const valueStore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//function to set the color to the boody element

function randomButtonFunction(){
randomButton.addEventListener("click", () => {
  //create an array that will hold the color values
  const colorStore = [];
  for (let i = 0; i < 6; i++) {
    /*get a random value from the valueStore array, convert to string and push it to the colorStore array*/
    const randomValue = String(Math.floor(Math.random() * valueStore.length));
    //push the random value to the colorStore array
    colorStore.push(valueStore[randomValue]);
  }

  //join the values together to form a string
  //this string will be used to set the color
  let colorValue = `#${colorStore.join("")}`;
  bodyDOM.style.transition = "all 0.3s ease-in-out";
  bodyDOM.style.backgroundColor = colorValue;
  headerLabel.textContent = colorValue;
  //set the color value to the input fields
});

sStandard.addEventListener("change", () => {
  if (sStandard.checked) {
    //change to random buttom
    randomButton.style.visibility="visible";
    inputSectionBox.style.visibility="hidden";
    //opacityInputBox.style.visibility ="hidden";
    randomButtonFuncton();
    
  } 
});
}

//function to get input values
function getInputValue(){
  // check out of bounds values

  // make sure all inputs are provided... because there is not button to submit -autosubmission
 //values are valid
 const colorCode = "#"+[ input1, input2, input3, input4, input5, input6].join("");
bodyDOM.style.transition = "all 0.3s ease-in-out";
  bodyDOM.style.backgroundColor = colorCode;
  headerLabel.textContent = colorCode;
  //set the color value to the input fields
 return colorCode;
}

sManual.addEventListener("change", () => {
  if (sStandard.checked) {
    //reveal and activate input section box
    randomButton.style.visibility="hidden";
    inputSectionBox.style.visibility="visible";
    //opacityInputBox.style.visibility ="hidden";
    getInputValue();
  }});

//functon that uses returns value from getInputVale()
sGradient.addEventListener("change", () => {
  opacityValue.style.visibility ="hidden";
  if (sStandard.checked) {
    //do something
    const standardColor = getInputValue();
    const opColor= [standardColor, opacityValue].join("");
    
    bodyDOM.style.transition = "all 0.3s ease-in-out";
  bodyDOM.style.backgroundColor = opColor;
  headerLabel.textContent = opColor;
  //set the color value to the input fields
  }});

