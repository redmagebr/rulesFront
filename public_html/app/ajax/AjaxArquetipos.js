function AjaxArquetipos (arq) {
    this.arquetipos = arq;
    this.app = this.arquetipos.ui.app;
    this.ajax = this.app.ajax;
    
    this.load = function (cbsJSON, cbe) {
        this.ajax.requestPage({
            url : 'paginas/Arquetipos.js',
            dataType : 'script',
            success : cbsJSON,
            error : cbe
        });
    };
}