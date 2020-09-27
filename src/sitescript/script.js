
$(function () {
  console.log('Ejecucion script personal.');
  // $('.chart').data('easyPieChart').update(40);
  $('.chart').easyPieChart({
    easing: 'easeInOut',
    barColor: '#5882FA',
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function (from, to, percent) {
      console.log('On step.');
      $(this.el).find('.percent').text(Math.round(percent))
    }
  })
});

// var skillsTopOffset = $(".skillsSection").offset().top
// var statsTopOffset = $(".skillsSection").offset().top
// var caountUpFinished = false

// $(window).scroll(function () {
//   if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
//     $('.chart').easyPieChart({
//       easing: 'easeInOut',
//       barColor: '#5882FA',
//       trackColor: false,
//       scaleColor: false,
//       lineWidth: 4,
//       size: 152,
//       onStep: function (from, to, percent) {
//         $(this.el).find('.percent').text(Math.round(percent))
//       }
//     });
//   }
// })
