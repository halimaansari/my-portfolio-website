
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('check');
    const navList = document.querySelector('nav ul');

  
    toggleButton.addEventListener('change', function () {
        if (this.checked) {
            navList.classList.add('show'); 
        } else {
            navList.classList.remove('show'); 
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth' 
                });
            }

         
            toggleButton.checked = false; 
            navList.classList.remove('show'); 
        });
    });

   
 

    
    const closeModal = document.querySelector('.close');
    if (closeModal) {
        closeModal.onclick = function () {
            document.getElementById('preview-modal').style.display = 'none';
        };
    }

   
    window.onclick = function (event) {
        const modal = document.getElementById('preview-modal');
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    };

   
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = 'block'; 
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        backToTopButton.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
});


function scrollTocontactSection() {
    const section = document.getElementById('contact-section'); // Adjust this to your section ID
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToPortfolio() {
    const section = document.getElementById('portfolio'); // Ensure this ID matches your portfolio section
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


