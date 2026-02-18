const pageSearch = window.location.search
const params = new URLSearchParams(pageSearch)
const id  = params.get("id");
const mainwWapperDom = document.querySelector("#main-wrapper")
const url = `./data/${id}.json`
console.log(url);


fetch(url)
    .then((respons) => respons.json())
    .then ((data) => {
        createPaige(data);

    })  


    function createPaige (data) {

        const {image,destination, title,} = data
        // const image = data.image
        // const destination    = data.destination
        console.log(data.image);

       const pageString=  `<h2>${title}</h2>`

mainwWapperDom.insertAdjacentHTML("afterbegin", pageString)
    }

// console.log(pageSearch);
// console.log(params.get("id"));
