
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/a.png') {
      myImage.setAttribute('src', 'images/b.jpg');
    } else {
      myImage.setAttribute('src', 'images/a.png');
    }
}
