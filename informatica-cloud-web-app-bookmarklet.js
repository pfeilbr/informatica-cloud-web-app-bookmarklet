(function() {
    var sel = document.getElementById('InfPageSz');
    if (sel == null) {
        return;
    }
    var opt = document.createElement('option');
    opt.setAttribute('value', '999');
    opt.appendChild(document.createTextNode('999'));
    sel.appendChild(opt);
})();
