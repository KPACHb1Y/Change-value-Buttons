let numbers = [1,2,3];
$('button').on('click', function(){
  numbers.push(numbers.shift());
  $('button').each(function(i){
    $(this).text(numbers[i]);
  });
});