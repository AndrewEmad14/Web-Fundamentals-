let userContainer = document.getElementById('userNameContainer');
let postContainer = document.getElementById('postContainer');
let currentActiveBtn;


function displayUsers(data){
 
  data.forEach((user)=>{
    let userBtn = document.createElement('button');
    userBtn.textContent = user.name;
    userBtn.addEventListener('click', function(){
      if(currentActiveBtn!=null){
        currentActiveBtn.classList.toggle("active");
      }
      fetchPosts(user.id)
      this.classList.toggle("active");
      currentActiveBtn = this;
    });
    userContainer.append(userBtn);
  })
}

function displayPosts(data){
  postContainer.replaceChildren();
  data.forEach((post)=>{
    let postElement = document.createElement('li');
    postElement.textContent = post.title;
    postContainer.append(postElement);
  })
}



fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
      if(response.ok!=true){
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();


    })
  .then((data)=>{
      displayUsers(data);
  })



async function fetchPosts(userId) {
  try {
    // First promise: fetch returns a Promise<Response>
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
   
    

    const data = await response.json();
  
    displayPosts(data);
    
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}


