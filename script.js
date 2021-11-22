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

                    //Append the result in the html
                    // for(let i=0; i<chosenMovie.length;i++){
                    //     let displayInfo = document.createElement('span'); //create the element
                    //     displayInfo.innerHTML = `<br><div class="card">ID: ${chosenMovie[i].id}<div>Name: ${chosenMovie[i].name}<div>Username: ${chosenMovie[i].username}</div><button class="submit btn btn-primary" onClick="deleteButton(this.value)" value="${i}" id="${i}deleteUser">Delete User</button>
                    //             <button class="submit btn btn-primary"  value="${i}" id="${i}editUser">Edit User</button><br>`;
                    //     document.getElementById("displayResult").appendChild(displayInfo);
                    // }

                    }).catch(error => { // catch the error
                        console.log(error)
                    })
                })
        }