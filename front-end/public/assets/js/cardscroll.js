var handles = []

window.onload = () => {
    var box = document.getElementsByClassName("comment-box")
    if(typeof box === "object"){
        for (let index = 0; index < 12; index++) {
            document.addEventListener('scroll', function handler(e){
                if(box[index].getBoundingClientRect().top === 128){
                    handles[index] = window.scrollY
                    document.removeEventListener('scroll', handler);
                }
            })
        }
    }
    
    for (let index = 0; index < 1; index++) {
        document.addEventListener('scroll', (e) => {
            if(box[index].getBoundingClientRect().top === 128){
                // box[index].style.transform = `translateY(${window.scrollY - handles[index]}px)`
                console.log(box[index].offsetTop)
            }
        })
    }
  
}