
const modal = () => {
 let count = 0;
 let animate;
 const modal = document.querySelector('.popup');
 const buttons = document.querySelectorAll('.popup-btn');
 const closeBtn = modal.querySelector('.popup-close');
 const popupContent = modal.querySelector('.popup-content');

 const animationModal = () => {
  count++;
  animate = requestAnimationFrame(animationModal);
  popupContent.style.rotate = `${count * 3 }deg`;
  if(count === 120) {
   cancelAnimationFrame(animate);
  }

console.log(count);
 }

 buttons.forEach(btn => {
  btn.addEventListener('click', () => {
   modal.style.display = 'block';
   if(document.scrollingElement.offsetWidth > 768){
    animationModal();
   }
  })
 })

 closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
 })
}

export default modal