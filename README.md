# Grasp Mobile Progress Circle

### Author: Jamie Gross
### Company: Grasp Mobile Development, LLC
### Version: 1.0.0
### Date Modified: 21 December 2016

---

## Install and Use
---

Install:

`git clone https://github.com/theblindprophet/progress-circle.git`

Include CSS file: 

`<link rel="stylesheet" type="text/css" href="<some-path>/grasp_mobile_progress_circle-1.0.0.min.css">`

Include JS file: 

`<script src="<some-path>/grasp_mobile_progress_circle-1.0.0.min.js"></script>`

**Supported with jQuery 3.1.1 and greater.** 

**Not tested with lower versions.**

**jQuery needs to be loaded before `grasp_mobile_progress_circle-1.0.0.min.js` and `grasp_mobile_progress_circle-1.0.0.min.js` needs to loaded before other JavaScript files**

## Options
---

|Option|Description|
|---|---|
|color|Color of the bar (Default: `#0B2546`)|
|height|Height of the canvas, in `px` or `%` (Default: `200px`)|
|width|Width of the canvas, in `px` or `%` (Default: `200px`)|
|line_width|Width/thickness of the progress bar (Default: `8`)|
|starting_position|Starting point of the line on the circle in percentage. 0 = top, 25 = right, 50 = bottom, 75 = left (Default: `25`)|
|percent|How far to travel around the circle. 100 = entire circle, 50 = half circle (Default: `100`)|
|counter_clockwise|`true` = counter-clockwise, `false` = clockwise (Default: `false`)|
|text|Text to have inside the circle. `percent` will display the percentage the bar has traveled around the circle. Any other text will display that text inside the circle (Default: `percent`)|
|font_size|Font size of text inside circle (Default: `28px`)|
|font_family|Font family of text inside circle (Default: `Helvetica`)|

## How to Use
---

Pass in options:
```
var options = {
    width: "300px",
    line_width: 12,
    color: "#b20808",
    starting_position: 25,
    percent: 25,
    text: "percent"
}
var progress_circle = $("#progress-circle").gmpc(options);
```

## Extra Methods
---

`percent`: Change the percentage traveled

`progress_circle.gmpc('percent', <some-percentage>)`

```
var progress_circle = $("#progress-circle").gmpc(options);
progress_circle.gmpc('percent', 60);
```

---

`animate`: Animate a changing percentage

`progress_circle.gmpc('animate', <some-percentage>, <some-time>);`

```
var progress_circle = $("#progress-circle").gmpc(options);
progress_circle.gmpc('animate', 80, 3000);
```
**Animation will travel to \<some-percent> from what the progress circle was intialized with**

For example:

```
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
```

The bar will begin 25% traveled. Then it will trave to 80%.

---

## Pull Requests and Issues

Please feel free to submit pull requests and submit issues.
