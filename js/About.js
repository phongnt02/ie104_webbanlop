export const blog ={

    data: null,
 
    getAPI : function () {
        const _this = this;
        fetch('http://www.phongnt20521745.tk/API/blog.php')
        .then((data) =>{
            return data.json().
            then((completedata)=>{
                _this.data=completedata
                _this.out()
        })
            })
        },
    show : function(values,list){
        if (values.title=='Adventure Video'){
            list.innerHTML+=`
            <div class="inner_content">
            <iframe width="250px" height="200px" src="${values.img}"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                ${values.content}
                </p>
            </div>  
         `
        }
        else{
        list.innerHTML+=`
            <div class="inner_content">
                <img src="${values.img}">
                <p>
                ${values.content}
                </p>
            </div>  
         `} 
    },
    start: function(){
        this.getAPI()
        
    },
    out: function(){
        let about = document.querySelector('#about')
        about.innerHTML='<h2>ABOUT CST</h2>'
        this.data.map((values)=>{
            if(values.title=='About CST')
            this.show(values,about)
        })

        let gallery = document.querySelector('#Gallery')
        gallery.innerHTML+='<h2>Adventures Gallery</h2>'
        this.data.map((values)=>{
            if(values.title=='Adventure Gallerry')
            this.show(values,gallery)
        })

        let video = document.querySelector('#video')
        video.innerHTML+='<h2>Adventures Videos</h2>'
        this.data.map((values)=>{
            if(values.title=='Adventure Video')
            this.show(values,video)
        })
    }
}