$(document).ready(function() {
    let currentSlide = 1;
    const totalSlides = $('.slide').length;

    // Function to display the selected slide
    function showSlide(index) {
        // Hide all slides
        $('.slide').hide();
        // Show the selected slide
        $('.slide').eq(index - 1).show();
        // Update the current slide variable
        currentSlide = index;
    }
    
    // Show the first slide by default
    showSlide(currentSlide);

    // Click on a thumbnail to navigate to that slide
    $('.thumbnail').click(function() {
        const slideIndex = $(this).data('slide');
        showSlide(slideIndex);
    });

    // Auto slide every 3 seconds
    setInterval(function() {
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }
        showSlide(currentSlide);
    }, 3000);
});
