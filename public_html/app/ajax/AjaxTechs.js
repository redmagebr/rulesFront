function AjaxTechs (TechsUI) {
    this.techsui = TechsUI;
    this.app = this.techsui.ui.app;
    this.ajax = this.app.ajax;
    
    this.loadCount = 0;
    this.loadTotal = 0;
    
    this.loadTechs = function (cbsJSON, cbsCHANGELOG, cbs, cbe) {
        this.loadTotal = 3;
        this.loadCount = 0;
        
        cbsJSON = this.app.emulateBind(function (data) {
            this.cbsJSON(data);
            if (++this.ajax.loadCount >= this.ajax.loadTotal) {
                this.cbs();
            }
        }, {cbsJSON : cbsJSON, cbs : cbs, ajax : this});
        
        cbsCHANGELOG = this.app.emulateBind(function (data) {
            this.cbsCHANGELOG(data);
            if (++this.ajax.loadCount >= this.ajax.loadTotal) {
                this.cbs();
            }
        }, {cbsCHANGELOG : cbsCHANGELOG, cbs : cbs, ajax : this});
        
        this.ajax.requestPage({
            url : 'paginas/TecnicasAddons.js',
            success : cbsJSON,
            error : cbe
        });
        
        this.ajax.requestPage({
            url : 'paginas/Tecnicasc.html',
            success : cbsCHANGELOG,
            error : cbe
        });
    };
}