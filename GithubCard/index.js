
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubUsers(image, user, userName,location, profile, followers, following, bio ){

  //Creating Ellements

  const card = document.createElement("div")
  const userImage = document.createElement("img")
  const info = document.createElement("div")
  const usersName = document.createElement("h3")
  const Username = document.createElement("p")
  const userLocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const link = document.createElement("a")
  const userFollowers = document.createElement("p")
  const userFollowing = document.createElement("p")
  const userBio = document.createElement("p")

  //Connecting Elements

  card.appendChild(userImage)
  card.appendChild(info)
  info.appendChild(usersName)
  info.appendChild(Username)
  info.appendChild(userLocation)
  info.appendChild(userProfile)
  userProfile.appendChild(link)
  info.appendChild(userFollowers)
  info.appendChild(userFollowing)
  info.appendChild(userBio)

  //adding Contents
  userImage.src = image
  usersName.textContent = user
  Username.textContent = userName
  userLocation.textContent = location
  userProfile.textContent = profile
  
  userFollowers.textContent = followers
  userFollowing.textContent = following
  userBio.textContent = bio

  //adding ClassList 
  card.classList.add("card")
  info.classList.add("card-info")
  usersName.classList.add("name")
  Username.classList.add("username")




  return card
  
}
//Sellecting Parent Element
const cards = document.querySelector(".cards")


// API Call Request
axios.get("https://api.github.com/users/AbdirisakAhmed")
// axios.get("https://api.github.com/users/duraanali")
.then(response => {
  // response.data.forEach(function(information){

  let  myImage = response.data.avatar_url
  let myName = response.data.name
  let myUserName = response.data.login
  let myLocation = response.data.location
  let myProfile = response.data.html_url
  let myFollowers = response.data.followers
  let myFollowing = response.data.following
  let myBio = response.data.bio

  
    
    

    cards.appendChild(githubUsers(myImage, myName,myUserName, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
// })

.catch(error => {
  console.log(error.message)
})

// const cards = document.querySelector(".cards")


// API Call Request
// axios.get("https://api.github.com/users/AbdirisakAhmed")
axios.get("https://api.github.com/users/duraanali")
.then(response => {
  // response.data.forEach(function(information){

  let  myImage = response.data.avatar_url
  let myName = response.data.name
  let myUserName = response.data.login
  let myLocation = response.data.location
  let myProfile = response.data.html_url
  let myFollowers = response.data.followers
  let myFollowing = response.data.following
  let myBio = response.data.bio

  
    
    

    cards.appendChild(githubUsers(myImage, myName,myUserName, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
// })

.catch(error => {
  console.log(error.message)
})


axios.get("https://api.github.com/users/AbdihakimWehelie")
.then(response => {
  // response.data.forEach(function(information){

  let  myImage = response.data.avatar_url
  let myName = response.data.name
  let myUserName = response.data.login
  let myLocation = response.data.location
  let myProfile = response.data.html_url
  let myFollowers = response.data.followers
  let myFollowing = response.data.following
  let myBio = response.data.bio

  
    
    

    cards.appendChild(githubUsers(myImage, myName,myUserName, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
// })

.catch(error => {
  console.log(error.message)
})

/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];

