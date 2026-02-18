
const url = `./data/destinations.json`

fetch(url)
    .then((respons) => respons.json())
    .then ((data) => {
        console.log (data)

    })  