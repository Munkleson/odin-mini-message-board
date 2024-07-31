const pictureButton = document.getElementsByClassName('smallPicture');
const textAreaElement = document.querySelector('.newMessage');
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

// textAreaElement.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         let textArea = this;
//         let start = textArea.selectionStart;
//         let end = textArea.selectionEnd;

//         textArea.value = textArea.value.substring(0, start) + "\n" + textArea.value.substring(end);
//         console.log(textArea.value);

//         textArea.selectionStart = textArea.selectionEnd = start + 1;
//     }
// });



