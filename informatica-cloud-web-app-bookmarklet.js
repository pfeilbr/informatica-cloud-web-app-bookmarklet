(function() {
    
    var searchInputElement = document.getElementById('taskName');
    
    if (searchInputElement) {
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
    }
    
    var sel = document.getElementById('InfPageSz');
    if (sel) {
        var pageSizeValue = '999';
        var opt = document.createElement('option');
        opt.setAttribute('value', pageSizeValue);
        opt.appendChild(document.createTextNode(pageSizeValue));
        sel.appendChild(opt);
        sel.value = pageSizeValue;
        pnPages.onchangeSize('showDSSTasksPage');
    }
})();
