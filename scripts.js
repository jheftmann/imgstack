$(document).ready(function(){

  var imgStack = function() {

    var container = $('.img-stack');
    var images = $('.img-stack img');
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

  	// vertically center the wrapper
    var verticalOffset = (windowHeight - $(container).height()) / 2;
    if ($(container).hasClass('is-centered')) {
      $(container).css('margin-top', verticalOffset);
    } else {}

  	// position the images
    $(images).css('position', 'absolute');

    var imgCount = images.length;
    var imgHorizontalOffset = windowWidth / imgCount;

    console.log('imgCount' + imgCount);
    console.log('imgHorizontalOffset' + imgHorizontalOffset);

    $(images).each(function(i){

      var imgPosition = i;
      var zIndex = i + 999;

      console.log('imgPosition' + imgPosition);

      $(this).css('margin-left', imgHorizontalOffset * imgPosition);
      $(this).css('z-index', zIndex);

      // add vertical offset and rotation
      var verticalOffsetMax = 50;
      var rotationMax = 3;
      var rotation = Math.ceil(Math.random() * rotationMax);
      var imgVerticalOffset = Math.ceil(Math.random() * verticalOffsetMax);

      console.log('rotation' + rotation);

      if ($(container).hasClass('is-messy')) {
        $(this).css('-webkit-transform', 'rotate(' + rotation + 'deg)');
        $(this).css('margin-top', imgVerticalOffset);
      } else {}

    });

    $(window).resize(function(){
      imgStack();
    });


  }

  imgStack();

});
