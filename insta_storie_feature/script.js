let arr = [
    {dp:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/12803521/pexels-photo-12803521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {dp:"https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/2740798/pexels-photo-2740798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/1876429/pexels-photo-1876429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/2475093/pexels-photo-2475093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {dp:"https://images.pexels.com/photos/2896454/pexels-photo-2896454.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/2890867/pexels-photo-2890867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {dp:"https://images.pexels.com/photos/3152226/pexels-photo-3152226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/3261060/pexels-photo-3261060.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
]
let clutter = ""
arr.forEach((elem,indx)=>{
     clutter += `<div class="story">
     <img id = "${indx}" src="${elem.dp}" alt=""></div>`
})
document.querySelector(".storiyan").innerHTML = clutter;

let storiyan = document.querySelector(".storiyan")
storiyan.addEventListener('click',function(elem){
    document.querySelector(".full_screen").style.display = "block"
    document.querySelector(".full_screen").style.backgroundImage = `url(${arr[elem.target.id].story})`
    // console.log(arr[elem.target.id].story)
    setTimeout(()=>{
        document.querySelector(".full_screen").style.display = "none"
    },2000)
})