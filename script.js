


    function toggleDropdown() {
        var dropdownOptions = document.getElementById("dropdownOptions");
        dropdownOptions.style.display = (dropdownOptions.style.display === "block") ? "none" : "block";
    }

    function showDreamContent(content) {
        var dreamContent = document.getElementById("dreamContent");
        dreamContent.innerHTML = "<h2>Dream Content</h2><p>" + content + "</p>";
        dreamContent.style.display = "block";
    }

      
      function resetPage() {
        location.reload(true);
      }

     

    function toggleContactForm() {
      const contactForm = document.getElementById('contactForm');
      contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
    }

    
    function cancelForm() {
      const contactForm = document.getElementById('contactForm');
      contactForm.style.display = 'none';
    }


    async function submitForm() {
      const formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };

      try {
        const response = await fetch('/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          // Optionally, reset or hide the form after submission
          cancelForm();
        } else {
          console.error('Error submitting form:', response.statusText);
          alert('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }






 








    
      
  
    