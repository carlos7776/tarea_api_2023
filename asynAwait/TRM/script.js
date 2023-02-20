const app = {
    baseUrl:'https://picsum.photos/v2',
    getPictures: async function(){
        const resp = await fetch(`${this.baseUrl}/list`)
        const data = await resp.json()
        this.renderPictures(data)
    },
    renderPictures: function (data) {
     for(let item of data){
        console.log(item.author)
     }
    }
};

(function() {
    try {
        console.log(app.baseUrl)
        app.getPictures();
    } catch (error) {
        console.log(`Error> ${error}`)
    }
})()