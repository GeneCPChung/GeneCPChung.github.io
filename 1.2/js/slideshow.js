$("#lib-slides > div:gt(0)").hide();

setInterval(function() { 
  $('#lib-slides > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#lib-slides');
},  3000);













/*
var images = ["../images/dcdl-orange.jpg", "../images/dcdl-main.jpg", "../images/dcdl-powel.jpg", "../images/dcdl-ostrander.jpg"];
	


        $(function () {
            var i = 0;

            $("#dvImage").css("background", "url(images/" + images[i] + ")");
  
 			        
             setInterval(function () {
                i++;
                if (i == images.length) {
                    i = 0;
                }
                $("#dvImage").fadeOut("slow", function () {
                    
                    $(this).css("background", "url(images/" + images[i] + ")");
                     $(this).fadeOut("slow"),
                    $(this).fadeIn("slow");
                });
            }, 3000);
        });
*/
/*
$('#dvImage').height($(window).height()); //resize image

	content: "";
	display: block;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}


/*
// library branches slideshow
var Image_slide = new Array("../images/dcdl-powel.jpg", "../images/dcdl-main.jpg");// image container
var Img_Length  = Image_slide.length; // container length - 1
var Img_current = 0

function slide() {
    if(Img_current >= Img_Length) {
        Img_current = 0;
    }
    document.slideshow.src = Image_slide[Img_current];
    Img_current++;
}
function auto(){
    setInterval(slide, 1000);
}
window.onload = auto;*/