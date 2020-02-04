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

function createErrorList(errors) {
    let $ul = document.createElement('ul');
    for (error in errors) {
        let $li = document.createElement('li');
        $li.innerText = errors[error];
        $ul.appendChild($li);
    }
    return $ul;
}

/**
 *
 * @param ele
 * @param success
 * @param error
 */
function ajax(ele, success, error) {

    if ($(ele).valid()) { // validate form before send ajax
        $('.loader').removeAttr('hidden');
        if (success == undefined) {
            success = function (response) {
                if (response.title) {
                    toastr.success(response.message, response.title);
                } else {
                    toastr.success(response.message);
                }
            }
        }

        if (error == undefined) {
            error = function (response) {
                let data = response.responseJSON;
                if (data.errors) {
                    let errors = createErrorList(data.errors);
                    toastr.error(errors, data.message);

                } else if (data.message) {
                    toastr.error(data.message);

                } else {
                    toastr.error('משהו הישתבש אנא נסה שוב מאוחר יותר');
                }
            }
        }
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
        }).done(function () {
            $('.loader').attr('hidden','hidden');
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
        ajax(this);
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
