$('.daterange-semua').daterangepicker({
  opens: 'left',
  maxDate: moment()
}); 
$('#daterange-penjualan').daterangepicker();
var start = moment().subtract(29, 'days');
var end = moment();

function cb(start, end) {
  $('.daterange-dropdown').html('<i class="ion ion-md-calendar mr-2"></i>' + start.format('D MMMM YYYY') + ' - ' + end.format('D MMMM YYYY'));
}

$('.daterange-dropdown').daterangepicker({
  opens: 'left',
  startDate: start,
  endDate: end,
  maxDate: moment(),
  ranges: {
    'Hari Ini': moment(),
    'Kemarin': [moment().subtract(1, 'days'), moment()],
    '7 Hari Kebelakang': [moment().subtract(6, 'days'), moment()],
    '30 Hari Terakhir': [moment().subtract(29, 'days'), moment()],
    'Bulan Ini': [moment().startOf('month'), moment().endOf('month')],
    'Akhir Bulan': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
}, cb);

cb(start, end);