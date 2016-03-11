
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address;
    var bgImgHtml = '<img class="bgimg" src="' + streetviewUrl + '">';

    $body.append(bgImgHtml);

    // Your NYTimes AJAX request goes here
    var nytimesApiKey = "3cedc651cbc41cd7f1c5f86b8cf835fd:12:74652497";
    var nytimesSearchUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?[q=" + cityStr + "&soft=newest]&api-key=" + nytimesApiKey;
    $.getJSON(nytimesSearchUrl, function (data) {
      console.log(data);
      $nytHeaderElem.text('New York Times Articles About ' + cityStr);

      var items = [];
      $.each(data.response.docs, function(key, val) {
        console.log(key);
        console.log(val);
        items.push("<l1 id='nytimes-articles'>" +
        "<a href='" + val.web_url + "'>" + val.headline.main + "</a>" +
        "<p>" + val.snippet + "</p>" +
        "</li>");
      });

      $nytElem.append(items);

      // $( "<ul/>", {"class": "my-new-list", html: items.join( "" )}).appendTo($nytElem);

    }).error(function() {
      $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });

    // Your Wikipedia request goes here
    var wikiRequestTimeout = setTimeout(function(){
      $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + cityStr + '&format=json&callback=wikiCallback';

    $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      // jsonp: "callback",
      success: function(response) {
        var articleList = response[1];

        for (var i = 0; i < articleList.length; i++) {
          articleStr = articleList[i];
          var url = 'http://en.wikipedia.org/wiki/' + articleStr;
          $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
        }

        clearTimeout(wikiRequestTimeout);
      }
    })

    return false;
};

$('#form-container').submit(loadData);
