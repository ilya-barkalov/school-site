// При пролистывание страницы вызывает функцию scollFunction()
$(window).scroll(() => {
    scrollFunction();
});

// Функция отображение кнопки "на верх"
// Если страница не была пролистана, то кнопка не отображается, иначе отображается
function scrollFunction() {
    if ($(document.body).scrollTop() > 20 || $(document.documentElement).scrollTop() > 20) {
        $("#btnScrollUp").css("display","block");
    } else {
        $("#btnScrollUp").css("display","none");
    }
}

// Пролистывание страницы на верх, при нажатие на кнопку
function topFunction() {
    document.body.scrollTop = 0; // Для Safari, Chrome
    document.documentElement.scrollTop = 0; // Для Firefox, IE и Opera
}


$(document).ready(() => {
    // Показываем следующие или предыдущие слайды при нажатие на одну из кнопок
    $('.next').click(function () { $('.carousel').carousel('next'); return false; });
    $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

    // Проверяем была ли пролистана страница, при перезагрузке страницы
    scrollFunction();
});
