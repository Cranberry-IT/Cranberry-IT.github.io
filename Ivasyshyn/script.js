
var imgs = ["image/img_1.png","image/img_2.png","image/img_3.png","image/img_4.png"];
var n=0;
time=800;
play=setInterval("chgImg(0)", 4000);

function chgImg(number) {
if (number!=0) n=number-2;
 $('#slide_show').fadeOut(time, function() {    //для картинок
  $(this).attr('src', imgs[n]).fadeIn(time);
 });

n++;
if (n>=imgs.length) n=0;
}
