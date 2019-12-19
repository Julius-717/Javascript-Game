(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];


    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }
    
})