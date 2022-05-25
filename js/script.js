function IsMobile() { 
  return( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
}

function SwitchToMobileVersion(){
  $("#game-preview-mobile").show()
  // $('#preview-video-pc').hide()
  $('#gif-footsies').show()
  $('#video-footsies').hide()
  $('#gif-combos').show()
  $('#video-combos').hide()
  $('#gif-win').show()
  $('#video-win').hide()
  $('#gif-learn').show()
  $('#video-learn').hide()

  function delayAsync(ms) {
      return new Promise(p_resolve => setTimeout(p_resolve, ms));
  }

  async function SetGif(path,duration,callback) {
      // console.log(path);
      $('#game-preview-gif').attr('src', path)
      await delayAsync(duration);
      if (callback instanceof Function) {
          callback();
      }
  }

  let amp = 1.3;
  function LoopGifts() {
      return new Promise(async (resolve, reject) => {
          await SetGif('https://media.giphy.com/media/6j5SujnwTzBtTqdJl4/giphy.gif', 1000*amp);
          await SetGif('https://media.giphy.com/media/gXb91uN3snwFlieC2F/giphy.gif', 1000*amp);
          await SetGif('https://media.giphy.com/media/myu6I7WOnbVU4U5Xh3/giphy.gif', 1000*amp);
          await SetGif('https://media.giphy.com/media/IYQXvWVEl5nv1vD0Vl/giphy.gif', 1000*amp);
          resolve();
      });
  }
  LoopGifts();
  setInterval(LoopGifts, 21600*amp);
  // $('#game-preview-mobile').show();
  // $("#preview-video-mobile").css('width','100%');
  // let height = $(window).width()*0.5625+'px';
  // $("#preview-video-mobile").css('height',height);
}

$(document).ready(function() {
  let includes = $('[data-include]')
  let count = includes.length;
  $.each(includes, function (i) {
    let file = 'views/' + $(this).data('include') + '.html?v=2'
    $(this).load(file, ()=>{
      if (i+1 === count && IsMobile()) {        
        setTimeout(SwitchToMobileVersion, 1000)
      }
    })
    
    
  })


})



$(document).ready(function() {

  

  
  

  // document.addEventListener("DOMContentLoaded", function(){
  //   document.body.addEventListener("touchstart", playVideo);
  //   function playVideo() {
  //       const video = document.getElementById('preview-video-mobile');
  //       if(!video.playing) {
  //         video.play();
  //       }
  //   }
  // });



  // $('video#video-combos').on('play', () => {
  //   console.log("autoplay works!")
  // })

  // // In browsers that don’t yet support this functionality,
  // // playPromise won’t be defined.
  // if (playPromise !== undefined) {
  //   playPromise.then(function() {
  //     // Automatic playback started!
  //     console.log('automatic playback started')
  //   }).catch(function(error) {
  //     // Automatic playback failed.
  //     // Show a UI element to let the user manually start playback.
  //     console.log('automatic playback FAILED')
  //   });
  // }



})