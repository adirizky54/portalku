$(function() {
    
    // Subnav
    //
  
    var subnavShowTreshold = 186.5; // In pixels
    var $subnavWrapper = $('#blog-subnav-wrapper');
    var $subnav = $('#blog-subnav');
  
    // Set wrapper height
  
    var curSubnavHeight;
  
    function updateDimensions() {
      var height = $subnav.outerHeight();
      if (height !== curSubnavHeight) {
        curSubnavHeight = height;
        $subnavWrapper.height(height);
        $subnav.css('top', (-1 * height) - 1);
      }
    }
  
    updateDimensions();
    $(window).on('resize', updateDimensions);
  
    // Subnav behaviour
  
    var lastScrollPos = 0;
    var scrollUpDelta = 0;
  
    function updateSubnavPorition() {
      var fixTopPoint = $subnavWrapper.offset().top;
      var fixBottomPoint = fixTopPoint + curSubnavHeight;
      var scrollTop = $(document).scrollTop();
  
      // alert(fixTopPoint);
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
  
        } else if (scrollTop < lastScrollPos) {
          scrollUpDelta += lastScrollPos - scrollTop;
  
          if (scrollUpDelta > subnavShowTreshold) {
            $subnav.addClass('subnav-shown');
          }
  
        } else {
          $subnav.removeClass('subnav-shown');
          scrollUpDelta = 0;
        }
      }
  
      lastScrollPos = scrollTop;
    }
  
    updateSubnavPorition();
    $(document).on('scroll', updateSubnavPorition);
    $(window).on('resize', updateSubnavPorition);
  });