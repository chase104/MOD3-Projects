fetch('http://localhost:3000').then((response) => {
    response.json().then((data) => {
        console.log(data)
        // take this data and put it into state
        // display the plants on the page
    })
})