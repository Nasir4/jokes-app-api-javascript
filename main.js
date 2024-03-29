document.getElementById('btn').addEventListener('click',getJoke);

function getJoke(e){

    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
         const response = JSON.parse(this.responseText);
         console.log(response);

         let output = '';
         if(response.type == 'success'){
           response.value.forEach(function(joke){
             output+= `<li class="list-group-item mt-2 animated bounceIn">${joke.joke}</li>`
           })
         }else{
             output += '<li>Some thing went wrong</li>'
         }

         document.querySelector('.jokes').innerHTML = output;
        }
    }

   xhr.send()

  e.preventDefault();
}