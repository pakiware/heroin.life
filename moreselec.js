// Prevent right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevent F12 and Ctrl+Shift+I (common DevTools shortcuts)
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        alert('DevTools are disabled!');
    }
});
