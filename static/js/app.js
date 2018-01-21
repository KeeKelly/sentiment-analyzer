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
           console.log(data);
       }).fail(function() {
           console.log('Called failed.');
       });
   });
});