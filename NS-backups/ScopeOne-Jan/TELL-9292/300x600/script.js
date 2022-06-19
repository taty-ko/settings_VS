//////////////////////
// LEMONPI CALLBACK //
//////////////////////

// Set values from LemonPI Manage-r

lemonpi.subscribe(function callback(content) {
  // PLACEHOLDER SETTINGS
  // All text
  console.log(content);
  $(".text1").html(content.text1.value);
  $(".text2").html(content.text2.value);
  $(".text3").html(content.text3.value);
  $(".btnText").html(content.btnText.value);


  // All images
  creative_container
  $(".price").css("background-image", "url(" + content.price.value + ")");
  $(".cloud").css("background-image", "url(" + content.cloud.value + ")");
  $(".train").css("background-image", "url(" + content.train.value + ")");
  $(".logo").css("background-image", "url(" + content.logo.value + ")");
  $(".logoWhite").css("background-image", "url(" + content.logoWhite.value + ")");
  $(".gifSecond").css("background-image", "url(" + content.gifSecond.value + ")");


  // All videos
  $('.videoFirst').append('<video muted autoplay="autoplay" style="height:600px;" src="' + content.videoFirst.value + '"></video>');
  
/*   setTimeout(function () {
    $('.videoSecond').append('<video muted autoplay="autoplay" style="width:400px;" src="' + content.videoSecond.value + '"></video>');
  }, 7700);
 */


  // CLICKOUT SETTINGS
  // Element for clickout
  var selector = document.getElementById("click");

  // On click function
  selector.onclick = function () {
    return window.dispatchEvent(
      // Call lemonpi function
      new CustomEvent("lemonpi.interaction/click", {
        detail: {
          // Current placeholder name of url
          placeholder: "clickUrl",
          query: {},
        },
      })
    );
  };
});