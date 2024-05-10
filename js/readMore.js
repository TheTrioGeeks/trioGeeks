// Wait for the page to finish loading
window.addEventListener('load', function() {
    // Function to update class based on viewport width
    function updateClassBasedOnWidth() {
        // Get the viewport width
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
        // Check if viewport width is less than or equal to a mobile device width (e.g., 768px)
        if (viewportWidth <= 768) {
            // Change class
            document.getElementById('aboutUsSection').classList.remove('px-5');
            document.getElementById('aboutUsSection').classList.remove('pt-5');
            document.getElementById('aboutUsSection').classList.remove('pb-3');
            document.getElementById('aboutUsSection').classList.add('px-3');
            document.getElementById('aboutUsSection').classList.add('pt-3');
            document.getElementById('aboutUsSection').classList.add('pb-1');
        } else {
            // Revert back to original class if viewport width is larger than mobile width
            document.getElementById('aboutUsSection').classList.remove('px-3');
            document.getElementById('aboutUsSection').classList.remove('pt-3');
            document.getElementById('aboutUsSection').classList.remove('pb-1');
            document.getElementById('aboutUsSection').classList.add('px-5');
            document.getElementById('aboutUsSection').classList.add('pt-5');
            document.getElementById('aboutUsSection').classList.add('pb-3');
        }
    }
  
    // Initial call to update class based on page load
    updateClassBasedOnWidth();
  
    // Add event listener for window resize
    window.addEventListener('resize', updateClassBasedOnWidth);
});