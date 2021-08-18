document.addEventListener("DOMContentLoaded", () => {
 let submitButton = document.querySelector("#submit");
 submitButton.addEventListener('click', (e) => {
     e.preventDefault()
 })

   function fetchGithub(obj){
     fetch("https://api.github.com/search"), { 
     method:"GET", 
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/vnd.github.v3+json'
     },
    body: JSON.stringify(obj)
    }
    .then(resp => resp.json())
    .then(console.log(obj))
   }


   
  


})