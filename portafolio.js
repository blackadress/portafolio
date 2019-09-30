window.onload = () => {

  let linksInternos = document.querySelector('.menu ul')

  linksInternos.children[0].children[0].addEventListener('click', (e) => {
    smoothScroll('#habilidades', 500, 150)
  })

  linksInternos.children[1].children[0].addEventListener('click', (e) => {
    smoothScroll('#proyectos', 500, 0)
  })

  linksInternos.children[2].children[0].addEventListener('click', (e) => {
    smoothScroll('#proyectos', 500, 0)
  })

  let scrollDownBtn = document.querySelector('#scrollDown')

  scrollDownBtn.addEventListener('click', (e) => {
    smoothScroll('#habilidades', 500, 150)
  })

  // mobile open menu
  navSlide()

}

const smoothScroll = (target, duration, offset) => {
  let targetElem = document.querySelector(target)
  let targetPosition = targetElem.getBoundingClientRect().top - offset
  let startPosition = window.pageYOffset
  let startTime = null
  
  const ease = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    timeElapsed = currentTime - startTime
    let run = ease(timeElapsed, startPosition, targetPosition, duration)
    window.scrollTo(0, run)
    if(timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.lista-habilidades')

  burger.addEventListener('click', e => {
    nav.classList.toggle('burger-active')
    burger.classList.toggle('burger-toggle')
  })

  
}