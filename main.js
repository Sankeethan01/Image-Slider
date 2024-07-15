let nextButton=document.getElementById("next")
let prevButton=document.getElementById("prev")
let slider=document.querySelector(".slider")
let sliderList=document.querySelector(".slider .list")
let sliderThumbnail=document.querySelector(".slider .thumbnail")



nextButton.onclick=function(){
    showSlider("next")
}

prevButton.onclick=function(){
    showSlider("prev")
}

let timeRunning=3000;
let runTimeout;

let timeAutoNext=5000;
let runAutoRun=setTimeout(()=>{
    nextButton.click()
},timeAutoNext)

function showSlider(type)
{
    let sliderListItem=document.querySelectorAll(".slider .list .item")
    let sliderThumbnailItem=document.querySelectorAll(".slider .thumbnail .item")

    if(type=="next")
    {
        sliderList.appendChild(sliderListItem[0])
        sliderThumbnail.appendChild(sliderThumbnailItem[0])
        slider.classList.add('next')

    }
    else{
        let positionLastItem=sliderListItem.length-1
        sliderList.prepend(sliderListItem[positionLastItem])
        sliderThumbnail.prepend(sliderThumbnailItem[positionLastItem])
        slider.classList.add('prev')
    }
    
    clearTimeout(runTimeout)
    runTimeout=setTimeout(() =>{
        slider.classList.remove('next')
        slider.classList.remove('prev')
    },timeRunning)

    clearTimeout(runAutoRun)
    runAutoRun=setTimeout(()=>{
        nextButton.click()
    },timeAutoNext)


}