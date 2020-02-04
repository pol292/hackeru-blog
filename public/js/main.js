const URL = $('meta[name="url"]').attr('content');  /* Get url form meta url */

/**
 *  init all method for any pages in exsits suport for this page
 */
function init() {
    /*
        set global ajax csrf token
     */
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    let arr = [
        {func: create_post, ele: '#create_post'}
    ];
    for (let obj of arr) {
        if ($(obj.ele).length) {
            obj.func();
        }
    }
}

/**
 * For url
 * @param $url
 * @returns {string}
 */
function url($url) {
    return URL + '/' + $url;
}

/**
 *
 * @param ele
 * @param success
 * @param error
 */
function ajax(ele, success, error = function () {
}) {
    if ($(ele).valid()) { // validate form before send ajax

        /*
        set default method or from data-method or method or get
         */
        let method = 'get';
        if ($(ele).data('method')) {
            method = $(ele).data('method')
        } else if ($(ele).attr('method')) {
            method = $(ele).attr('method')
        }

        $.ajax({
            url: $(ele).attr('action'),
            data: $(ele).serialize(),
            dataType: $(ele).data('data-type') ? $(ele).data('data-type') : 'json', // default data json
            method: method,
            success: success,
            error: error,
        });
    }
}

/**
 * method for create post page and form
 */
function create_post() {
    $('#create_post').on('submit', function (e) {
        e.preventDefault();
        //toastr lib for popup massages error success and more
        ajax(this, function (json) {
            toastr.success('yay');
        }, function (error) {
            toastr.error(error.responseJSON.message);
        });
    }).validate({  // create validation for form
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


/*
start run the project js
 */
init();
