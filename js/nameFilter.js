'use strict'

app.filter('nameFilter', function($sce){
    function arrayConcat(arr){
        var ret = '';
        for (var i=1; i<arr.length; i++){
            ret += arr[i];
        }
        return ret;
    }

    return function(el){
        var ret = '';
        if (el.length > 1){
            var splitVar = el.split('');
            ret = splitVar[0] + '<sub>' + arrayConcat(splitVar) + '</sub>';
        }
        else {
            ret = el;
        }
        return $sce.trustAsHtml(ret);
    };
});