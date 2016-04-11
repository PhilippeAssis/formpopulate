/**
 * Form Populate - Create by Philippe Assis
 * www.philippeassis.com
 */

(function ($) {
    'use strict';
    $.fn.formPopulate = function (data) {
        var inputs = $(this).find('select,input,textarea');

        if (inputs.length > 0) {
            for (var i = 0; inputs.length >= i; i++) {
                var input = $(inputs[i]);
                var name = input.attr('name');


                if (data[name] != undefined) {
                    var dataValue = data[name];

                    if (input.is('input')) {
                        switch (input.attr('type')) {
                            case 'checkbox':
                                input.prop('checked', dataValue);
                                break;
                            case 'radio':
                                input.prop('checked', (dataValue == input.attr('value') ? true : false));
                                break;
                            case 'text':
                                input.val(dataValue);
                                break;
                        }
                    }
                    else if (input.is('select')) {
                        $("option", input).each(function () {
                            $(this).attr('selected', ($(this).val() === dataValue));
                        })
                    }
                    else if (input.is('textarea')) {
                        input.val(dataValue);
                    }
                }
            }
        }
    }
})(jQuery);
