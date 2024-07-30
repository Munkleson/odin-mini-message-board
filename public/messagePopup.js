const messagePopup = document.querySelectorAll('.messageDiv');
let expanded = false;
let currentActivePopup;

messagePopup.forEach(element => {
    element.addEventListener('click', () => {
        if (!expanded){
            element.classList.replace('messageDiv', 'messageDivExpanded');
            expanded = true;
            currentActivePopup = element;
        } else if (expanded && currentActivePopup === element){
            element.classList.replace('messageDivExpanded', 'messageDiv');
            expanded = false;
        }
    });
});

