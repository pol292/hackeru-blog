function init() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    let arr = [
        {fnc: create_post, ele: '#create_post'}
    ];
    for (let obj of arr) {
        run(obj.ele, obj.fnc);
    }
}

function run(ele, func) {
    if ($(ele).length) {
        func();
    }
}

/**
 * For url
 * @param $url
 * @returns {string}
 */
function url($url) {
    const URL = $('meta[name="url"]').attr('content');
    return URL + '/' + $url;
}

function create_post() {
    $('#create_post').on('submit', function (e) {
        e.preventDefault();
        if ($(this).valid()) {

            $.ajax({
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: 'json',
                method: 'post',
                success: function () {

                },
                error: function (error) {
                    //error.responseJSON.errors
                    toastr.error(error.responseJSON.message);
                },
            });

        }
    }).validate({
        rules: {
            title: {
                required: true,
            },
            description: {
                required: true,
            }
        }
    });
    ;
}


init();
