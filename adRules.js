// Refined selectors for ads
const adSelectors = [
    // Ads in iframes
    'iframe[src*="ads"]',
    'iframe[src*="googlesyndication.com"]',
    'iframe[src*="doubleclick.net"]',
    
    // Specific ad-related elements
    '[id^="ad-slot"]',
    '[class*="ad-container"]',
    '[id*="ad-container"]',
    '[class*="sponsored"]',
    '[class*="advertisement"]',
    
    // Common ad providers
    'div[data-ad]',
    '[id*="google_ads"]',
    '.adsbygoogle',
    
    // YouTube-specific ad elements
    'ytd-player-ads-renderer',
    '.ytp-ad-module',
    '.video-ads',
    
    // Sticky banners
    '.sticky-ad',
    '.banner-ad',
];
