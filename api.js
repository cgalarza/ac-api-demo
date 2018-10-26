$(document).ready(function(){
  $.get( "https://academiccommons.columbia.edu/api/v1/search?department[]=National Center for Disaster Preparedness", function( data ) {
    console.log(data);
    $.each(data['records'], function(index, value) {
      var div = $("div")
      div.append( "<h1>" + value['title'] + "</h1>" )
      div.append( "<p>" + value['date'] + "</p>")
      div.append( "<p>" + value['author'] + "</p>")
      div.append("<p>" + value['persistent_url'] + "</p>")
      div.append("<hr>")
      $( ".result" ).append(div)
    });
  });
});
