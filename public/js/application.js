$(document).ready(function() {

  $("form").on("submit", function(event){
    event.preventDefault();

    var $form = $(this);

    var formData = $(this).serialize();

    $.ajax({
      url: "/sayings",
      type: "POST",
      data: formData,
      success: function(response) {
        $(".sayings ul").prepend(response);
      },
      error: function(response) {
        $form.append("<h4>Ooops, that failed</h4>");
      }
    });

    console.log("I am happening before success");
  });


  // $(".sayings li").on("click", function(){
  //   var id = $(this).attr("id");
  //   $.ajax({
  //     url: "/sayings/" + id,
  //     dataType: 'json',
  //     success: function(response) {
  //       $("#saying").text(response.text);
  //     }
  //   });
  // });

  $(".sayings li").on("click", function(){
    var id = $(this).attr("id");

    $.ajax({
      url: "/sayings/" + id + "/edit",
      success: function(response) {
        $("#edit_saying").html(response);
      }
    });
  });

  $("#edit_saying").on("submit", "form", function(event){
    event.preventDefault();

    var $form = $(this)
    var form_data = $form.serialize();
    var url = $form.attr("action");
    var id = url.split("/")[2];  //easiest way to parse that url string I could think of
    var text = $($form.children()[0]).val();

    $.ajax({
      url: url,
      method: "put",
      data: form_data,
      success: function() {
        $("#edit_saying").empty();
        $("#" + id).text(text);
      },
      error: function() {
        $form.append("<h4>Ooops, that failed</h4>");
      }
    })
  });
});



/*********************************

  1. what you are interacting with to make the event fire
  2. do you need to prevent a default behavior
  3. what data do you need to prepare
  4. make the ajax call
     - what is the method - GET/POST, etc
     - route you are hitting
      - controller is receiving the data properly (logger.info)
      - do the appropriate action (save, get a template, etc)
      - return the appropriate thing (template, json, etc)
     - what happens on success/done
        - what data did I get back?
        - modify the current page with the data, figure out where to put it.
     - what happens on error/fail
**********************************/

