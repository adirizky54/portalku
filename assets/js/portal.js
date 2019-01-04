window.onresize = displayWindowSize;
window.onload = displayWindowSize;

$('#portal-nav').scrollToFixed({
  maxWidth: 767
});

function displayWindowSize() {
  myWidth = window.innerWidth;
  if(myWidth <= 767) {
    $(window).scroll(function() {
      if ($(this).scrollTop()>0) {
        $('#top-banner').removeClass('d-block').addClass('d-none');
      }
      else {
        $('#top-banner').removeClass('d-none').addClass('d-block');
      }
    });
  } else {}
}

$('#portal-subnav-wrapper').scrollToFixed({
  minWidth: 768,
  zIndex: 1092,
  fixed: function() { $(this).find('#logo-image').removeClass('d-none').addClass('d-block'); },
  postFixed: function() { $(this).find('#logo-image').removeClass('d-block').addClass('d-none'); },
  unfixed: function() { $(this).find('#logo-image').removeClass('d-block').addClass('d-none'); },
});

$('.trending-post').easyTicker({
  visible: 1,
  interval: 5000
});

var swiperbanner = new Swiper('#swiper-artikel', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

$('#wrapper').SocialCounter({
  //Get Usernames
  facebook_user: 'envato',
  instagram_user: 'mycss_net',
  instagram_user_sandbox: 'mycss_net',
  youtube_user: 'envato',
  //Get Access Tokens,keys,client_ids
  instagram_token:'3216680391.5a20414.d66b30dc0857473dbf9723d34b502a73',
  facebook_token:'1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4',
  youtube_key:'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',    
});