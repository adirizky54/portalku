window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  myWidth = window.innerWidth;
  if(myWidth >= 768){
    var subnavShowTreshold = 10; // In pixels
    var $subnavWrapper = $('#portal-subnav-wrapper');
    var $subnav = $('#portal-subnav');

    var curSubnavHeight;

    function updateDimensions() {
      var height = $subnav.outerHeight();
      if (height !== curSubnavHeight) {
        curSubnavHeight = height;
        $subnavWrapper.height(height);
        $subnav.css('top', (-1 * height) - 14);
      }
    }

    updateDimensions();
    $(window).on('resize', updateDimensions);

    // Subnav behaviour

    var lastScrollPos = 0;
    var scrollUpDelta = 0;

    function updateSubnavPosition() {
      var fixTopPoint = $subnavWrapper.offset().top;
      var fixBottomPoint = fixTopPoint + curSubnavHeight;
      var scrollTop = $(document).scrollTop();

      if (!$subnav.hasClass('subnav-fixed')) {
        if (scrollTop > fixBottomPoint) {
          $subnav.addClass('subnav-fixed');
          scrollUpDelta = 0;
        }

      } else {
        if (scrollTop < fixTopPoint) {
          $subnav.removeClass('subnav-fixed subnav-shown');

        } else if (scrollTop < fixBottomPoint) {
          $subnav.addClass('subnav-shown');
          $("#search-box").removeClass('show');
          $("#logo-image").removeClass('d-block');
        } else if (scrollTop < lastScrollPos) {
          scrollUpDelta += lastScrollPos - scrollTop;

          if (scrollUpDelta > subnavShowTreshold) {
            $subnav.addClass('subnav-shown');
            $("#logo-image").addClass('d-block');
          }

        } else {
          $subnav.removeClass('subnav-shown');
          $("#logo-image").removeClass('d-block');
          scrollUpDelta = 0;
        }
      }

      lastScrollPos = scrollTop;      
    }
    
    updateSubnavPosition();
    $(document).on('scroll', updateSubnavPosition);
    $(window).on('resize', updateSubnavPosition);
  } else {
    $subnavWrapper.removeAttr("style");
    $subnav.removeAttr("style");
    $subnav.removeClass('subnav-fixed subnav-shown');
    $("#logo-image").removeClass('d-block');
  }  
}

$('.navbar-search-input > input').on('focus', function() {
  $('.navbar-search-box').addClass('active');
});

$('.navbar-search-cancel').on('click', function(e) {
  e.preventDefault();
  $('.navbar-search-box').removeClass('active');
});

$('#news-trending').inewsticker({
  speed       : 5000,
  effect      : 'slide',
  dir         : 'ltr',
  delay_after : 5000		
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