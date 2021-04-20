var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyzw3qiVFHH04rPN3T4A6C_GSdlHrwQj-MPegKADfMo4GBqe8RGYYiT_OPsF26YGHYk/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})