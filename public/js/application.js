// What is AJAX?

// How does it talk to the server?

/*********************************

  1. what you are interacting with to make the event fire (link, form submission, li, div)
    a. Is that thing there when the page loads or is it there later?  (event delegation)
  2. what event are you trapping?
  3. do you need to prevent a default behavior?
  4. what data do you need to prepare? do you need to send any?
  5. make the ajax call
     a. what is the method - GET/POST, etc
     b. what controller route you are hitting
      - (ruby) controller is receiving the data properly (logger.info)
        - (ruby) do the appropriate action (save, get a template, etc)
        - (ruby) return the appropriate thing (template, json, etc)
     c. what happens on success/done
        - what data did I get back? (console.log the response)
        - modify the current page with the data, figure out where to put it.
     d. what happens on error/fail
        - what data did I get back? (console.log the response)
        - modify the current page with the error message, figure out where to put it.

**********************************/

$(document).ready(function() {

  $(".container > a").on("click", function(event){
    event.preventDefault();
    $("#create_saying").toggle();
    $(this).toggle();
  });

  $("form").on("submit", function(event){
    event.preventDefault();

    var data = $(this).serialize();
    var url = $(this).attr("action");

    var request = $.ajax({
      method: "POST",
      url: url,
      data: data
    });

    request.done(function(response) {
      $(".sayings ul").prepend(response);
    });

    request.fail(function(response){

      console.log(response.responseText);
    })

  });

  $(".sayings").on("click", "li", function(){
    console.log("clicked")
  });
});


















































// $("form").on("submit", function(event){
//     event.preventDefault();
//     var $form = $(this);
//     var formData = $form.serialize();

//     $.ajax({
//       url: $form.attr("action"),
//       data: formData,
//       method: $form.attr("method"),
//       success: function(response) {
//         $(".sayings ul").prepend(response);
//         $form.trigger("reset");
//         $(".error").remove();
//       },
//       error: function(response) {
//         console.log(response);
//         // var h4 = $("<h4>").attr("class")
//         $form.append("<h4 class='error'>Ooops, that failed</h4>");
//       }
//     });
//   });

//   $(".sayings ul").on("click", "li", function(){
//     var id = $(this).attr("id");

//     $.ajax({
//       url: "/sayings/" + id + "/edit",
//       success: function(response) {
//         $("#edit_saying").html("<div id=''><span>" + response + "</span></div>");
//       }
//     });
//   });

//   $("#edit_saying").on("submit", "form", function(event){
//     event.preventDefault();

//     var $form = $(this)
//     var form_data = $form.serialize();
//     var url = $form.attr("action");
//     var id = url.split("/")[2];  //easiest way to parse that url string I could think of
//     var text = $($form.children()[0]).val();

//     $.ajax({
//       url: url,
//       method: "put",
//       data: form_data,
//       success: function() {
//         $("#edit_saying").empty();
//         $("#" + id).text(text);
//       },
//       error: function() {
//         $form.append("<h4 class='error'>Ooops, that failed</h4>");
//       }
//     })
//   });





























































// $("form").on("submit", function(event){
//     event.preventDefault();

//     var $form = $(this);

//     var formData = $(this).serialize();

//     $.ajax({
//       url: "/sayings",
//       type: "POST",
//       data: formData,
//       success: function(response) {
//         $(".sayings ul").prepend(response);
//         $form.trigger("reset");
//         $(".error").remove();
//       },
//       error: function(response) {
//         $form.append("<h4 class='error'>Ooops, that failed</h4>");
//       }
//     });

//     console.log("I am happening before success");
//   });








