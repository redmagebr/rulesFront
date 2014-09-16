function TechsUI (ui) {
    this.ui = ui;
    this.app = this.ui.app;
    window.techs = this;
    this.ajax = new AjaxTechs(this);
    this.stale = window.techAddons === undefined;
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
        
        var $filtros = $('<div id="addonFiltros" />').append('<h1>Filtros Alternativos (não compatíveis com os de cima)</h1>');
        
        var $nivelInput = $('<input type="text" placeholder="Buscar por maior nível" />').on('keyup', function () {
            var $this = $(this);
            var val = $this.val();
            if (isNaN(val,10) || val === '') {
                val = 100;
            } else {
                val = parseInt(val);
            }
            var $addons = window.app.ui.techs.$conteudo.children('div.addon');
            var tipos = [];
            var $addon;
            var nivel;
            for (var i = 0; i < $addons.length; i++) {
                $addon = $($addons[i]).stop(true,true).hide();
                nivel = parseInt($addon.attr('data-nivel'));
                if (nivel <= val) {
                    $addon.show();
                    if (tipos.indexOf($addon.attr('data-tipo')) === -1) {
                        tipos.push($addon.attr('data-tipo'));
                    }
                }
            }
            
            $addons = window.app.ui.techs.$conteudo.children(".techHeader");
            for (i = 0; i < $addons.length; i++) {
                $addon = $($addons[i]).stop(true,true).hide();
                if (tipos.indexOf($addon.attr('data-tipo')) !== -1) {
                    $addon.show();
                }
            }
            
        });
        
        $filtros.append($nivelInput);
        
        var $searchInput = $("<input type='text' placeholder='Buscar por palavras' />").on('keyup', function () {
            var $this = $(this);
            var val = $this.val().trim().toUpperCase();
            var $addons = window.app.ui.techs.$conteudo.children('div.addon');
            var tipos = [];
            var $addon;
            var texto;
            for (var i = 0; i < $addons.length; i++) {
                $addon = $($addons[i]).stop(true,true).hide();
                texto = $addon.text().toUpperCase();
                if (texto.indexOf(val) !== -1) {
                    $addon.show();
                    if (tipos.indexOf($addon.attr('data-tipo')) === -1) {
                        tipos.push($addon.attr('data-tipo'));
                    }
                }
            }
            
            $addons = window.app.ui.techs.$conteudo.children(".techHeader");
            for (i = 0; i < $addons.length; i++) {
                $addon = $($addons[i]).stop(true,true).hide();
                if (tipos.indexOf($addon.attr('data-tipo')) !== -1) {
                    $addon.show();
                }
            }
            
        });
        
        $filtros.append($searchInput);
        
        this.$conteudo.append($tipos).append($filtros);
        for (var tipoid in addonsByTipo) {
            tipo = window.tiposHash[tipoid];
            this.$conteudo.append($("<h1 class='addonHeader tipo" + tipoid + " techHeader' data-tipo='" + tipoid + "' />").text(tipo.nome));
            for (var i = 0; i < tipo.descricao.length; i++) {
                this.$conteudo.append($("<p class='addonExp tipo" + tipoid + " techHeader' data-tipo='" + tipoid + "' />").text(tipo.descricao[i]));
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
        var $div = $('<div class="addon" />')
                .attr("id", "addon" + addon.id)
                .attr("data-nivel", addon.nivel)
                .addClass("tipo" + addon.tipo)
                .attr("data-tipo", addon.tipo);
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
        var $img = $('<img src="img/icon/' + addon.nomeLimpo.replace(' ', '%20') + '.png" />');
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