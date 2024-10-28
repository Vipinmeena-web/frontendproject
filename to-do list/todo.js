input.addEventListener("keyup",(event)=>{
 if(event.key=="Enter"){
    addtodo(input.value)
    input.value=""

}

})


const addtodo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`${item}
   <i class="i ri-delete-bin-6-line"></i>
   `;
     // Add delete functionality
     const deleteIcon = listItem.querySelector("i");
     deleteIcon.addEventListener("click", () => {
         listItem.remove(); // Remove the item from the list
     });
    // listItem.textContent=event;
    list.appendChild(listItem)
}


