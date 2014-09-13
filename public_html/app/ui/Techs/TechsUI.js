function TechsUI (ui) {
    this.ui = ui;
    window.techs = this;
    this.handler = null;
    this.ajax = new AjaxTechs(this);
    this.stale = false;;
    
    this.loadTechs = function () {
        var cbs = function () {
            window.ui.unblock();
            window.techs.fillTechs();
        };
        
        var cbe = function () {
            window.ui.unblock();
            window.ui.showError();
        };
        
        window.ui.block();
        if (!this.stale) {
            cbs();
            return;
        }
        
        this.ajax.loadTechs(cbs, cbe);
    };
    
    this.fillTechs = function () {
        this.handler = new TecnicasHandler(window.techAddons);
    };
}