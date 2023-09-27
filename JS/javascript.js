    const nav = document.getElementById('nav');
    const hamburguerIcon = document.getElementById('hamburguer-icon');
    const closeIcon = document.getElementById('close-icon');
    const overlay = document.querySelector('.overlay');

    hamburguerIcon.addEventListener('click', () => {
      nav.classList.add('show');
      hamburguerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
      nav.classList.remove('show');
      closeIcon.style.display = 'none';
      hamburguerIcon.style.display = 'block';
    });

    hamburguerIcon.addEventListener('click', () => {
      overlay.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

