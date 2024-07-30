const pictureButton = document.getElementsByClassName('smallPicture');
let currentActiveButton;

for (let index = 0; index < pictureButton.length; index++) {
    pictureButton[index].addEventListener('click', (event) => {
        const target = event.target;
        if (currentActiveButton !== target && currentActiveButton){
            currentActiveButton.classList.replace('smallPictureFocus', 'smallPictureNotFocus');
        }
        currentActiveButton = target;
        if (target.classList.contains('smallPictureNotFocus')){
            target.classList.replace('smallPictureNotFocus', 'smallPictureFocus');
        } else {
            target.classList.replace('smallPictureFocus', 'smallPictureNotFocus');
        }
    });
}





