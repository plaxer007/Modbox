// Loop through colors array and change labels icon color
const colors = ['#9DA5B0', '#F2DEA8', '#8EDCCF', '#B2E9FF', '#CDBFFF'];
let tags = document.querySelectorAll('.tag');
for(let i = 0; i < colors.length; i++) {
    tags[i].style.color = colors[i];
}
// // Popup window with new message editor
// let msgButton = document.querySelector('.new-msg-btn');
// let closeMsgEdit = document.querySelector('.closer');
// let msgWindow = document.querySelector('.new-msg-popup');

// // Open and close listener
// msgButton.addEventListener('click', function(){
//     msgWindow.style.display = "block";
//     closeMsgEdit.addEventListener('click', function(){
//         msgWindow.style.display = "none"
//     })
// }, false)
