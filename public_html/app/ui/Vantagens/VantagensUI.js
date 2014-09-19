function VantagensUI (ui) {
    this.ui = ui;
    window.vantagensui = this;
    this.app = this.ui.app;
    this.ajax = new AjaxVantagens(this);
    this.$conteudo = $('#content');
    this.stale = window.vantagensArray === undefined;
    
    // Search
    this.$lastType = null;
    this.$pontos;
    this.$search;
    this.$allowArquetipos;
    this.$allowRacas;
    
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
    
    this.$createVantagem = function (vantagem) {
        var $vantagem = $('<div class="vantagem" />');
        var $h1 = $('<h1 />').text(vantagem.nome + ", " + vantagem.pontos + (vantagem.pontos === "1" ? " ponto" : " pontos"));
        $vantagem.append($h1);
        
        var $p;
        for (var i = 0; i < vantagem.descricao.length; i++) {
            $p = $('<p />').text(vantagem.descricao[i]);
            $vantagem.append($p);
        }
        
        if (vantagem.requisitos !== undefined) {
            $p = $('<p />').text(vantagem.requisitos).prepend('<b>Requisitos: </b>');
            $vantagem.append($p);
        }
        
        $vantagem.attr('data-pontos', vantagem.pontos);
        if (vantagem.requisitos !== undefined) {
            $vantagem.attr('data-requisitos', vantagem.requisitos);
        } else {
            $vantagem.attr('data-requisitos', '-');
        }
        return $vantagem;
    };
    
    this.fill = function () {
        this.$conteudo.empty().append(window.app.ui.changelog.$createChangelog(window.vantagensChangelog));
        
        var $vantagens = $('<div id="vantagensDiv" />');
        var $p;
        
        var $tipos = $('<div id="vantagensTipos" />').append("<h1>Filtros:</h1>");
        
        this.$pontos = $('<input class="vantagensInput" type="text" placeholder="Buscar por Pontos" />').on('keyup', function () {
            window.app.ui.vantagens.search();
        });
        
        this.$search = $('<input class="vantagensInput" type="text" placeholder="Buscar por Palavras" />').on('keyup', function () {
            window.app.ui.vantagens.search();
        });
        
        this.$allowArquetipos = $('<input id="vAllowArquetipos" type="checkbox" />').on('change', function () {
            window.app.ui.vantagens.search();
        });
        
        this.$allowRacas = $('<input id="vAllowRacas" type="checkbox" />').on('change', function () {
            window.app.ui.vantagens.search();
        });
        
        var $checkboxes = $('<div id="vCheckBoxes" />').append(this.$allowArquetipos).append("<label for='vAllowArquetipos'>Mostrar vantagens de Arquétipos</label>")
            .append("<br />")
            .append(this.$allowRacas).append("<label for='vAllowRacas'>Mostrar vantagens de Raças</label>");
        
        this.$conteudo.append($tipos).append(this.$pontos).append(this.$search).append($checkboxes);
        
        var tipo;
        for (var i = 0; i < window.tiposVant.length; i++) {
            tipo = window.tiposVant[i];
            $tipos.append(
                $('<a />').text(tipo.nome).on('click', function () {
                    window.app.ui.vantagens.search($(this));
                }).attr('data-tipo', tipo.id)
            );
            $vantagens.append($("<h1 />").text(tipo.nome).attr('data-tipo', tipo.id));
            for (var k = 0; k < tipo.descricao.length; k++) {
                $p = $('<p />').text(tipo.descricao[k]).attr('data-tipo', tipo.id);
                $vantagens.append($p);
            }
            for (k = 0; k < window[tipo.id + 'Array'].length; k++) {
                $vantagens.append(this.$createVantagem(window[tipo.id + 'Array'][k]).attr('data-tipo', tipo.id));
            }
        }
        
        this.$conteudo.append($vantagens);
        
        this.search();
    };
    
    this.search = function ($dom) {
        var searchType =  null;
        if (this.$lastType !== null) searchType = this.$lastType.attr('data-tipo');
        if (typeof $dom !== 'undefined') {
            if (searchType === $dom.attr('data-tipo')) {
                $dom.removeClass('toggled');
                this.$lastType = null;
                searchType = null;
            } else {
                if (this.$lastType !== null) { this.$lastType.removeClass('toggled'); }
                $dom.addClass('toggled');
                searchType = $dom.attr('data-tipo');
                this.$lastType = $dom;
            }
        }
        
        var searchPoints = this.$pontos.val();
        if (isNaN(searchPoints, 10) || searchPoints === '') {
            searchPoints = null;
        } else {
            searchPoints = parseInt(searchPoints);
        }
        
        var searchWords = this.$search.val().trim();
        if (searchWords === '') {
            searchWords = null;
        } else {
            searchWords = searchWords.toUpperCase();
        }
        
        var allowArquetipos = this.$allowArquetipos[0].checked;
        console.log(allowArquetipos);
        var allowRacas = this.$allowRacas[0].checked;
        
        var $vantagens = $('#vantagensDiv');
        $vantagens.children().hide();
        
        var tipos = [];
        
        $vantagens = $vantagens.children('div.vantagem');
        var $vantagem;
        var pontos;
        var words;
        var k;
        var failed;
        var requisitos;
        for (var i = 0; i < $vantagens.length; i++) {
            $vantagem = $($vantagens[i]);
            if (searchType !== null && searchType !== $vantagem.attr('data-tipo')) {
                continue;
            }
            if (!allowArquetipos || !allowRacas) {
                requisitos = $vantagem.attr('data-requisitos').trim().toUpperCase();
                if (!allowArquetipos && requisitos.indexOf('ARQUÉTIPO') === 0) {
                    continue;
                }
                if (!allowRacas && requisitos.indexOf("RAÇA") === 0) {
                    continue;
                }
            }
            if (searchPoints !== null) {
                pontos = $vantagem.attr('data-pontos');
                if (!isNaN(pontos, 10)) {
                    pontos = parseInt (pontos);
                    if (pontos !== searchPoints) continue;
                } else if (pontos.indexOf(' ou ') !== -1) {
                    pontos = pontos.split(' ou ');
                    for (k = 0; k < pontos.length; k++) {
                        failed = false;
                        if (!isNaN(pontos[k], 10)) {
                            pontos[k] = parseInt(pontos[k]);
                            if (pontos[k] !== searchPoints) failed = true;
                        }
                    }
                    if (failed) continue;
                }
            }
            if (searchWords !== null) {
                words = $vantagem.text().toUpperCase();
                if (words.indexOf(searchWords) === -1) continue;
            }
            if (tipos.indexOf($vantagem.attr('data-tipo')) === -1) {
                tipos.push($vantagem.attr('data-tipo'));
            }
            $vantagem.show();
        }
        
        if (tipos.length > 0) {
            for (i = 0; i < tipos.length; i++) {
                $vantagens = $('#vantagensDiv').children('p, h1');
                for (k = 0; k < $vantagens.length; k++) {
                    $vantagem = $($vantagens[k]);
                    if ($vantagem.attr('data-tipo') === tipos[i]) {
                        $vantagem.show();
                    }
                }
            }
        }
    };
}