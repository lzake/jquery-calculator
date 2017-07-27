$(document).ready(function() {
    $('span').on('click', function() {
        var text = $(this).text();
        var num = parseInt(text)
        if (text === num) {
            $('#screen').append(num);
        } else if (text === 'C') {
            $(text).hide(this);
            location.reload();
        } else if (text === '=') {} else if (text === 'x') {
            text = '*';
            $('#screen').append(text)
        } else if (text === '÷') {
            text = '/';
            $('#screen').append(text)
        } else {
            $('#screen').append(text)
        }
    })
    $('#equals').on('click', function() {
        var sum = 0;
        var screen = $('#screen').html();
        //var screenArr = screen.split('');
        $(this).each(function() {
            sum = eval(screen)
            if (sum === (NaN || undefined)) {
                $('#screen').text(ERROR);
            } else {
                $('#screen').html(sum)
            }
        })

    })

});