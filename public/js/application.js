$(document).ready(function() {

  $("form").on("submit", function(event){
    event.preventDefault();

    var $form = $(this);

    var formData = $(this).serialize();

    $.ajax({
      url: "/things",
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
});

