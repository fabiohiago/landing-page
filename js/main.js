//Carousel
$(".caroussel").slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

//Scroll Reveal
window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.area-1',{
  delay: 450,
  rotate:{
    x: 0,
    y: 0,
    z: -50
  }
})

ScrollReveal().reveal('.area-2',{
  delay: 200,
  rotate:{
    x: 0,
    y: 50,
    z: 0
  }
})

ScrollReveal().reveal('.area-3',{
  delay: 300,
  scale: 0.5,
  rotate:{
    x: 0,
    y: 0,
    z: -50
  }
})

//Scroll to Object
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}