function openModal(modalName) {
   let modal = document.getElementById(modalName); 

   if (typeof modal === 'undefined' || modal === null)
       return;

       modal.style.display = 'Flex'
}

function closeModal(modalName) {
    let modal = document.getElementById(modalName); 

    if (typeof modal === 'undefined' || modal === null)
       return;

       modal.style.display = 'none'
}