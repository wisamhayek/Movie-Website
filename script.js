let chosenMovie =[];
let chosenTV =[];
let popMovies = []
let popSeries = []
let topSeries = []
let topMovies = []

// var img = document.createElement("img");
const fetchPopMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&page=1`).then(response => {
                    if(response.status !== 200) { // I got some error
                        console.log("error");
                    }
                    if(response.status === 404){
                        alert("Movie not found.")
                    }
                    //convert data
                    response.json().then(searchInput => {
                    popMovies = searchInput; //sign the search result to Global Variavel
                    for(let i=0;i<4;i++){
                        let displayInfo = document.createElement('span'); //create the element
                        document.getElementById(`displayMovResult${i}`).innerHTML = "";
                        displayInfo.innerHTML =
                        `<div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w500${popMovies["results"][i]["poster_path"]}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${popMovies["results"][i]["original_title"]}</h5>
                              <p class="card-text">Rating: ${popMovies["results"][i]["vote_average"]}</p>
                              <p class="card-text">Description: ${popMovies["results"][i]["overview"]}</p>
                              <a href="ChosenTitleMovie.html" id=${popMovies["results"][i]["id"]} onClick="choseTitle(this.id)" class="btn btn-primary">More Details</a>
                            </div>
                          </div>`
                        document.getElementById(`displayMovResult${i}`).appendChild(displayInfo);
                    }

                    }).catch(error => { // catch the error
                        console.log(error)
                    })
                })
        }

const fetchPopTV = () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&page=1`).then(response => {
                    if(response.status !== 200) { // I got some error
                        console.log("error");
                    }
                    if(response.status === 404){
                        alert("Movie not found.")
                        }
                    //convert data
                    response.json().then(searchInput => {
                    popSeries = searchInput; //sign the search result to Global Variavel
                    for(let j=0;j<4;j++){
                        let displayInfo = document.createElement('span'); //create the element
                        document.getElementById(`displayTvResult${j}`).innerHTML = "";
                        displayInfo.innerHTML =
                        `<div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w500${popSeries["results"][j]["poster_path"]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${popSeries["results"][j]["original_name"]}</h5>
                                <p class="card-text">Rating: ${popSeries["results"][j]["vote_average"]}</p>
                                <p class="card-text">Description: ${popSeries["results"][j]["overview"]}</p>
                                <a href="ChosenTitleTV.html" id=${popSeries["results"][j]["id"]} onClick="choseTitle(this.id)" class="btn btn-primary">More Details</a>
                            </div>
                            </div>`


                        document.getElementById(`displayTvResult${j}`).appendChild(displayInfo);
                    }

                    }).catch(error => { // catch the error
                        console.log(error)
                    })
                })
        }


    const choseTitle=(id)=>{
        localStorage.setItem('chosenMovieID',id);

    }

const chosenID = localStorage.getItem('chosenMovieID');

const fetchMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${chosenID}?api_key=${API_Key}&append_to_response=credits`).then(response => {
        if(response.status !== 200) { // I got some error
            console.log("error");
        }
        if(response.status === 404){
            alert("Movie not found.")
            }
        //convert data
        response.json().then(searchInput => {
        chosenMovie = searchInput; //sign the search result to Global Variavel

        let displayInfo1 = document.createElement('span'); //create the element
        let displayInfo2= document.createElement('span'); //create the element
        let displayInfo3 = document.createElement('span'); //create the element
        let displayInfo4 = document.createElement('span'); //create the element
        let displayInfo5 = document.createElement('span'); //create the element
        let displayInfo6 = document.createElement('span'); //create the element

        document.getElementById("chosenTitle").innerHTML = "";
        document.getElementById("chosenGenre").innerHTML = "";
        document.getElementById("chosenDescr").innerHTML = "";
        document.getElementById("runtime").innerHTML = "";
        document.getElementById("cast").innerHTML = "";
        document.getElementById("rating").innerHTML = "";

        displayInfo1.innerHTML = `${chosenMovie["original_title"]}`;
        displayInfo2.innerHTML = `${chosenMovie["genres"][0].name}`;
        // displayInfo2.innerHTML = `${chosenMovie["genres"][0].name} ${chosenMovie["genres"][1].name} ${chosenMovie["genres"][2].name} `;
        displayInfo3.innerHTML = `${chosenMovie["overview"]}`;
        displayInfo4.innerHTML = `${chosenMovie["runtime"]} Minutes`;
        displayInfo5.innerHTML = `${chosenMovie["credits"]["cast"][0]["name"]}, ${chosenMovie["credits"]["cast"][1]["name"]}, ${chosenMovie["credits"]["cast"][3]["name"]}`;
        displayInfo6.innerHTML = `${chosenMovie["vote_average"]}`;

        var img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${chosenMovie["poster_path"]}`;

        document.getElementById("chosenTitle").appendChild(displayInfo1);
        document.getElementById("chosenGenre").appendChild(displayInfo2);
        document.getElementById("chosenDescr").appendChild(displayInfo3);
        document.getElementById("runtime").appendChild(displayInfo4);
        document.getElementById("cast").appendChild(displayInfo5);
        document.getElementById("rating").appendChild(displayInfo6);

        document.getElementById("x").appendChild(img);
        }).catch(error => { // catch the error
            console.log(error)
        })
    })
}

const fetchTV = () => {
    fetch(`https://api.themoviedb.org/3/tv/${chosenID}?api_key=${API_Key}&append_to_response=credits`).then(response => {
        if(response.status !== 200) { // I got some error
            console.log("error");
        }
        if(response.status === 404){
            alert("Movie not found.")
            }
        //convert data
        response.json().then(searchInput => {
        chosenMovie = searchInput; //sign the search result to Global Variavel

        let displayInfo1 = document.createElement('span'); //create the element
        let displayInfo2= document.createElement('span'); //create the element
        let displayInfo3 = document.createElement('span'); //create the element
        let displayInfo4 = document.createElement('span'); //create the element
        let displayInfo5 = document.createElement('span'); //create the element
        let displayInfo6 = document.createElement('span'); //create the element

        document.getElementById("chosenTitle").innerHTML = "";
        document.getElementById("chosenGenre").innerHTML = "";
        document.getElementById("chosenDescr").innerHTML = "";
        document.getElementById("runtime").innerHTML = "";
        document.getElementById("cast").innerHTML = "";
        document.getElementById("rating").innerHTML = "";

        displayInfo1.innerHTML = `${chosenMovie["name"]}`;
        displayInfo2.innerHTML = `${chosenMovie["genres"][0].name}`;
        displayInfo3.innerHTML = `${chosenMovie["overview"]}`;
        displayInfo4.innerHTML = `${chosenMovie["number_of_seasons"]} Seasons`;
        displayInfo5.innerHTML = `${chosenMovie["credits"]["cast"][0]["name"]}, ${chosenMovie["credits"]["cast"][1]["name"]}, ${chosenMovie["credits"]["cast"][3]["name"]}`;
        displayInfo6.innerHTML = `${chosenMovie["vote_average"]}`;

        var img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${chosenMovie["poster_path"]}`;

        document.getElementById("chosenTitle").appendChild(displayInfo1);
        document.getElementById("chosenGenre").appendChild(displayInfo2);
        document.getElementById("chosenDescr").appendChild(displayInfo3);
        document.getElementById("runtime").appendChild(displayInfo4);
        document.getElementById("cast").appendChild(displayInfo5);
        document.getElementById("rating").appendChild(displayInfo6);

        document.getElementById("x").appendChild(img);
        }).catch(error => { // catch the error
            console.log(error)
        })
    })
}


const fetchTopTV = () => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}&page=1`).then(response => {
                    if(response.status !== 200) { // I got some error
                        console.log("error");
                    }
                    if(response.status === 404){
                        alert("Movie not found.")
                        }
                    //convert data
                    response.json().then(searchInput => {
                        topSeries = searchInput; //sign the search result to Global Variavel
                    for(let j=0;j<4;j++){
                        let displayInfo = document.createElement('span'); //create the element
                        document.getElementById(`displayTvResult${j}`).innerHTML = "";
                        displayInfo.innerHTML =
                        `<div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w500${topSeries["results"][j]["poster_path"]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${topSeries["results"][j]["original_name"]}</h5>
                                <p class="card-text">Rating: ${topSeries["results"][j]["vote_average"]}</p>
                                <p class="card-text">Description: ${topSeries["results"][j]["overview"]}</p>
                                <a href="ChosenTitleTV.html" id=${topSeries["results"][j]["id"]} onClick="choseTitle(this.id)" class="btn btn-primary">More Details</a>
                            </div>
                            </div>`


                        document.getElementById(`displayTvResult${j}`).appendChild(displayInfo);
                    }

                    }).catch(error => { // catch the error
                        console.log(error)
                    })
    })
}

const fetchTopMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&page=1`).then(response => {
                    if(response.status !== 200) { // I got some error
                        console.log("error");
                    }
                    if(response.status === 404){
                        alert("Movie not found.")
                        }
                    //convert data
                    response.json().then(searchInput => {
                    topMovies = searchInput; //sign the search result to Global Variavel
                    for(let j=0;j<4;j++){
                        let displayInfo = document.createElement('span'); //create the element
                        document.getElementById(`displayMovResult${j}`).innerHTML = "";
                        displayInfo.innerHTML =
                        `<div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w500${topMovies["results"][j]["poster_path"]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${topMovies["results"][j]["original_title"]}</h5>
                                <p class="card-text">Rating: ${topMovies["results"][j]["vote_average"]}</p>
                                <p class="card-text">Description: ${topMovies["results"][j]["overview"]}</p>
                                <a href="ChosenTitleMovie.html" id=${topMovies["results"][j]["id"]} onClick="choseTitle(this.id)" class="btn btn-primary">More Details</a>
                            </div>
                            </div>`
                        document.getElementById(`displayMovResult${j}`).appendChild(displayInfo);
                    }
                    }).catch(error => { // catch the error
                        console.log(error)
                    })
    })
}