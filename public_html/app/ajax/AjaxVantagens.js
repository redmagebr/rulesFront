function AjaxVantagens (ui) {
    this.vantagensui = ui;
    this.app = this.vantagensui.ui.app;
    this.ajax = this.app.ajax;
    
    this.load = function (cbsJSON, cbe) {
        this.ajax.requestPage({
            url : 'paginas/Vantagens.js',
            dataType : 'script',
            success : cbsJSON,
            error : cbe
        });
    };
}