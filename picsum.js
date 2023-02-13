


(function(){
   const url = 'https://picsum.photos/v2/list';
   document.getElementById("boton").addEventListener("click", prueba);


   fetch(`${url}/list`)  // llamado a api externo 
    .then(resp => {
        if(resp.ok && resp.status==200){
            return resp.json();
        }
    })

   .then(data => {
        for(let item of data){
            document.getElementById("contenido").innerHTML += 

        `<div class="card" style="width: 18rem;">
        <img src="${item.download_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.author} </h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.id}</h6>
          <a href="${item.url}" class"card-link">${item.url}</a>
        </div>
      </div>
            `;
        }
        
   })
   .catch(resp => console.log("error llamado de api"))
    })()  
    

    