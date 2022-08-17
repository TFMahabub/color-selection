const colors = ['red', 'green', 'yellow', 'indigo', 'blue', 'gray', 'cyan','purple', 'pink', 'black'];

const container = document.getElementById('container')
const title = document.querySelector('h2');
const selectedColor = document.getElementById('selectedColor')

for(let color of colors){
  const newDivs = document.createElement('div');
  newDivs.classList.add('box');
  container.appendChild(newDivs)

  newDivs.style.backgroundColor = color;

  newDivs.addEventListener('click', function(){
    title.innerText = 'You have selected: ';
    selectedColor.innerText = newDivs.style.backgroundColor;
    selectedColor.style.backgroundColor = newDivs.style.backgroundColor;
  })
}