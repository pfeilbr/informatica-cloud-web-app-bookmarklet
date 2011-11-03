(function() {
    
    var searchInputElement = document.getElementById('taskName');
    searchInputElement.addEventListener('keydown', function() {
        var query = searchInputElement.value;
        var rows = document.querySelectorAll('table.InfPane div.InfList div.body table tbody tr');
        console.log('query = ' + query);
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i];
            
            var regex = new RegExp(query, 'igm')
            if ( row.textContent.match(regex) ) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
        
    }, false);
    
    var sel = document.getElementById('InfPageSz');
    if (sel == null) {
        return;
    }
    var opt = document.createElement('option');
    opt.setAttribute('value', '999');
    opt.appendChild(document.createTextNode('999'));
    sel.appendChild(opt);
})();
