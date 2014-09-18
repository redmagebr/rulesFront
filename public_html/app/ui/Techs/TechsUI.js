function TechsUI (ui) {
    this.ui = ui;
    this.app = this.ui.app;
    window.techs = this;
    this.ajax = new AjaxTechs(this);
    this.stale = window.techAddons === undefined;
    this.$conteudo = $('#content');
    this.lastTipo = null;
    this.$conceito = $('#conceitoHover').hide();
    this.$window = $('#window');
    
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
        
        
        var $infos = $('<div id="informativosTechs" />').append("<h1>Informações</h1>");
        for (var i = 0; i < window.techCustos.descricaoNiveis.length; i++) {
            $infos.append(
                $('<p />').text(window.techCustos.descricaoNiveis[i])
            );
        }
        
        var $ul = $('<ul />');
        var $li;
        var li;
        for (var i = 0; i < window.techCustos.niveis.length; i++) {
            li = window.techCustos.niveis[i];
            $li = $('<li />').text(li[1]).prepend(
                $('<b />').text(li[0] + ": ")
            );
            $ul.append($li);
        }
        $infos.append($ul);
        
        for (var i = 0; i < window.techCustos.descricaoPontos.length; i++) {
            $infos.append(
                $('<p />').text(window.techCustos.descricaoPontos[i])
            );
        }
        
        $ul = $('<ul />');
        for (var i = 0; i < window.techCustos.pontos.length; i++) {
            li = window.techCustos.pontos[i];
            $li = $('<li />').text(li[1]).prepend(
                $('<b />').text(li[0] + ": ")
            );
            $ul.append($li);
        }
        $infos.append($ul);
        
        this.$conteudo.append($infos);
        
        var $conceitos = $('<div id="addonConceitos" />').append("<h1>Conceitos</h1>");
        var $conceito;
        var conceito;
        for (var i = 0; i < window.techConceitos.length; i++) {
            conceito = window.techConceitos[i];
            if (!conceito.listado) continue;
            $conceito = $('<a class="conceitoHover" />').text(window.techConceitos[i].nome);
            this.conceitize($conceito, window.techConceitos[i].id);
            $conceitos.append($conceito);
        }
        for (var i = 0; i < window.techConceitosExplain.length; i++) {
            $conceito = $('<p />').text(window.techConceitosExplain[i]);
            $conceitos.append($conceito);
        }
        
        $conceitos.append("<span></span>");
        
        this.$conteudo.append($conceitos);
        
        var addonsByTipo = handler.addonsByTipo;
        var tipo;
        var $a;
        var $tipos = $('<div id="addonTipos" />').append("<h1>Filtros:</h1>");
        for (var tipoid in addonsByTipo) {
            tipo = window.tiposHash[tipoid];
            $a = $('<a id="techFiltro' + tipoid + '" href="#" />').text(tipo.nome);
            $a.on("click", this.app.emulateBind(function (e) {
                e.preventDefault();
                window.app.ui.techs.search(this.tipo);
            }, {tipo : tipoid}));
            $tipos.append($a);
        }
        
        var $filtros = $('<div id="addonFiltros" />');
        
        var $nivelInput = $('<input id="techSearchLevel" type="text" placeholder="Buscar por maior nível" />').on('keyup', function () {
            window.app.ui.techs.search();
        });
        
        $filtros.append($nivelInput);
        
        var $searchInput = $("<input id='techsSearch' type='text' placeholder='Buscar por palavras' />").on('keyup', function () {
            window.app.ui.techs.search();
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
                    $conceito = $('<a class="conceitoHover" />').text(addon.conceitos[i]);
                } else {
                    $conceito = $('<a class="conceitoHover" />').text(window.conceitosHash[addon.conceitos[i]].nome);
                }
                this.conceitize($conceito, addon.conceitos[i]);
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
    
    this.search = function (tipo) {
        if (tipo === this.lastTipo) {
            $('#techFiltro' + tipo).removeClass('toggled');
            this.lastTipo = null;
            tipo = null;
        } else if (tipo !== undefined) {
            $('#techFiltro' + this.lastTipo).removeClass('toggled');
            $('#techFiltro' + tipo).addClass('toggled');
            this.lastTipo = tipo;
        } else {
            var tipo = this.lastTipo;
        }
        var nivel = $('#techSearchLevel').val();
        var words = $('#techsSearch').val().trim().toUpperCase();
        if (isNaN(nivel,10) || nivel === '') {
            nivel = 100;
        } else {
            nivel = parseInt(nivel);
        }
        var $addons = this.$conteudo.children('div.addon');
        var tipos = [];
        var $addon;
        var text;
        for (var i = 0; i < $addons.length; i++) {
            $addon = $($addons[i]).stop(true,true).hide();
            text = $addon.text().toUpperCase();
            if ((tipo === null || $addon.attr('data-tipo') === tipo) && parseInt($addon.attr('data-nivel')) <= nivel && text.indexOf(words) !== -1) {
                $addon.show();
                if (tipos.indexOf($addon.attr('data-tipo')) === -1) {
                    tipos.push($addon.attr('data-tipo'));
                }
            }
        }
            
        $addons = this.$conteudo.children(".techHeader");
        for (i = 0; i < $addons.length; i++) {
            $addon = $($addons[i]).stop(true,true).hide();
            if (tipos.indexOf($addon.attr('data-tipo')) !== -1) {
                $addon.show();
            }
        }
    };
    
    this.showConceito = function (conceito) {
        var $h1 = $('<h1 />');
        this.$conceito.empty().append($h1);
        if (window.conceitosHash[conceito] === undefined) {
            $h1.text("Conceito não encontrado");
            this.$conceito.append($("<p />").text("O conceito " + conceito + " não foi encontrado no sistema."));
        } else {
            conceito = window.conceitosHash[conceito];
            $h1.text(conceito.nome);
            var $p;
            for (var i = 0; i < conceito.descricao.length; i++) {
                $p = $('<p />').text(conceito.descricao[i]);
                this.$conceito.append($p);
            }
        }
        this.$conceito.stop(true,false).fadeIn(100);
    };
    
    this.moveConceito = function (e) {
        var top = event.pageY - (this.$conceito.height() / 2);
        var offsetLeft = ($(window).width() - this.$window.width())/2;
        var left = event.pageX - (this.$conceito.width()) - 20 - offsetLeft;
        if (left < 0) {
            left = 0;
        }
        if (top + this.$conceito.height() > this.$window.height()) {
            top = this.$window.height() - this.$conceito.height() - 10;
        }
        if (top < 0) {
            top = 0;
        }
        this.$conceito.css({
            top: top,
            left: left
        });
    };
    
    this.hideConceito = function () {
        this.$conceito.stop(true,false).fadeOut(100);
    };
    
    this.conceitize = function ($dom, conceito) {
        $dom.attr('data-conceito', conceito);
        $dom.off('.conceito').on('mouseenter', function (e) {
            window.app.ui.techs.showConceito($(this).attr('data-conceito'));
            window.app.ui.techs.moveConceito(e);
        }).on('mouseleave', function () {
            window.app.ui.techs.hideConceito();
        }).on('mousemove', function (e) {
            window.app.ui.techs.moveConceito(e);
        });
    };
}