const myModule = (function(){
  'use strict'
  const colorInput = document.getElementById("colorPicker")
  const myDivContainer = document.getElementById("pixelCanvas")
  // Select size input
  const inputWidth = document.getElementById("inputWidth");
  const inputHeight = document.getElementById("inputHeight");
  // When size is submitted by the user, call makeGrid()
  
  function __setButtonClick(actionFunction)
  {
    document.getElementById("buttonCreateGrid").addEventListener('click',__makeGrid);
  }

  function __makeGrid()
  {
    myDivContainer.innerHTML="";
    const rows = inputWidth.value
    const cols = inputHeight.value
    for(let i =0;i<rows;i++)
    {
      const div = document.createElement('div');
      myDivContainer.appendChild(div);
      for(let j =0;j<cols;j++)
      {
        const newColumn = document.createElement('div')
        div.append(newColumn);
      }
    }
  }

  function __setPixelClick()
  {
    myDivContainer.addEventListener("click",__setColor);
  }
  function __setColor(event)
  {
    if(!event.target.querySelector('div'))
    {
      event.target.style.backgroundColor = colorInput.value
    }
  }
  return {
    makeGrid:__makeGrid,
    settButtonClick:__setButtonClick,
    setPixelClick:__setPixelClick,
    setColor:__setColor
  }
})()
myModule.settButtonClick()
myModule.setPixelClick();