function VantagensUI (ui) {
    this.ui = ui;
    window.vantagensui = this;
    this.app = this.ui.app;
    this.ajax = new AjaxVantagens(this);
    this.$conteudo = $('#content');
    this.stale = window.vantagensArray === undefined;
    
    $('#vantagensButton').on('click', function (e) {
        e.preventDefault();
        window.vantagensui.load();
    });
    
    this.load = function () {
        var cbs = function () {
            window.vantagensui.fill('nome', 'asc');
            window.ui.unblock();
        };
        
        var cbe = function () {
            if (window.vantagensArray !== undefined) {
                window.vantagensui.fill('nome', 'asc');
                window.ui.unblock();
                return;
            }
            window.ui.unblock();
            window.ui.showError();
        };
        
        window.ui.block();
        if (!this.stale) {
            this.stale = true;
            cbs();
            return;
        }
        
        this.ajax.load(cbs, cbe);
    };
    
    this.fill = function () {
        this.$conteudo.empty().append(window.app.ui.changelog.$createChangelog(window.vantagensChangelog));
        
    };
}