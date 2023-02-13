(function () {

    document.getElementById("boton").addEventListener("click", cargatDatos)

    function cargatDatos() {
        const pagina = document.getElementById("pagina").value
        const cantidad = document.getElementById("cantidad").value

        let urlFinal = 'https://picsum.photos/v2/list?';
        if (pagina > 0 && cantidad > 0 && cantidad < 100) {
            urlFinal += `page=${pagina}&limit=${cantidad}`;
            renderFotos(urlFinal)
        }
        else {
            alert("seleccione datos necesatios")
        }

    }

    function renderFotos(url) {
        fetch(url)
            .then(resp => {
                if (resp.ok && resp.status == 200) {
                    return resp.json();
                }
            })
            .then((data) => {
                let  contenidoDiv = document.getElementById("contenido")
                contenidoDiv.innerHTML = "" 
                const grises = document.getElementById("grises").checked
                const blur = document.getElementById("blur").value
                let urlFoto = "";
                if(grises){
                    urlFoto += `grayscale`
                }
                if (blur > 0) {
                    urlFoto += `&blur=${blur}`
                    
                }
                for (let item of data) {
                    contenidoDiv.innerHTML +=    
                    `<div class="card" style="width: 18rem;">
                    <img src="${item.download_url}?${urlFoto}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.author} </h5>
                      <h6 class="card-subtitle mb-2 text-muted">${item.id}</h6>
                      <a href="${item.url}" class="btn btn-primary">url</a>
                    </div>
                  </div>
                        `;

                }
            })
            .catch((error) => { console.log(`Error en api ${error}`) });
    }
})()