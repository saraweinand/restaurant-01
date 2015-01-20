jQuery(document).ready(function($){
	//open popup
	$('.popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.popup').addClass('is-visible');
	});
	
	//close popup
	$('.popup').on('click', function(event){
		if( $(event.target).is('.popup-close, .popup-reserve') || $(event.target).is('.popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup').removeClass('is-visible');
	    }
    });
});

$("#launch").click(function() {
  $('.overlay').fadeIn();

});

$("#close, .popup-reserve, .overlay").click(function() {
  $('.overlay').fadeOut();
});

$(".overlay").click(function() {
  $('.overlay').fadeOut();
  $('.popup').removeClass('is-visible');
});







var themonth = 1;
renderCal(themonth);

$('.minusmonth').click(function(){
  themonth += -1;
  renderCal(themonth);
});

$('.addmonth').click(function(){
  themonth += 1;
  renderCal(themonth);
});

function renderCal(themonth){
$('.calendar li').remove();
$('.calendar ul').append('<li>M</li><li>T</li><li>W</li><li>T</li><li>F</li><li>S</li><li>S</li>');
var d = new Date(),
  currentMonth = d.getMonth()+themonth, // get this month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']; // month names

$('.calendar p.monthname').text(months[currentMonth-1]); // add month name to calendar

for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
  $('<li>&nbsp;</li>').appendTo('.calendar ul');
}

for (var i = 1;i<=days;i++) { // write out the days
  $('<li>'+i+'</li>').appendTo('.calendar ul');
}

function firstDay(month,year) {
  return new Date(year,month,1).getDay();
}

function numDays(month,year) {
  return new Date(year,month,0).getDate();
}

var clicker = 1;
var min = 0;
var max = 1;

$('.calendar li').click(function(){ // toggle selected dates
  if(clicker==1){
    clicker=1;
    $('.calendar li').removeClass('red');
    $(this).addClass('red');
    min = $(this).text();
  } else {
    clicker=1;
    $(this).addClass('red');
    $('.calendar li.red').each(function(){
      max = $(this).text();
    });
    for(i=parseInt(min);i<parseInt(max);i++){
      $('.calendar li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); 
    }
  }
});
}






$(document).ready(function() {
  $('select').change(function() {
    $(this).prev('span').text(
      $(this).find(':selected').html()
    );
  });
});