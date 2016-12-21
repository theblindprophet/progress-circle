$(document).ready(function() {
    var options = {
        width: "300px",
        line_width: 12,
        color: "#b20808",
        starting_position: 25,
        percent: 25,
        text: "percent"
    }
    var progress_circle = $("#progress-circle").gmpc(options);
    progress_circle.gmpc('animate', 80, 3000);
});
