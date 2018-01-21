$(document).ready(function() {
   $('#go-btn').click(function() {
       var input = $('#sentiment-input').val();
       $.ajax({
           type: 'POST',
           url: '/get_sentiment',
           data: JSON.stringify({'input': input}),
           contentType: 'application/json; charset=utf-8',
           dataType: 'json'
       }).done(function(data) {
           var str = "<strong>Overall Score: " + data.compound + "</strong><br />"
           + "Negative Component: " + data.neg + "<br />"
           + "Neutral Component: " + data.neu + "<br />"
           + "Positive Component: " + data.pos;

           var output = $('#output');
           output.html(str);

           if (data.compound > 0) {
               output.removeClass('alert-danger');
               output.addClass('alert-success');
           } else if (data.compound < 0) {
               output.removeClass('alert-success');
               output.addClass('alert-danger');
           }
       }).fail(function() {
           console.log('Called failed.');
       });
   });
});