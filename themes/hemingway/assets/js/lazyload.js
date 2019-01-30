import throttle from 'lodash.throttle';

var lazy = [];

function setLazy() {
    lazy = document.getElementsByClassName('lazy');
    // console.log('Found ' + lazy.length + ' lazy images');
}

function lazyLoad() {
    for (var i = 0; i < lazy.length; i++) {
        var item = lazy[i];

        if (isInViewport(item)) {
            if (item.getAttribute('data-src') && !item.querySelector('img')) {
                var img = document.createElement('img');
                img.setAttribute('src', item.getAttribute('data-src'));
                img.setAttribute('srcset', item.getAttribute('data-srcset'));
                img.setAttribute('alt', item.getAttribute('data-alt'));
                img.setAttribute('sizes', item.getAttribute('data-sizes'));
                item.appendChild(img);

                img.addEventListener('load', function() {
                    this.classList.add('lazy-loaded');
                });
            }
        }
    }
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func);
    } else {
        window.attachEvent('on' + event, func);
    }
}

// If you want to debounce it for performance reasons then use this for the
// event listener. This waits until the scroll finishes though.
var debounceLazyLoadFn = throttle(function() {
    lazyLoad();
}, 300);

registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', debounceLazyLoadFn);
registerListener('resize', lazyLoad);

export default lazyLoad;
