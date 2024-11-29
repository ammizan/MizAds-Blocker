// Function to block ads based on selectors
function blockAds() {
    adSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
            // Ensure we're not targeting critical elements
            if (!isCriticalElement(element)) {
                element.remove();
            }
        });
    });
}

// Function to protect critical elements
function isCriticalElement(element) {
    const criticalSelectors = ['header', 'video', 'main', '.important-section'];
    return criticalSelectors.some((critical) => element.closest(critical));
}

// Function to block YouTube ads without breaking video playback
function blockYouTubeAds() {
    const adModules = document.querySelectorAll('.ytp-ad-module, .video-ads');
    adModules.forEach((ad) => ad.style.display = 'none'); // Hide ads instead of removing
}

// Use MutationObserver to dynamically block ads
const observer = new MutationObserver(() => {
    blockAds();
    blockYouTubeAds();
});

// Observe changes in the DOM to handle dynamically loaded ads
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

// Initial call to block ads on page load
blockAds();
blockYouTubeAds();
