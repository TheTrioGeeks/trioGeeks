window.addEventListener('resize', function() {
    if (window.innerWidth <= 576) {
        document.getElementById('quote').classList.remove('col', 'quoteForest');
        document.getElementById('quote').classList.add('z-3', 'position-absolute', 'bottom-0', 'start-50', 'translate-middle-x', 'p-4', 'rounded-3', 'quoteForest');
        document.getElementById('quote').style.width = '100%';
    } else if (window.innerWidth <= 767) {
        document.getElementById('quote').classList.remove('col');
        document.getElementById('quote').classList.add('z-3', 'position-absolute', 'bottom-0', 'start-40', 'translate-middle-x', 'p-4', 'rounded-3', 'quoteForest');
        document.getElementById('quote').style.width = '80%';
    } else {
        document.getElementById('quote').classList.add('col', 'quoteForest');
        document.getElementById('quote').classList.remove('z-3', 'position-absolute', 'bottom-0', 'start-40', 'translate-middle-x', 'p-4', 'rounded-3', 'quoteForest');
        document.getElementById('quote').style.width = '';
    }
});
// Initialize on page load
if (window.innerWidth <= 576) {
    document.getElementById('quote').classList.remove('col', 'quoteForest');
    document.getElementById('quote').classList.add('z-3', 'position-absolute', 'bottom-0', 'start-50', 'translate-middle-x', 'p-4', 'rounded-3', 'quoteForest');
    document.getElementById('quote').style.width = '100%';
} else if (window.innerWidth <= 767) {
    document.getElementById('quote').classList.remove('col');
    document.getElementById('quote').classList.add('z-3', 'position-absolute', 'bottom-0', 'start-40', 'translate-middle-x', 'p-4', 'rounded-3', 'quoteForest');
    document.getElementById('quote').style.width = '80%';
} else {
    document.getElementById('quote').classList.add('col', 'quoteForest');
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the aboutUs element
    var aboutUs = document.getElementById("forestStory");
  
    // Check if the device is mobile
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Split the content into sentences
        var sentences = aboutUs.textContent.trim().split(/[.?!\n]/);
  
        // Display the first two sentences followed by "Continue reading" link
        aboutUs.innerHTML = sentences.slice(0, 1).join('. ') + '. <span id="moreContent" style="display:none;">' + sentences.slice(1).join('. ') + '</span><a href="#" id="readMoreLink" class="primaryLink"> Continue reading</a>';
  
        // Toggle the full content on link click
        var readMoreLink = document.getElementById("readMoreLink");
        var moreContent = document.getElementById("moreContent");
  
        readMoreLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            moreContent.style.display = moreContent.style.display === 'none' ? 'inline' : 'none';
            readMoreLink.textContent = moreContent.style.display === 'none' ? ' Continue reading' : 'Show less';
        });
    }
});