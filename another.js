var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
// Line
c.beginPath();
c.moveTo(100, 70);
c.lineTo(195, 70);
c.strokeStyle = 'gold'
c.stroke();
// Line
c.beginPath();
c.moveTo(100, 99);
c.lineTo(195, 99);
c.strokeStyle = 'gold'
c.stroke();
$(document).ready(function(){
    // Activate the Carousel, but pause it from the start
//   $("#myCarousel").carousel("pause");
// $('[test="123"]').tooltip(); // 
  $(".carousel").carousel("cycle");
        
  // Click on the button to start sliding 
//   $("#myBtn").click(function(){
//     $("#myCarousel").carousel("cycle");
//   });
//   // Click on the button to stop sliding 
//   $("#myBtn2").click(function(){
//     $("#myCarousel").carousel("pause");
//   });
    
//   // Enable Carousel Indicators
//   $(".item1").click(function(){
//     $("#myCarousel").carousel(0);
//   });
//   $(".item2").click(function(){
//     $("#myCarousel").carousel(1);
//   });
//   $(".item3").click(function(){
//     $("#myCarousel").carousel(2);
//   });
    
  // Enable Carousel Controls
//   $(".carousel-control-prev").click(function(){
//     $("#myCarousel").carousel("prev");
//   });
//   $(".carousel-control-next").click(function(){
//     $("#myCarousel").carousel("next");
//   });
});
