$(document).ready(function() {
  
  var quote;
  var author;
  
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        $('#quote').text(quote);
        author = response.quoteAuthor;
        if(author) {
          $('#author').text('- ' + author);
        } else {
          $('#author').text('- Unknown')
        }
      }
    });
  }
  getNewQuote();
  
  $('#next').on('click', function(e) {
    e.preventDefault();
    getNewQuote();
  });
  
  $('#tweet').on('click', function(e) {
    e.preventDefault();
    window.open('https://www.twitter.com/intent/tweet?text="' + encodeURIComponent (quote) + '" - ' + (author));
  });
});