/**
 * @constructor
 * @returns {AjaxController}
 */
function Controller () {
    this.host = "http://rules.redpg.com.br/paginas/";
    this.blocks = 0;
    this.$loading = $('#loadingPage').fadeOut();
    this.$changelog = $('#changelog');
    this.$conteudo = $('#conteudo');
    
    this.block = function () {
        if (++this.blocks > 0) {
            this.$loading.stop(true, false).fadeIn();
        }
    };
    
    this.unblock = function () {
        if (--this.blocks < 1) {
            this.$loading.stop(true, false).fadeOut();
        }
    };
    
    this.getPage = function (url, cbs, cbe) {
        if (typeof cbs === 'undefined') var cbs = function () { };
        if (typeof cbe === 'undefined') var cbe = function () { };
        this.block();
        this.block();
        this.requestPage({
            url : url + '.html',
            dataType : 'html',
            success: function (data) {
                window.controller.$conteudo.html(data);
                window.controller.unblock();
            },
            error: function (data) {
                window.controller.unblock();
                window.controller.error(false, true);
            }
        });
        this.requestPage({
            url : url + 'c.html',
            dataType : 'html',
            success: function (data) {
                window.controller.$changelog.html(data);
                window.controller.unblock();
            },
            error: function (data) {
                window.controller.unblock();
                window.controller.error(true, false);
            }
        });
    };
    
    this.error = function (changelog, conteudo) {
        if (changelog) this.$changelog.html("<p class='error'>Erro carregando changelog</p>");
        if (conteudo) this.$conteudo.html("<p class='error'>Erro carregando conteudo</p>");
    };
    
    this.requestPage = function (object) {
        object.crossDomain = true;
        
        
        if (object.url.indexOf('://') === -1) {
            object.url = this.host + object.url;
        }
        
        
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
            object.timeout = 10000;
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
        });
    };
    
    this.emulateBind = function (f, context) {
        return function () {
            f.apply(context, arguments);
        };
    };
}