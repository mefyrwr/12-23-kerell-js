const makeRequestModal = document.querySelector('#make_request');

document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', function() {
        const content = this.nextElementSibling;

        
function createAccordion(accordionQuerySelector) {  const accordion = document.querySelector(accordionQuerySelector);
    accordion.addEventListener('click', () => {
      accordion.classList.toggle("open");  });
  }
  
  createAccordion('.accordion'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('make_request');
    const openButton = document.querySelector('button');
    const closeButton = dialog.querySelector('.close');
    const form = dialog.querySelector('.make_request_form');
  
  
    openButton.addEventListener('click', function() {
      dialog.showModal();
    });
  
    closeButton.addEventListener('click', function() {
      dialog.close();
    });
  
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      fetch('/your-server-endpoint', { 
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          console.log('Success:', data);
          alert('Заявка отправлена!');
          dialog.close();
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Ошибка при отправке заявки!');
        });
    });
  });

  
document.addEventListener('DOMContentLoaded', () => {
    const linkExpand = document.querySelector('.link_expand');
    const linkExpandContent = document.querySelector('.link_expand__content');

    linkExpand.addEventListener('mouseenter', () => {
      linkExpandContent.style.display = 'block';
    });

    linkExpand.addEventListener('mouseleave', () => {
      linkExpandContent.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('make_request');
    const closeBtn = dialog.querySelector('.close');
    const registerButton = document.getElementById('registerBtn');

    function showDialog() {
        dialog.showModal();
    }

    window.addEventListener('scroll', function() {
        const triggerBlock = document.querySelector('.container.card__content');
        const rect = triggerBlock.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            showDialog();
            window.removeEventListener('scroll', arguments.callee);
        }
    });

    closeBtn.addEventListener('click', function() {
        dialog.close();
    });

    registerButton.addEventListener('click', function() {
        showDialog();
    });

    dialog.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            dialog.close();
        }
    });
});