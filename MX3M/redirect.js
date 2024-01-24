// Get the current hostname
var currentHostname = <link>window.location.hostname</link>;

// Create a dynamic link to the homepage
var homepageLink = document.createElement('a');
homepageLink.href = '//' + currentHostname; // Use "//" to ensure the link works with both http and https
homepageLink.textContent = 'Homepage';

// Append the link to a specific element in the HTML document
document.getElementById('yourElementId').appendChild(homepageLink);
