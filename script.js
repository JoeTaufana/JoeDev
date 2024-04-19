
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});