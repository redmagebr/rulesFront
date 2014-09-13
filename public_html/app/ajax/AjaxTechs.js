function AjaxTechs (TechsUI) {
    this.techsui = TechsUI;
    this.app = this.techsui.ui.app;
    this.ajax = this.app.ajax;
    
    this.loadTechs = function (cbsJSON, cbe) {
        this.ajax.requestPage({
            url : 'paginas/TecnicasAddons.js',
            dataType : 'script',
            success : cbsJSON,
            error : cbe
        });
    };
}