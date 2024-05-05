$(document).ready(function() {
    $('#datasetForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = $(this).serialize(); // Serialize form data
        var url = "/"; // Use direct endpoint for AJAX request

        // AJAX request to Flask server
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            success: function(response) {
                // Display the plot on the webpage
                $('#plotContainer').html(response);
            },
            error: function() {
                alert('Error fetching data'); // Show alert if error occurs
            }
        });
    });
});
