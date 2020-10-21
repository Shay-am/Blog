const button = document.getElementById('btnForm');
const fromSucces = document.getElementById('succes')

const closeForm = () => {
  setTimeout(() => {
      if(fromSucces)
      fromSucces.style.visibility = 'hidden';
  }, 3000)
}
closeForm();
