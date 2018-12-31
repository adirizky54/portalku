$(document).ready(function() {
  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  if (isRtl) {
    $('.dropdown .dropdown-menu').each(function() {
      $(this).toggleClass('dropdown-menu-right');
    });
  }
  
  //Tooltips & popover
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();  

  $('.btn-qty').click(function (e) {
    e.preventDefault();

    var fieldName = $(this).attr('data-field');
    var type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == 'minus') {
        var minValue = parseInt(input.attr('min'));
        if (!minValue) minValue = 1;
        if (currentVal > minValue) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == minValue) {
          $(this).attr('disabled', true);
        }

      } else if (type == 'plus') {
        var maxValue = parseInt(input.attr('max'));        
        if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == maxValue) {
          $(this).attr('disabled', true);
        }

      }
    } else {
      input.val(0);
    }
  });
  $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function () {

    var minValue = parseInt($(this).attr('min'));
    var maxValue = parseInt($(this).attr('max'));
    if (!minValue) minValue = 1;
    // if (!maxValue) maxValue = 9999999999999;
    var valueCurrent = parseInt($(this).val());

    var name = $(this).attr('name');
    if (valueCurrent >= minValue) {
      $(".btn-qty[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
      // alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
      $(".btn-qty[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
      // alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
    }

    if(valueCurrent >= maxValue){
      $('#qty-lebih').modal('show')
    }
  });

  $('#btn-step-email').click(function() {
    $('#verif-otp-email').modal('show');
    $('#step-email').modal('hide');
  });
  $('#btn-verif-email').click(function() {
    $('#ubah-email').modal('show');
    $('#verif-otp-email').modal('hide');
  });
  $('#btn-ubah-email').click(function() {
    $('#verif-otp-email-baru').modal('show');
    $('#ubah-email').modal('hide');
  });
  $('#btn-verif-email-baru').click(function() {
    $('#verif-otp-email-baru').modal('hide');
    swal(
      'Email berhasil diubah!',
      'You clicked the button!',
      'success'
    )
  });
  $('#btn-step-phone').click(function() {
    $('#verif-otp-phone').modal('show');
    $('#step-phone').modal('hide');
  });
  $('#btn-verif-phone').click(function() {
    $('#ubah-phone').modal('show');
    $('#verif-otp-phone').modal('hide');
  });
  $('#btn-ubah-phone').click(function() {
    $('#verif-otp-phone-baru').modal('show');
    $('#ubah-phone').modal('hide');
  });
  $('#btn-verif-phone-baru').click(function() {
    $('#verif-otp-phone-baru').modal('hide');
    swal(
      'Nomor Handphone berhasil diubah!',
      'You clicked the button!',
      'success'
    )
  });
  $('#btn-resend-otp-phone').click(function() {
    $('#resend-otp-phone').modal('hide');
    swal(
      'Nomor Handphone berhasil diverifikasi!',
      'You clicked the button!',
      'success'
    )
  });
  $('#btn-resend-otp-email').click(function() {
    $('#resend-otp-email').modal('hide');
    swal(
      'Email berhasil diverifikasi!',
      'You clicked the button!',
      'success'
    )
  });
  $('#btn-ubah-password').click(function() {
    $('#ubah-password').modal('hide');
    swal(
      'Password telah berhasil diubah!',
      'You clicked the button!',
      'success'
    )
  });
  $('.btn-del-cart').click(function(){
    swal({
      title: "Hapus Produk?",
      text: "Produk Juragan Shopee akan dihapus dari keranjang belanja anda",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        swal("Dihapus!", "Produk Berhasil Dihapus.", "success");
      }
    });
  });
  $('#kirim-ke-email').click(function() {
    swal({
      title: 'Data berhasil dikirim',
      text: 'Silahkan cek data yang telah kami kirim ke email adirizky54@gmail.com',
      type: "success",
      confirmButtonClass: "btn-success",
      confirmButtonText: "OK",
    })
  });
  $('#kirim-bukti').click(function() {
    $('#bukti-pembayaran').modal('hide');
    swal("Bukti pembayaran berhasil dikirim", "Silahkan tunggu proses konfirmasi dan verifikasi dari admin Billionaire Store", "success");
  });

  (function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
  
    function displayWindowSize() {
      myWidth = window.innerWidth;
      myModal = window.innerWidth;
      if(myWidth > 260 && myWidth < 991){
        $('#filter').removeClass('show');
        $('#alamat-pengiriman').removeClass('show');
        $('#detail-akun').removeClass('show');
      }else {
        $('#filter').addClass('show');
        $('#alamat-pengiriman').addClass('show');
        $('#detail-akun').addClass('show');
      }
      if(myModal > 768){
        $('#menu').modal('hide')
        $('#header-search').modal('hide')
        $('#header-menu').modal('hide')
      }
    };
  })(); 

  // Button Auth
  //
  $('#login').click(function() {
    $('#login-section').modal('show');
    $('#register-section').modal('hide');
  });

  $('#register').click(function() {
    $('#login-section').modal('hide');
    $('#register-section').modal('show');
  });

  $('#forgot').click(function() {
    $('#login-section').modal('hide');
    $('#forgot-section').modal('show');
  });

  $('#otp').click(function() {
    $('#register-section').modal('hide');
    swal({
      title: "Registrasi Sukses",
      text: "Silahkan cek email anda untuk melakukan konfirmasi.",
      type: "success",
      confirmButtonClass: 'btn-success',
      confirmButtonText: 'Mengerti'
    });
  });
  
  $('#del-produk').click(function() {
    swal({
      title: "Apakah anda yakin?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      closeOnConfirm: false,
    },
    function(isConfirm) {
      if (isConfirm) {
        swal("Terhapus!", "Produk belanjaan sudah terhapus.", "success");
      }
    });
  });

  // $('#tambah-produk').click(function() {
  //   swal({
  //     title: "Produk telah berhasil ditambahkan",
  //     type: "successs",
  //     showCancelButton: false,
  //     confirmButtonClass: "btn-success",
  //     confirmButtonText: "Mengerti"
  //   });
  // });
  
  // Hero slider
  //

  $('#shop-hero-slider').each(function() {
    new Swiper(this, {
      speed: 1000,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        slideChangeTransitionStart: function () {
          $('#shop-hero-slider')
            .find('.swiper-slide.swiper-slide-active, .swiper-slide.swiper-slide-duplicate-active')
            .addClass('shop-hero-slider-animating');
        },
        slideChangeTransitionEnd: function () {
          $('#shop-hero-slider')
            .find('.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-duplicate-active)')
            .removeClass('shop-hero-slider-animating');
        }
      }      
    });
  });

  // Filters
  //

  var shopPriceFilterVal = [ 5, 1000 ];

  $('#shop-price-slider').each(function() {
    noUiSlider.create(this, {
      start: shopPriceFilterVal,
      connect: true,
      tooltips: true,
      direction: isRtl ? 'rtl' : 'ltr',
      range: {
        'min': 5,
        'max': 1000,
      },
      format: {
        to: function (value) {
          return numeral(value).format('$0');
        },
        from: function (value) {
          return value.replace(/[\$\,]/g, '');
        }
      }
    })
    .on('update', function(values) {
      $('#shop-price-slider-start').val(values[0]);
      $('#shop-price-slider-end').val(values[1]);
    });
  });

  $('#shop-price-slider-start').on('change', function() {
    var val = parseInt(this.value.replace(/^\s+|\s+$|\$/g, ''));
    $('#shop-price-slider')[0].noUiSlider.set([
      isNaN(val) ? shopPriceFilterVal[0] : val,
      null
    ]);
  });

  $('#shop-price-slider-end').on('change', function() {
    var val = parseInt(this.value.replace(/^\s+|\s+$|\$/g, ''));
    $('#shop-price-slider')[0].noUiSlider.set([
      null,
      isNaN(val) ? shopPriceFilterVal[1] : val
    ]);
  });

  // Filters toggle
  $('#shop-filters-toggle').click(function() {
    $('#shop-filters-toggle-open-icon').toggleClass('d-none');
    $('#shop-filters-toggle-close-icon').toggleClass('d-none');
    $('#shop-filters-block').toggleClass('d-none');
  });

  // Product item
  //

  $('#shop-preview-slider').each(function() {
    new Swiper(this, {
      slidesPerView: 3,
      spaceBetween: 8,
      threshold: 20,
      navigation: {
        nextEl: $('#shop-preview-slider-next')[0],
        prevEl: $('#shop-preview-slider-prev')[0]
      }
    });
  });

  $('#shop-preview-slider').on('click', 'a', function(e) {
    e.preventDefault();
    $('#shop-preview-slider .border-primary').removeClass('border-primary');
    $(this).addClass('border-primary');
    $('#shop-preview-image img').attr('src', $(this).find('img').attr('src'));
  });

  $('#shop-preview-image').on('click', function(e) {
    e.preventDefault();

    // Unset focus
    $(this).blur();

    var curLink = $(this).find('img')[0].src;
    var links = [];

    $('#shop-preview-slider').find('img').each(function() {
      links.push(this.src);
    });

    window.blueimpGallery(links, {
      container: '#shop-preview-lightbox',
      carousel: false,
      hidePageScrollbars: true,
      disableScroll: true,
      index: links.indexOf(curLink)
    });
  });
});
