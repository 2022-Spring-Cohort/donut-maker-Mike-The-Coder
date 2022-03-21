const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!');
const clickerButton = document.querySelector("#clicker");



clicker.onclick = function(){
  clickerCount = 0;
}

clickerButton.addEventListener("click", () =>{
  
  clickerCount += 1;
  
});
