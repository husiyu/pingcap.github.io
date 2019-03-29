const openVideoModal = () => {
  $('.j-video-overlay').fadeIn()
  $('.j-video-overlay, .modal').addClass('active')
}

const autoPlayVideoInWeXin = () => {
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    $('#video-on-modal')[0].play()
  })
}

const closeModal = () => {
  $('.modal-overlay').fadeOut()
  $('.modal-overlay, .modal').removeClass('active')
  $('#video-on-modal')[0].pause()
}

$(function() {
  $('.j-video-btn').on('click', function(e) {
    var videoSRC = $(this).attr('data-video')
    console.log('video src: ', videoSRC)
    openVideoModal()
    $('#video-on-modal').attr('src', videoSRC)
    $('#video-on-modal')[0].play()
    autoPlayVideoInWeXin()
    e.preventDefault()
    e.stopPropagation()
  })

  $('.close-modal')
    .off('click')
    .on('click', function(e) {
      closeModal()
      e.preventDefault()
      e.stopPropagation()
    })
})
