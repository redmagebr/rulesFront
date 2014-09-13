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
    
    
    this.$createAddon = function (addon) {
        var $div = $('<div class="addon" />').attr("id", "addon" + addon.id).attr("data-nivel", addon.nivel).addClass("tipo" + addon.tipo);
        var $h1 = $('<h1 />');
        var $img = $('<img src="http://techs.redpg.com.br/icon/' + addon.nomeLimpo.replace(' ', '%20') + '.png" />');
        $h1.append($img).append(" " + addon.nome + ' - para nível ' + addon.nivel + ' e acima');
        $div.append($h1);
        if (addon.conceitos.length > 0) {
            var $conceitos = $('<div class="conceitos" />');
            
        }
    };
}