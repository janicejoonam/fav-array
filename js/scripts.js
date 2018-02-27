$(document).ready(function() {
  $('#favorites').submit(function(event) {
    debugger
    var question1 = $('input#question1').val();
    var question2 = $('input#question2').val();
    var question3 = $('input#question3').val();
    var question4 = $('input#question4').val();
    var question5 = $('input#question5').val();
    var question6 = $('input#question6').val();
    var questionArray = [question1, question2, question3, question4, question5, question6];
    questionArray[1,0,2];
    var newArray = [];
    newArray.push(question2, question1, question3);

    $('.question1').text(question1);
    $('.question2').text(question2);
    $('.question3').text(question3);
    $('.question4').text(question4);
    $('.question5').text(question5);
    $('.question6').text(question6);

    $('#answers').show();

    event.preventDefault();
  });
});
