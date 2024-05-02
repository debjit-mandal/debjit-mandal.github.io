// ui.js
$(document).ready(function() {
    $('.button.green').click(function() {
        $('.terminal-window').toggleClass('fullscreen');
    });

    $('.button.yellow').click(function() {
        $('.terminal-window').toggleClass('minimized');
    });

    $('.button.red').click(function() {
        $('.terminal-window').hide(); // Or another appropriate action
    });
});
