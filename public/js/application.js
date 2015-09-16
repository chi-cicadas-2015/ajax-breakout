$(document).ready(function() {

  $(".tab").on("click", function(event){
    event.preventDefault();

    $(".tab").removeClass("active");
    $(".container div").hide();

    var $tab = $(this);

    var link = $tab.children()[0];
    var href = $(link).attr("href");

    $.ajax({
      url: "/things",
      dataType: "json",
      success: function(response) {
        $(href).text(response.text);
        $(href).show();
        $tab.addClass("active");
      }
    });
  })

});

