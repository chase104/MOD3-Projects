


let ulElement = document.querySelector('.ul-container');

let randomButton = document.getElementById('random-button');

randomButton.addEventListener('click', () => {
    window.location = "./about.html";
    fetch('http://localhost:3000/random').then((res) => {
        res.json().then((finalData) => {
            let myLi = document.createElement('li');
            myLi.textContent = finalData.data;
            ulElement.appendChild(myLi)
        })
    })
});

fetch('http://localhost:3000/plants').then((res) => {
    res.json().then((data) => {

            data.forEach((plantString) => {
            let myLi = document.createElement('li');
            myLi.textContent = plantString;
            ulElement.appendChild(myLi)
        })
    })
})

// setInterval(() => {
//     fetch(`http://localhost:3000/plants/2`).then((res) => {
//         console.log(res)
//         res.json().then((data) => {
//                 let myLi = document.createElement('li');
//                 myLi.textContent = data.string;
//                 ulElement.appendChild(myLi)
//         })
//     })
// }, 2000)

ulElement.innerHTML = "<li>I am a LI tag!</li>"