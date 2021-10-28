const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  let myitem = input.value;


  if (myitem === ""){
      alert("Box Cannot be empty.") 
  }else {

            const listitem = document.createElement('li');
            const listtext = document.createElement('span');
            const listbutton = document.createElement('button');

            listitem.appendChild(listtext);
            listtext.textContent = myitem;
            listitem.appendChild(listbutton);
            listbutton.textContent = '❌';
            list.appendChild(listitem);

            listbutton.onclick = function(deleteitem) {
            list.removeChild(listitem);
            }
            input.value = "";
            input.focus();
  }

})
  
