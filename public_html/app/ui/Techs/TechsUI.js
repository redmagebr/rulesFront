function TechsUI (ui) {
    this.ui = ui;
    window.techs = this;
    this.ajax = new AjaxTechs(this);
    this.stale = false;
    this.$conteudo = $('#content');
    
    $('#addons').on('click', function (e) {
        e.preventDefault();
        window.techs.loadTechs();
    });
    
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
            this.stale = true;
            cbs();
            return;
        }
        
        this.ajax.loadTechs(cbs, cbe);
    };
    
    this.fillTechs = function () {
        var handler = new TecnicasHandler(window.techAddons);
        var $changelog = window.app.ui.changelog.$createChangelog(window.techChangelog);
        
        this.$conteudo.empty().append($changelog);
    };
}