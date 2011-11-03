javascript: function icwab1() {
    var d = document,
    z = d.createElement('scr' + 'ipt'),
    b = d.body,
    l = d.location;
    try {
        if (!b) throw (0);
        d.title = '(Loading...) ' + d.title;
        z.setAttribute('src', l.protocol + '//raw.github.com/pfeilbr/informatica-cloud-web-app-bookmarklet/master/informatica-cloud-web-app-bookmarklet.js?u=' + encodeURIComponent(l.href) + '&t=' + (new Date().getTime()));
        b.appendChild(z);
    } catch(e) {
        alert('Please wait until the page has loaded.');
    }
}
icwab1();
void(0)
