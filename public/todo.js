/* javascript for the todo controller */
$(document).ready(function() {
  $("#thebutton").click(function() {
    $.ajax(
      {
        url: "<%= todo_path(@todo, :format => :js) -%>",
        complete: function(data, textStatus, xhr) {
          alert("hi it worked");
          todo = eval(data.responseText);

          alert( todo.route() );

        }
      });
    return false;
  })
});
