// part 1
'use strict';
function updateList(that) {
    if (!that) {
        return;
    }
    var lastValue = that.lastValue,
        value = that.value,
        array = [],
        pos = value.indexOf('|'),
        start = that.selectionStart,
        end = that.selectionEnd,
        options;

    if (that.options) {
        options = that.options;
    } else {
        options = Object.keys(that.list.options).map(function (option) {
            return that.list.options[option].value;
        });
        that.options = options;
    }

    if (lastValue !== value) {
        that.list.innerHTML = options.filter(function (a) {
            return ~a.toLowerCase().indexOf(value.toLowerCase());
        }).map(function (a) {
            return '<option value="' + value + '|' + a + '">' + a + '</option>';
        }).join();
        updateInput(that);
        that.lastValue = value;
    }
}

function updateInput(that) {
    if (!that) {
        return;
    }
    var value = that.value,
        pos = value.indexOf('|'),
        start = that.selectionStart,
        end = that.selectionEnd;

    if (~pos) {
        value = value.slice(pos + 1);
    }
    that.value = value;
    that.setSelectionRange(start, end);
}

document.getElementsByTagName('input').browser.addEventListener('keyup', function (e) {
    updateList(this);
});
document.getElementsByTagName('input').browser.addEventListener('input', function (e) {
    updateInput(this);
});

`<input list="browsers" name="browser" id="browser" onkeyup="updateList();" oninput="updateInput();">
<datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
</datalist>`

//part 2
'use strict';
var datalist = {
        r: ['ralph', 'ronny', 'rudie'],
        ru: ['rudie', 'rutte', 'rudiedirkx'],
        rud: ['rudie', 'rudiedirkx'],
        rudi: ['rudie'],
        rudo: ['rudolf'],
        foo: [
            { value: 42, text: 'The answer' },
            { value: 1337, text: 'Elite' },
            { value: 69, text: 'Dirty' },
            { value: 3.14, text: 'Pi' }
        ]
    },
    SEPARATOR = ' > ';

function updateList(that) {
    var lastValue = that.lastValue,
        value = that.value,
        array,
        key,
        pos = value.indexOf('|'),
        start = that.selectionStart,
        end = that.selectionEnd;

    if (lastValue !== value) {
        if (value !== '') {
            if (value in datalist) {
                key = value;
            } else {
                Object.keys(datalist).some(function (a) {
                    return ~a.toLowerCase().indexOf(value.toLowerCase()) && (key = a);
                });
            }
        }
        that.list.innerHTML = key ? datalist[key].map(function (a) {
            return '<option data-value="' + (a.value || a) + '">' + value + (value === key ? '' : SEPARATOR + key) + SEPARATOR + (a.text || a) + '</option>';
        }).join() : '';
        updateInput(that);
        that.lastValue = value;
    }
}

function updateInput(that) {
    var value = that.value,
        pos = value.lastIndexOf(SEPARATOR),
        start = that.selectionStart,
        end = that.selectionEnd;

    if (~pos) {
        value = value.slice(pos + SEPARATOR.length);
    }
    Object.keys(that.list.options).some(function (option) {
        var o = that.list.options[option],
            p = o.text.lastIndexOf(SEPARATOR);
        if (o.text.slice(p + SEPARATOR.length) === value) {
            value = o.getAttribute('data-value');
            return true;
        }
    });
    that.value = value;
    that.setSelectionRange(start, end);
}

document.getElementsByTagName('input').xx.addEventListener('keyup', function (e) {
    updateList(this);
});
document.getElementsByTagName('input').xx.addEventListener('input', function (e) {
    updateInput(this);
});

`<input list="xxx" name="xx" id="xx">
<datalist id="xxx" type="text"></datalist>`