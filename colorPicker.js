//get the body element
const bodyDOM = document.querySelector("body");

//get the header h1
const headerLabel = document.querySelector("h1");

//get the input buttons
const sStandard = document.querySelector("#selectStandard");
const sManual = document.querySelector("#selectSManual");

//get the random button generator
const randomButton = document.querySelector(".random-generate");

//getting the input section box
const inputSectionBox = document.querySelector(".standard");
// inputSectionBox.style.visibility = "hidden";
const btn = document.querySelector(".sbmt");
//get the color picker input
const input1 = document.querySelector(".colorDigit1");
const input2 = document.querySelector(".colorDigit2");
const input3 = document.querySelector(".colorDigit3");
const input4 = document.querySelector(".colorDigit4");
const input5 = document.querySelector(".colorDigit5");
const input6 = document.querySelector(".colorDigit6");

//getting input color values for the opacity
const opacityValue = document.querySelector(".colorOpacity");

//getting the input section box
const itemArray = [inputSectionBox, randomButton,btn];

//hide everything as soon as the page loads
for (let i = 0; i < itemArray.length; i++) {
  itemArray[i].style.visibility = "hidden";
}

/*create an array that has values from 0 to 9 and A to F
this array is where we will get the values for the color picker
*/
const valueStore = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

 //generate random color
function activateRandomButtonAttributes(){
  //array to hold values
  let colorStore = [];
    for (let i = 0; i < 6; i++) {
      /*get a random value from the valueStore arrayas strings*/
      const randomValue = 
            String(Math.floor(Math.random() * valueStore.length)+1);
      //push the random value to the colorStore array
      colorStore.push(valueStore[randomValue]);
    }
  //return the array
    return colorStore;
}

//function to set styles to the DOM
function setDOMattributes(argument){
      bodyDOM.style.backgroundColor = argument;
      headerLabel.textContent = argument;
}
//add a listener to the random button, get color, use it
randomButton.addEventListener("click", () => {
    let colorValues = activateRandomButtonAttributes();
      let colr = `#${colorValues.join("")}`;
      bodyDOM.style.transition = "all 0.3s ease-in-out";
      // bodyDOM.style.backgroundColor = colr;
      // headerLabel.textContent = colr;
      setDOMattributes(colr);
});

 sStandard.addEventListener("change", () => {
    if (sStandard.checked) {
      randomButton.style.visibility = "visible";
      inputSectionBox.style.visibility = "hidden";
      btn.style.visibility = "hidden";
    }
  });





//function to obtain input
function obtainValidInput(){
  let obtainedColors = [input1, input2, input3, input4, input5, input6];
  let colorCode = [];
  for(let i=0; i< obtainedColors.length; i++){
    if(
      obtainedColors[i].value.trim() !=='' && valueStore.some(
        e =>e.includes(obtainedColors[i].value.toUpperCase()))){
      colorCode.push(obtainedColors[i].value.toUpperCase());
    }else{
      //return empty array
      colorCode = ['f','f','f'];
      return colorCode;
    }
  }
  //return array of colorCode
  return colorCode;
}

//set up manual input
sManual.addEventListener("change", () => {
  if (sManual.checked) {
    //reveal and activate input section box
    randomButton.style.visibility = "hidden";
    inputSectionBox.style.visibility = "visible";
    btn.style.visibility = "visible";
    let functionReturnedCode = obtainValidInput();
    const colorCode = "#" + functionReturnedCode.join("");
    btn.addEventListener('click', ()=>{
          bodyDOM.style.transition = "all 0.3s ease-in-out";
          setDOMattributes(colorCode);
    });
  }
});

