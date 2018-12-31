var date=new Date();

$('.datepicker-bulan').datepicker({
  format: "mm/yyyy",
  minViewMode: 1,
  maxViewMode: 2,
  endDate: "now", 
  todayBtn: "linked"
});

$('#filter_leaderboard').click(function(){
  $(this).datepicker({
    format: "mm/yyyy",
    orientation: "bottom right",
    minViewMode: 1,
    maxViewMode: 2,
    maxDate: moment()
  });
  var date = $(this).datepicker('getMonth');
  console.log(date);
});

$('.date-leaderboard').datepicker({
  format: "mm/yyyy",
  minViewMode: 1,
  maxViewMode: 2,
  maxDate: moment()
});
$('.datepicker-biasa').datepicker({
  todayBtn: "linked",
  todayHighlight: true,
});