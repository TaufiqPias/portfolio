'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  // Normalize the selected value to lowercase
  selectedValue = selectedValue.toLowerCase();

  for (let i = 0; i < filterItems.length; i++) {
    const projectCategory = filterItems[i].dataset.category.toLowerCase(); // Normalize project category

    if (selectedValue === "all" || selectedValue === projectCategory) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// JavaScript for modal popup with carousel
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-project-img");
  const modalTitle = document.getElementById("modal-project-title");
  const modalCategory = document.getElementById("modal-project-category");
  const modalDescription = document.getElementById("modal-project-description");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentImageIndex = 0;
  let currentProjectImages = [];

  const projectDetails = {
    "Xome Standard Operation": { 
      description: "In 2019, my one of the first and biggest projects was to creatand optimize the standard procedure of Xome Work Order Processing. Adapting the whole online processing system from AFAS (Assurant Field Asset Services, Inc) Xome initiated a Pruvan based web service. Which turned out to be one of the hardest and most time consuming operation for our Team. My project was to figure out a suitable and fast work order processing standard operation system so that our 255 employees can easily submit orders in the shortest amount of time. Outcome: More than 230 people found the system was working and the turn over time of work orders cut short from 5 hours to 1 and a half hour.",
      images: ["./assets/images/project-1.jpg", "./assets/images/project-2.jpg", "./assets/images/project-3.jpg", "./assets/images/project-4.png", "./assets/images/project-5.jpg"],
      category: "Business Development" 
    },
    "Book Cover Design": { 
      description: "Since 2012, I have been requested to design various book covers for different authors. My Father was one of them and I did his cover for the book 'Showpno Bashor'. Apart from that, I have prepared so many other book covers (print-ready). Please check the photos for the covers. ***In this long period of time I have lost a lot of book covers. The gallery includes the best works and reworks of mine from 2012 till this date.", 
      images: ["./assets/images/project-6.jpg", "./assets/images/project-10.jpg", "./assets/images/project-7.jpg", "./assets/images/project-8.jpg", "./assets/images/project-9.jpg"], 
      category: "Graphics Designs" 
    },

    "Pocket Book Publication": { 
      description: "Pocket book publication is one of my hobby project for my personal interest. Pocket Book Publication is an unregistered personal book publication whose purpose is to put a book in your pocket so that you build up a habit of reading books. This publication downsizes a book and prints a paperback book for a reader so that he/she can keep the book in his/her pocket all the time. We downsize previously published books or collect contents from different authors to publish personally.For order please send me a text on my whatsapp.", 
      images: ["./assets/images/project-11.jpg", "./assets/images/project-12.jpg", "./assets/images/project-13.jpg", "./assets/images/project-14.jpg"], 
      category: "Content Writing" 
    },

    "FFS Online CRM Development": { 
      description: "So we had this target to boost our business in Fleet Bangladesh to produce a CRM for the daily Operations of Fleet Field Services. We formed a team and initiated the task. Now we have a working CRM under the name FFS Online and we are working on daily basis.", 
      images: ["./assets/images/project-15.jpg", "./assets/images/project-16.jpg", "./assets/images/project-17.jpg", "./assets/images/project-18.jpg", "./assets/images/project-19.jpg", "./assets/images/project-20.jpg", "./assets/images/project-21.jpg", "./assets/images/project-22.jpg", "./assets/images/project-23.jpg", "./assets/images/project-24.jpg"], 
      category: "Web Development" 
    },

    "Wordpress Project": { 
      description: "For our business promotion we needed a website. Due to lack of budget, I had to build it with wordpress. Using Elementor and my graphics design knowledge, I and one of my associate completed this website within 2 days and launched it. Visit: fleetfieldservices.com",
      images: ["./assets/images/project-25.jpg", "./assets/images/project-26.jpg", "./assets/images/project-27.jpg", "./assets/images/project-28.jpg", "./assets/images/project-29.jpg"], 
      category: "Web Development" 
    },

    "Project NDB": { 
      description: "An acquaintance of mine requested me to produce a production business strategy for the recent trend and he wanted to do something on youtube. Therefore, following the business strategy and focusing on the Bangladeshi audience I came up with this project NDB.",
      images: ["./assets/images/project-30.jpg", "./assets/images/project-31.jpg", "./assets/images/project-32.jpg", "./assets/images/project-33.jpg", "./assets/images/project-34.jpg", "./assets/images/project-35.jpg", "./assets/images/project-36.jpg", "./assets/images/project-37.jpg", "./assets/images/project-38.jpg", "./assets/images/project-39.jpg", "./assets/images/project-40.jpg"], 
      category: "Business Development" 
    },

    "Quick PPT Augmedix": { 
      description: "While I was in Dhaka working for Adroitech, my roommate requested me to prepare him a quick power point presentation with a minimal style for his appraisal interview for the post of trainer. This is what I prepared for him in 15 minutes and luckily he got the promotion.", 
      images: ["./assets/images/project-41.jpg", "./assets/images/project-42.jpg", "./assets/images/project-43.jpg", "./assets/images/project-44.jpg", "./assets/images/project-45.jpg", "./assets/images/project-46.jpg"], 
      category: "Content Writing" 
    },

    "Business Introduction": { 
      description: "While developing the infrustructure of the company Adroitech, my boss requested me to introduce new comers to the business and give them a briefing. After the briefing boss said, it was the best briefing he had ever seen.",
      images: ["./assets/images/project-47.jpg", "./assets/images/project-48.jpg", "./assets/images/project-49.jpg", "./assets/images/project-50.jpg", "./assets/images/project-51.jpg", "./assets/images/project-52.jpg", "./assets/images/project-53.jpg"], 
      category: "Business Development" 
    },

    "Operation Introduction": { 
      description: "After a successful Business introduction, my boss requested me to start training the newbees the same way. As we were working on property management on US residential property, it was mandatory that we educate our analysts about the fundamentals of US properties. To do that I prepared this training module.",
      images: ["./assets/images/project-54.jpg", "./assets/images/project-55.jpg", "./assets/images/project-56.jpg", "./assets/images/project-57.jpg", "./assets/images/project-58.jpg", "./assets/images/project-59.jpg", "./assets/images/project-60.jpg", "./assets/images/project-61.jpg", "./assets/images/project-62.jpg", "./assets/images/project-63.jpg", "./assets/images/project-64.jpg", "./assets/images/project-65.jpg", "./assets/images/project-67.jpg", "./assets/images/project-68.jpg"], 
      category: "Business Development" 
    },

    "Blood Donors of Bangladesh": { 
      description: "This is a work in Progress Project", 
      images: ["./assets/images/project-609.jpg"], 
      category: "Web Development"
    },

    // Add more projects here...
  };


  function openModal(title) {
    const details = projectDetails[title];
    if (details) {
      modalTitle.innerText = title;
      modalCategory.innerText = details.category;
      modalDescription.innerText = details.description;
      currentProjectImages = details.images;
      currentImageIndex = 0;
      modalImg.src = currentProjectImages[currentImageIndex];
      modal.style.display = "block";
    }
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showImage(index) {
    if (index >= 0 && index < currentProjectImages.length) {
      currentImageIndex = index;
      modalImg.src = currentProjectImages[currentImageIndex];
    }
  }

  document.querySelectorAll(".project-item").forEach(item => {
    item.addEventListener("click", function () {
      const title = this.querySelector(".project-title").innerText;
      openModal(title);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentImageIndex > 0) {
      showImage(currentImageIndex - 1);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentImageIndex < currentProjectImages.length - 1) {
      showImage(currentImageIndex + 1);
    }
  });
});


// Freeze background when the modal is open

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".close-btn");

  // Function to open modal and disable background scroll
  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
  }

  // Function to close modal and re-enable background scroll
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Re-enable background scrolling
  }

  // Open modal when project item is clicked
  document.querySelectorAll(".project-item").forEach(item => {
    item.addEventListener("click", function () {
      // Populate modal content here (as per previous instructions)
      openModal();
    });
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// send email using Emailjs
const button = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_dkk2v7h';
   const templateID = 'template_w3tn3ld';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Message';
      alert(JSON.stringify(err));
    });
});