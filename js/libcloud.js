$(document).ready(function(){

  //SUPPORT TABLE
  $('#support-table td:contains("y")')
    .addClass('supported').text('yes');
  $('#support-table td:contains(" ")').add('#support-table td:empty')
    .addClass('unsupported').text('no');

  //SIDEBAR
  $('#sidebar').accordion({ 
    header:'h2',
    autoHeight:false
  }); 

});
