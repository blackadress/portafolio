window.onload = () => {

  let navbar = document.querySelector('nav')

  let scrollDownBtn = document.querySelector('#scrollDown')

  scrollDownBtn.addEventListener('click', (e) => {
    smoothScroll('#habilidades', 500)
  })

}


const smoothScroll = (target, duration) => {
  let targetElem = document.querySelector(target)
  let targetPosition = targetElem.getBoundingClientRect().top
  let startPosition = window.pageYOffset
  let distance = targetPosition - startPosition - 150
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
    let run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if(timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)

}
