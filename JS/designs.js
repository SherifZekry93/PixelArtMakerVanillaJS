// Select color input
var colorInput = document.getElementById("colorPicker")

let table = document.getElementById("pixelCanvas")

var cells = document.getElementsByClassName("cells")
// Select size input
var inputWidth = document.getElementById("inputWidth");

var inputHeight = document.getElementById("inputHeight");
// When size is submitted by the user, call makeGrid()


function makeGrid()
{
  table.innerHTML = "";
  var rows = inputHeight.value
  var cols = inputWidth.value

  for(var i=0;i<rows;i++)
  {
    let NewRow = table.insertRow(i); 
    for(var m=0;m<cols;m++)
    {
      var Newcell1 = NewRow.insertCell(m);

      Newcell1.addEventListener("click",setColor)
    }
  }
}



function setColor(event)
{
  event.target.style.backgroundColor = colorInput.value
}