
//manejo operador ASYNC para devolver promesas 
async function getText() {
    return Promise.resolve("devuelva promesa...")
    
}
function getText2(params) {
    return Promise.resolve("hola cc")
}
/*------------------------------------------------------*/ 
//Ejemplo de async/Await
async function showData(){
    const resp = await fetch('https://www.datos.gov.co/resource/mcec-87by.json')
    const data = await resp.json
    console.log(data);
}
function showData2() {
    return fetch('https://www.datos.gov.co/resource/mcec-87by.json')
    .then(resp =>{
      return resp.json();
    })
    .then(data => {
        console.log(data);
    })
.catch(error => console.log(error)) 
     
}