


const pointButton = document.getElementById('points-button');
const usersContainer = document.querySelector('ul')

pointButton.addEventListener('click', () => {
    fetch("http://localhost:3000/users/points/?points=170").then((res) => {
        res.json().then((finalData) => {
            console.log(finalData);
            finalData.map((user) => {
                let userLi = document.createElement('li');
                userLi.textContent = user.name + " " + user.points;
                usersContainer.appendChild(userLi);
            }) 
        })
    })
})