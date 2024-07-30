// const testButton = document.querySelector('.testButton');

// testButton.addEventListener('click', () => {
//     console.log('hi');
// });
let pictureButtonActive = false;
let currentActiveButton;
const pictureObject = {};

const pictureButton = document.getElementsByClassName('smallPicture');

for (let index = 0; index < pictureButton.length; index++) {
    // pictureObject[pictureButton[index]] = false;

    pictureButton[index].addEventListener('click', (event) => {
        const target = event.target;
        const style = target.style;
        // if (pictureObject[pictureButton[index]]){
        //     style.transform = "scale(1.0, 1.0)"
        //     style.transition = "0.3s";
        //     pictureObject[pictureButton[index]] = false;
        // } else {
        //     style.transform = "scale(1.4, 1.4)";
        //     style.transition = "0.3s";
        //     currentActiveButton = target;
        //     pictureObject[pictureButton[index]] = true;
        // }

        for (const iterator of pictureButton) {
            if (iterator !== target){
                iterator.style.transform = "scale(1.0, 1.0)";
                iterator.style.boxShadow = "0 0 0";
            // } else if (iterator === target && !pictureButtonActive){

            // } else if (iterator === target && pictureButtonActive){
            }
        }

        if (!pictureButtonActive){
            style.transform = "scale(1.4, 1.4)";
            style.boxShadow = "0 0 15px yellow";
            pictureButtonActive = true;
        } else if (pictureButtonActive){
            style.transform = "scale(1.0, 1.0)";
            style.boxShadow = "0 0 0";
            pictureButtonActive = false;
        }

    });
}






