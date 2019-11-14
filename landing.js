var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
// Line
c.beginPath();
c.moveTo(100, 200);
c.lineTo(195, 200);
c.strokeStyle = 'blue'
c.stroke();