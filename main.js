var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);


var btn = document.createElement('button');
btn.innerText ='edit';
btn.itemList.appendChild(btn);





function addItem(e){
    e.preventDefault();
     var newItem = document.getElementById('item').value;

     var li =document.createElement('li');
     

     li.className = 'list-group-item';
     li.appendChild(document.createTextNode(newItem));
     var deleteBtn = document.createElement('button');
     

     deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);
     itemList.appendChild(li);


}

function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm("Are you Sure?")){
        var li = e.target.parentElement;
        itemList.removeChild(li);


    }

   } 
}

