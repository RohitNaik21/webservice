const toglebtn=document.getElementById('burger-menu')
 

toglebtn.addEventListener('click',()=>{
        const btns=document.getElementById('nav-btn')
        btns.classList.toggle('active')
    
})

const next=document.getElementById('next');
const prev=document.getElementById('prev');
prev.disabled = true;
prev.style.cursor = "not-allowed";

const slids=document.querySelectorAll('.slids')
console.log(slids)

let fleg = 0;

slids.forEach(
(slide,index) => {
    slide.style.left=`${index*100}%`
}
);

const sliderimage=()=>{
    slids.forEach(
        (slide)=>{
             slide.style.transform=`translateX(-${fleg * 100}%)`
        }
    )
}

next.addEventListener('click',()=>{
    prev.disabled = false;
    prev.style.cursor = "pointer";
    fleg++;
    if(fleg===slids.length-1){
        next.disabled = true;
        next.style.cursor = "not-allowed";
    }
    sliderimage();
})

prev.addEventListener('click',()=>{
    next.disabled = false;
    next.style.cursor = "pointer";
    fleg--;
    if(fleg===0){
        prev.disabled = true;
        prev.style.cursor = "not-allowed";
    }
        sliderimage();
 
})







 




const nextt=document.getElementById('nextt');
const prevv=document.getElementById('prevv');
prevv.disabled = true;
prevv.style.cursor = "not-allowed";

const slidss=document.querySelectorAll('.slidss')
console.log(slids)

let flegg = 0;

slidss.forEach(
(slide,index) => {
    slide.style.left=`${index*100}%`
}
);

const sliderimagee=()=>{
    slidss.forEach(
        (slide)=>{
             slide.style.transform=`translateX(-${flegg * 100}%)`
        }
    )
}

nextt.addEventListener('click',()=>{
    prevv.disabled = false;
    prevv.style.cursor = "pointer";
    flegg++;
    if(flegg===slidss.length-1){
        nextt.disabled = true;
        nextt.style.cursor = "not-allowed";
    }
    sliderimagee();
})

prevv.addEventListener('click',()=>{
    nextt.disabled = false;
    nextt.style.cursor = "pointer";
    flegg--;
    if(flegg===0){
        prevv.disabled = true;
        prevv.style.cursor = "not-allowed";
    }
        sliderimagee();
 
})







 