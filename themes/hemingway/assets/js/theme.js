let buttons = document.querySelectorAll('.js-theme');
let body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let toTheme = body.classList.contains('theme-dark')
            ? '#dark'
            : '#light';
        body.classList.toggle('theme-dark');
        if (e.target.nodeName == 'svg') {
            e.target.querySelector('use').setAttribute('xlink:href', toTheme);
        } else {
            e.target.setAttribute('xlink:href', toTheme);
        }
    });
});
