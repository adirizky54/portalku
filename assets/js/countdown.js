$('#clock').countdown('2018/12/04 18:00:00').on('update.countdown', function(event) {
  var jam = '%H';
  var menit = '%M';
  var detik = '%S';      
  if(event.offset.totalDays > 0) {
    var hari = '%-d hari';
    $('#hari').html(event.strftime(hari)).parent().addClass('d-block');
  }
  if(event.offset.weeks > 0) {
    var minggu = '%-w minggu';
    $('#minggu').html(event.strftime(minggu)).addClass('mr-2').parent().addClass('d-block');
  }
  $('#day').addClass('d-none');
  $('#jam').html(event.strftime(jam));
  $('#menit').html(event.strftime(menit));
  $('#detik').html(event.strftime(detik));
})
.on('finish.countdown', function(event) {
  // $(this).parent().addClass('test');
  $(this).html('<h5 class="text-uppercase font-italic mb-0"><i class="ion ion-md-alarm mr-2"></i>Promo telah berrakhir</h5>');
});