


   function get1MinuteFromNow() {
    return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
}

$('#clock-c').countdown(get1MinuteFromNow(), function(event) {
  var $this = $(this).html(event.strftime(
    '<span class="h1 font-weight-bold">%M</span> Min'
    + '<span class="h1 font-weight-bold">%S</span> Sec'));
});

/*  CALL TO ACTIONS FOR COUNTDOWN  */
$('#btn-reset').click(function() {
    $('#clock-c').countdown(get1MinuteFromNow());
});
$('#btn-pause').click(function() {
    $('#clock-c').countdown('pause');
});
$('#btn-resume').click(function() {
    $('#clock-c').countdown('resume');
});


function result() {
    var score= 0;

if(document.getElementById('correct-answer').checked)
{
    score++;
}
if(document.getElementById('wrong-answer').checked)
{
    score--;
}
}
alert("Your score is:" +score+ "points"); 

console.log(score)
