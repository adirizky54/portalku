var penulisList = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('penulis'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../assets/js/penulis.json'
});

var produkList = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('produk'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../assets/js/produk.json'
});

$('#search-input .typeahead').typeahead({
  highlight: true,
  hint: true,  
},
{
  name: 'produk-list',
  display: 'produk',
  source: produkList,
  limit: 3,
  templates: {
    header: '<div class="billy-dropdown"><span class="font-weight-semibold">Produk</span></div>',
    empty: Handlebars.compile($("#empty-produk-template").html()),
    suggestion: Handlebars.compile($("#produk-template").html())
  }
},
{
  name: 'penulis-list',
  display: 'penulis',
  source: penulisList,
  limit: 10,
  templates: {
    header: '<div class="billy-dropdown"><span class="font-weight-semibold">Penulis</span></div>',
    empty: Handlebars.compile($("#empty-penulis-template").html()),
    suggestion: Handlebars.compile($("#penulis-template").html())
  }
});