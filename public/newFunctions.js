const pictureButton = document.getElementsByClassName('smallPicture');
let currentActiveButton;

for (let index = 0; index < pictureButton.length; index++) {
    pictureButton[index].addEventListener('click', (event) => {
        const target = event.target;
        if (currentActiveButton !== target && currentActiveButton){
            currentActiveButton.classList.replace('smallPictureFocus', 'smallPictureNotFocus');
        }
        if (target.classList.contains('smallPictureNotFocus')){
            target.classList.replace('smallPictureNotFocus', 'smallPictureFocus');
            const checkBoxes = document.querySelectorAll('input[type="checkbox"][required]')
            checkBoxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.removeAttribute('required');
            });
            target.previousElementSibling.setAttribute('required', 'true');
        } else {
            target.classList.replace('smallPictureFocus', 'smallPictureNotFocus');
        }
        currentActiveButton = target;
    });
}





