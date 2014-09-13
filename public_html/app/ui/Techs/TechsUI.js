function TechsUI (ui) {
    this.ui = ui;
    this.app = this.ui.app;
    window.techs = this;
    this.ajax = new AjaxTechs(this);
    this.stale = false;
    this.$conteudo = $('#content');
    
    $('#addonsButton').on('click', function (e) {
        e.preventDefault();
        window.techs.load();
    });
    
    this.load = function () {
        var cbs = function () {
            window.techs.fill();
            window.ui.unblock();
        };
        
        var cbe = function () {
            if (window.techAddons !== undefined) {
                window.techs.fill();
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
        var handler = new TecnicasHandler(window.techAddons);
        var $changelog = window.app.ui.changelog.$createChangelog(window.techChangelog);
        
        this.$conteudo.empty().append($changelog);
        
        var addonsByTipo = handler.addonsByTipo;
        var tipo;
        var $a;
        var $tipos = $('<div id="addonTipos" />').append("<h1>Filtros:</h1>");
        for (var tipoid in addonsByTipo) {
            tipo = window.tiposHash[tipoid];
            $a = $('<a href="#" />').text(tipo.nome);
            $a.on("click", this.app.emulateBind(function (e) {
                e.preventDefault();
                var $parent = $('#content');
                $parent.children('.addonHeader, .addonExp, .addon').hide();
                $parent.children('.tipo' + this.tipo).stop(true,true).fadeIn(200);
            }, {tipo : tipoid}));
            $tipos.append($a);
        }
        this.$conteudo.append($tipos);
        for (var tipoid in addonsByTipo) {
            tipo = window.tiposHash[tipoid];
            this.$conteudo.append($("<h1 class='addonHeader tipo" + tipoid + "' />").text(tipo.nome));
            for (var i = 0; i < tipo.descricao.length; i++) {
                this.$conteudo.append($("<p class='addonExp tipo" + tipoid + "' />").text(tipo.descricao[i]));
            }
            var $addon;
            for (var i = 0; i < addonsByTipo[tipoid].length; i++) {
                $addon = this.$createAddon(addonsByTipo[tipoid][i]);
                this.$conteudo.append($addon);
            }
        }
        
        this.$conteudo.scrollTop(0);
    };
    
    
    this.$createAddon = function (addon) {
        var $div = $('<div class="addon" />').attr("id", "addon" + addon.id).attr("data-nivel", addon.nivel).addClass("tipo" + addon.tipo);
        if (addon.conceitos.length > 0) {
            var $conceitos = $('<div class="conceitos" />').append("<h1>Conceitos</h1>");
            var $conceito;
            addon.conceitos.sort(function (a,b) {
                if (window.conceitosHash[a] === undefined || window.conceitosHash[b] === undefined) return 0;
                var na = window.conceitosHash[a].nome.toUpperCase();
                var nb = window.conceitosHash[b].nome.toUpperCase();
                if (na < nb) return -1;
                if (na > nb) return 1;
                return 0;
            });
            for (var i = 0; i < addon.conceitos.length; i++) {
                if (window.conceitosHash[addon.conceitos[i]] === undefined) {
                    $conceito = $('<a href="#" />').text(addon.conceitos[i]);
                } else {
                    $conceito = $('<a href="#" />').text(window.conceitosHash[addon.conceitos[i]].nome);
                }
                $conceito.on('click', this.app.emulateBind(function (e) {
                    e.preventDefault();
                    window.techs.openConceito(this.conceito);
                }, {conceito : addon.conceitos[i]}));
                $conceitos.append($conceito);
            }
            $div.append($conceitos);
        }
        var $h1 = $('<h1 />');
        var $img = $('<img src="http://techs.redpg.com.br/icon/' + addon.nomeLimpo.replace(' ', '%20') + '.png" />');
        $h1.append($img).append(" " + addon.nome + ' - para nível ' + addon.nivel + ' e acima');
        $div.append($h1);
        var $ul = $('<ul />');
        var $li;
        for (var i = 0; i < addon.efeitos.length; i++) {
            $li = $('<li />').text(addon.efeitos[i]);
            $ul.append($li);
        }
        $div.append($ul);
        $div.append("<span></span>");
        return $div;
    };
    
    this.openConceito = function (conceito) {
        console.log(conceito);
    };
}