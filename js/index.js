const menuToggle = document.querySelectorAll('.menu-toggle input');
const nav = document.querySelector('#navbar-1 ul');
const scrollBg = document.querySelector('.scroll-bg')
const circleScroll = document.querySelector('.circle')

menuToggle.forEach(function(toggle) {
  toggle.addEventListener('click', function(){
        nav.classList.toggle('slide');
        //close navbar when click outside
        document.addEventListener('click', function(e){
            if(e.target !== nav && e.target !== toggle){
                nav.classList.remove('slide');
                toggle.checked = false;
            }
        });
    });
})

// funchion loading

window.onload = () => {
    document.getElementById("loading").style.display = "none";
}

// end funchion loading

// function cursor

let cursor = document.querySelector('.cursor')
let cursorInner = document.querySelector('.cursorInner')
document.addEventListener('mousemove', (event) => {
  cursor.style.cssText = cursorInner.style.cssText =
    'left: ' + event.clientX + 'px; top: ' + event.clientY + 'px;'
})

// end of function cursor

// funchion progress bar and to top

const showOnPx = 100
const backToTopButton = document.querySelector('.back-to-top')
const pageProgressBar = document.querySelector('.progress-bar')

const scrollContainer = () => {
  return document.documentElement || document.body
}

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  })
}

document.addEventListener('scroll', () => {
  console.log('Scroll Height: ', scrollContainer().scrollHeight)
  console.log('Client Height: ', scrollContainer().clientHeight)

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100

  pageProgressBar.style.width = `${scrolledPercentage}%`

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden-top')
  } else {
    backToTopButton.classList.add('hidden-top')
  }
})

backToTopButton.addEventListener('click', goToTop)

// end of function progress bar and to top

// function poster slider

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains('in-view')) {
        items[i].classList.add('in-view')
      }
    } else if (items[i].classList.contains('in-view')) {
      items[i].classList.remove('in-view')
    }
  }
}

window.addEventListener('load', callbackFunc)
window.addEventListener('scroll', callbackFunc)

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})

// end of function poster slider

function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 0

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)

//

// instruction

const lanjut = document.querySelectorAll('.lanjut');
const instruction = document.querySelectorAll('.instruction');
let position = 0;

lanjut.forEach(lanjut => {
    lanjut.addEventListener('click', () => {
        position += -100;
        instruction.forEach(instruction => {
            instruction.style.transform = `translateX(-${0 - position}%)`
        })
    })
})

const kembali = document.querySelectorAll('.kembali');
kembali.forEach(kembali => {
    kembali.addEventListener('click', () => {
        position += 100;
        instruction.forEach(instruction => {
            instruction.style.transform = `translateX(-${0 - position}%)`
        })
    })
})


const instructionBg = document.querySelectorAll('.instruction-bg');
const iContainer = document.querySelectorAll('.instruction-container');
const mulai = document.querySelectorAll('.mulai');

mulai.forEach(mulai => {
    mulai.addEventListener('click', () => {
        instructionBg.forEach(instructionBg => {
            instructionBg.style.animation = 'fadeOut .5s ease-in-out forwards',
            instructionBg.style.animationDelay = '.5s'
        })
        iContainer.forEach(iContainer => {
            iContainer.style.animation = 'scaleOut .5s ease-in-out forwards',
            iContainer.style.animationDelay = '0s'
        })
    })
})

function limit(element)
{
    var max_chars = 8;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

// SCROLL BG EVENT ON MOUSEOVER AND MOUSEOUT
scrollBg.addEventListener('mouseover', () => {
  circleScroll.style.marginTop = '20px'
})

scrollBg.addEventListener('mouseout', () => {
  circleScroll.style.marginTop = '0px'
})