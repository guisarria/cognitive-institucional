/*Toggle Header Menu When Click*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Menu Links Close Menu When Click*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Header Scroll Behavior */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials Swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #services3 .card, #services4 .card,
  #clients .crop,
  #about .card, #about img,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Back to Top Behavior */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Visible Page Menu Behavior */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }

    console.log('active nav a', document
      .querySelector('nav ul li a[href*=' + sectionId + ']'))
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  // activateMenuAtCurrentSection()
})

/* Active contact category tab */
const contact = document.querySelector('#contact')
const contactWorkButton = document.querySelector('.contact-button.work-with-us')
const contactWork = document.querySelector('.contact-form.work-with-us')
const contactForm = document.querySelectorAll('.contact-form')
const contactUs = document.querySelector('.contact-form.contact-us')
const contactContactButton = document.querySelector('.contact-button.contact-us')
const contactActive = document.querySelector('.contact-form.active')
const contactTabs = contact.querySelectorAll('.contact-button')

contactTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    contactTabs.forEach(tab => tab.classList.remove('active'))
    tab.classList.toggle('active')

    if (tab.classList.contains("work-with-us")) {
      contactForm.forEach(tab => tab.classList.remove('active'))
      contactWork.classList.toggle('active')

      return
    }

    contactForm.forEach(tab => tab.classList.remove('active'))
    contactUs.classList.toggle('active')
  })
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sendEmail() {
  const host = "smtp.elasticemail.com"
  const username = ""
  const password = ""
  const subject = document.getElementById('subject-input').value
  const from = document.getElementById('email-input').value
  const to = ""
  const message = document.getElementById('message-input').value
  console.log('message', message)
  console.log('from', from)
  
  console.log('sendEmail')
  Email.send({
    Host: host,
    Username: username,
    Password: password,
    To: to,
    From: from,
    Subject: subject,
    Body: message
  }).then(
    message => alert(message)
  );
}