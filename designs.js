$(document).ready(function(){
let table = $('#pixelCanvas');

  function makeGrid(h, w){
    for(i = 0; i < h; i++){
      table.append('<tr></tr>');
    }
    for(j = 0; j < w; j++){
      $('tr').append('<td></td>');
    }
  }

  $('#small').click(function(){
    $('tr').css('height', '20px');
    $('td').css('width', '20px');
  })

  $('#medium').click(function(){
    $('tr').css('height', '30px');
    $('td').css('width', '30px');
  })

  $('#large').click(function(){
    $('tr').css('height', '40px');
    $('td').css('width', '40px');
  })

  $('#submitButton').click(function(){
    table.empty();
    event.preventDefault();
    let h = $('#inputHeight').val();
    let w = $('#inputWeight').val();
    makeGrid(h,w);
    $('td').click(function(){
      $(this).css('background-color', $('#colorPicker').val());
    })
  })
})
