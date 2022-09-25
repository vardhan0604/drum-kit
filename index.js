console.log("file is connected")

const keyEl=document.getElementById("key");

window.addEventListener("keydown",function(e){
   //  console.log(e.keyCode)
    let active =document.querySelector(`div[data-key="${e.keyCode}"]`);
    active.classList.add("playing");
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
   //  console.log(audio)
     if(!audio){
        return;
     }else{
        audio.currentTime=0
        audio.play();
     }
})
function removew(f){
   if(f.propertyName!=="transform"){
      return;
   }else{
      this.classList.remove("playing");
   }
}


const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removew));