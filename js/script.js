
// 모바일메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu1 = document.querySelector('.toggle_menu1');
const menu2 = document.querySelector('.toggle_menu2');
// 클릭 될 때 마다 지정된 함수를 호출
toggleBtn.addEventListener('click', () => {
    // 마우스 클릭할 때 메뉴와 아이콘의 클래스가 없다면 추가, 있다면 제거
    menu1.classList.toggle('active');
    menu2.classList.toggle('active');
});


// $(window).ready(function(){
//     $("#product ul li").on('mouseover',function(){
//         $("#product_img").addClass('rotate-x');
//     });
//     $('#product_img').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
//             $(this).removeClass();
//     });
// });

// fixed_group
$('#btn_top').hide();
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#btn_top').fadeIn()
  } else {
    $('#btn_top').fadeOut()
  }
});
$('#btn_top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});