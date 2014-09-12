function TechsUI (ui) {
    this.ui = ui;
    this.ajax = new AjaxTechs();
    window.techs = this;
    this.handler = null;
    
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
    };
    
    this.fillTechs = function () {
        this.handler = new TecnicasHandler();
    };
}