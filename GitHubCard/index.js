/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function createCard(data) {
  //define new elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardAddress = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  //Setup Structure of elements
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  card.appendChild(cardName);
  card.appendChild(cardUserName);
  card.appendChild(cardLocation);
  card.appendChild(cardProfile);
  card.appendChild(cardAddress);
  card.appendChild(cardFollowers);
  card.appendChild(cardFollowing);
  card.appendChild(cardBio);

  //Setup class names
  card.classList.add('card');
  cardImg.classList.add('card img');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  //Set text content
  cardImg.src = data.avatar_url;
  cardName.textContent = data.name;
  cardUserName.textContent = data.login;
  cardLocation.textContent = data.location;
  cardAddress.href = data.html_url;
  cardAddress.textContent = data.html_url;
  cardFollowers.textContent = `Followers: ${data.followers.data};`
  cardFollowing.textContent = `Following: ${data.following};`
  cardBio.textContent = `Bio: ${data.bio};`
  
  return card
}

const myCard = document.querySelector('.cards');
axios
.get("https://api.github.com/users/addison-hill")
.then(response => {
  console.log(response);
  response.data.forEach( item => {
    const newCard = createCard(item);
    myCard.appendChild(newCard);
  })
})
.catch(error => {
  console.log('The data was not returned', error);
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
