//
//$(window).ready(function () {
//     arr = document.getElementsByClassName('box_item')
//     index = arr[0]
//    if (index = "0") {
//        $(document).on('click', '.arrow_right', function () {
//            $(arr[index]).addClass('change').siblings().removeClass('change change_rev'), index++
//        })
//        $(document).on('click', '.arrow_left', function () {
//            $(arr[index - 2]).addClass('change_rev').siblings().removeClass('change_rev change'), index--
//        })
//        return false;
//    }
//})



$(document).on("click", '.arrow_right', function(e) {
    var active = $('.slider').find('.change');
    var activeIndex = active.length
    active.removeClass('change');
    active.next().addClass('change');   
});
$(document).on("click", ".arrow_left", function(e) {
    var active = $('.slider').find('.change');
    active.removeClass('change');
    active.prev().addClass('change');
});