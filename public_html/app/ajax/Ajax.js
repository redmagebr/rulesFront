function Ajax (app) {
    this.app = app;
    
    this.requestPage = function (object) {
        console.log("Ajax request for: " + object.url);
        
        if (typeof object.data !== 'undefined') {
            object.type = 'POST';
            for (var i in object.data) {
                if (typeof object.data[i] === 'object' || typeof object.data[i] === 'array') {
                    object.data[i] = JSON.stringify(object.data[i]);
                }
                // null gets turned into "null" on the form and that fucks things up.
                if (object.data[i] === null) {
                    delete object.data[i];
                }
            }
            console.log("Ajax request includes data:");
            console.log(object.data);
        }
        
        if (typeof object.timeout === 'undefined') {
            object.timeout = 30000;
        }
        
        $.ajax(object).done(function( data ) {
            if (typeof data === 'string')
                console.log( "Ajax request done. Sample of data:", data.slice( 0, 100 ) );
            else if (typeof data === 'object') {
                console.log("Ajax request done. Object received:");
                console.log(data);
            }
        }).error(function (data) {
            console.log("Ajax request resulted in error. Data:");
            console.log(data);
            if (data.status === 401) {
                window.app.loginapp.checkLogin();
            }
        });
    };
}