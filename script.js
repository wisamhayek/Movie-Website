let movieID= 508;
let chosenMovie =[];
const fetchMovie = () => {
    // https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_Key}`).then(response => {
                    if(response.status !== 200) { // I got some error
                        console.log("error");
                    }
                    if(response.status === 404){
                        alert("Movie not found.")
                     }
                    //convert data
                    response.json().then(searchInput => {
                    chosenMovie = searchInput; //sign the search result to Global Variavel

                    let displayInfo = document.createElement('span'); //create the element
                    document.getElementById("displayTvResult").innerHTML = "";
                    // document.getElementById("displayResult2").innerHTML = "";
                    // document.getElementById("displayResult3").innerHTML = "";
                    displayInfo.innerHTML = `<br><div class="card"><span class="thumbnail" id="x"></span>ID: ${chosenMovie["id"]}<div>Title: ${chosenMovie["original_title"]}<div>Rating: ${chosenMovie["vote_average"]}</div>`;
                    // document.getElementById("MovieTitleImg").src = `https://image.tmdb.org/t/p/w500/${chosenMovie["poster_path"]}.png`;

                    var img = document.createElement("img");
                    img.src = `https://image.tmdb.org/t/p/w500${chosenMovie["poster_path"]}`;
                    // var src = document.getElementById("x");
                    // src.appendChild(img);

                    document.getElementById("displayTvResult").appendChild(displayInfo);
                    document.getElementById("x").appendChild(img);
                    // document.getElementById("displayResult2").appendChild(displayInfo);
                    // document.getElementById("displayResult3").appendChild(displayInfo);

                    //Append the result in the html
                    // for(let i=0; i<chosenMovie.length;i++){
                    //     let displayInfo = document.createElement('span'); //create the element
                    //     displayInfo.innerHTML = `<br><div class="card">ID: ${chosenMovie["id"]}<div>Title: ${chosenMovie["original_title"]}<div>Rating: ${chosenMovie["vote_average"]}</div><button class="submit btn btn-primary" onClick="deleteButton(this.value)" value="${i}" id="${i}deleteUser">Delete User</button>
                    //     <button class="submit btn btn-primary"  value="${i}" id="${i}editUser">Edit User</button><br>`;
                    //     document.getElementById("displayResult").appendChild(displayInfo);
                    // }

                    }).catch(error => { // catch the error
                        console.log(error)
                    })
                })
        }