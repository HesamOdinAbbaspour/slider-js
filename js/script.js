const informations = document.querySelectorAll(".informations")
const backBtn = document.querySelector(".back-btn")
const allBtn = document.querySelector(".all-btn")
const forwardBtn = document.querySelector(".forward-btn")
const back = document.querySelector(".back")
const box = document.querySelector(".box")
ProfileIndex = 0
back.style.display = "none"
allBtn.style.display = "block"
showImage()
function showImage(x){
  informations.forEach(information => {
    information.classList.remove("active")
  });
  if(x > informations.length-1){
    ProfileIndex=0;
  }
  if(x < 0){
    ProfileIndex=informations.length-1
  }
  for(let i=0; i<informations.length; i++){
    informations[i].classList.remove("active")
  }
  informations[ProfileIndex].classList.add("active")  
}
function plusIndex(num){
  showImage(ProfileIndex += num)
}
allBtn.addEventListener("click", () => {
  allBtn.style.display = "none"
  backBtn.style.display = "none"
  forwardBtn.style.display ="none"
  back.style.display = "block"
  back.style.margin = "0 auto"
  informations.forEach(information => {
      information.classList.add("active")
      information.style.position = "relative"
      information.style.left = "0%"
      box.style.display = "flex"
      box.style.padding = "10px"
      box.style.justifyContent = "space-around"
      box.style.position = "absolute"
      box.style.top = "25%"
      box.style.left = "0%"
  });
})
back.addEventListener("click", () => {
  console.log(back)
  allBtn.style.display = "block"
  backBtn.style.display = "block"
  forwardBtn.style.display ="block"
  back.style.display = "none"
  informations.forEach(information => {
    information.classList.remove("active")
    information.style.position = "absolute"
    information.style.left = "40%"
    box.style.display = "block"
    box.style.padding = "none"
    box.style.justifyContent = "none"
    box.style.position = "relative"
    box.style.top = "none"
    box.style.left = "none"
});
  informations[ProfileIndex].classList.add("active")
})