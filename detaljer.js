const pageSearch = window.location.search
const params = new URLSearchParams(pageSearch)
const id  = params.get("id");

const url = `./data/${id}.json`
console.log(url);


// fetch(url)

// console.log(pageSearch);
// console.log(params.get("id"));
