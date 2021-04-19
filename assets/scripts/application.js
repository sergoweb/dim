$(function () {

  /**
   * Fluidbox + gallery functionality
   * Scrolls through all active fluidbox images on page
   *
   * Responds to keyboard controls: esc (27), left_arrow (37), right_arrow (39)
   */
  const $images = $('.fluidbox-trigger').fluidbox()
  const fluidboxDelay = 550
  let fluidboxTimeout

  const scrollTo = (image) => {
    const scrollTop = $(image).offset().top - (window.innerHeight / 2)
    $('html, body').animate({ scrollTop }, fluidboxDelay)
  }

  const closeFluidbox = () => {
    clearTimeout(fluidboxTimeout)
    $images.fluidbox('close')
  }

  const openFluidbox = (image) => {
    closeFluidbox()
    scrollTo(image)
    fluidboxTimeout = setTimeout(() => $(image).fluidbox('open'), fluidboxDelay)
  }

  document.addEventListener('keyup', (e) => {
    const active = $('.fluidbox--opened')[0]
    if (!active) return
    const index = $images.index(active)
    switch (e.which) {
      case 27: return closeFluidbox()
      case 37: return index > 0
        ? openFluidbox($images[index - 1])
        : closeFluidbox()
      case 39: return index < $images.length - 1
        ? openFluidbox($images[index + 1])
        : closeFluidbox()
    }
  })

  /**
   * Calculate years since professional experience began
   */
  var today = new Date().valueOf();
  var then = new Date(2006, 2, 1).valueOf();
  var professionalExperience = (today - then) / 1000 / 60 / 60 / 24 / 365;
  $('#_professionalExperience').text(~~professionalExperience);
})
