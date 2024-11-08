let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltay;
    scrollContainer.style.scrollBehavior = "auto"; 
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 280;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 280;
})

function showsidebar(){
    let x = document.querySelector(".sidebar")
    let il = document.querySelector(".icon")
    x.style.display='flex'
    i1.style.display='none'
}

function hidesidebar(){
    let x = document.querySelector(".sidebar")
    let il = document.querySelector(".icon")
    x.style.display='none'
    i1.style.display = 'flex'
}

let l = document.querySelector(".loader")

window.addEventListener("load",()=>{
    l.style.display="none"
})

let m = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{
    let x = e.pageX
    let y = e.pageY

    m.style.top=y + 'px'
    m.style.left=x + 'px'
    m.style.display="block"


})

document.addEventListener("mouseout",()=>{
    m.style.disply="none"
})