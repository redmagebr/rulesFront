function ArquetiposUI (ui) {
    this.ui = ui;
    this.app = this.ui.app;
    window.arquetipos = this;
    this.ajax = new AjaxArquetipos(this);
    this.stale = false;
    this.$conteudo = $('#content');
    
    $('#arquetiposButton').on('click', function (e) {
        e.preventDefault();
        window.arquetipos.load();
    });
    
    this.load = function () {
        var cbs = function () {
            window.ui.unblock();
            window.arquetipos.fill();
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
        
        this.ajax.load(cbs, cbe);
    };
    
    this.fill = function () {
        var $clog =this.ui.changelog.$createChangelog(window.arquetiposChangelog);
        this.$conteudo.empty().append($clog);
        var $quickList = $('<ul id="quickList" />');
        var $li;
        var $a;
        var arquetipo;
        this.$conteudo.append("<h1 class='arquetiposHeader'>Arquétipos</h1>");
        for (var i = 0; i < window.arquetiposArray.length; i++) {
            arquetipo = window.arquetiposArray[i];
            $a = $('<a href="#arquetipo' + i + '" />').text(arquetipo.nome);
            $li = $('<li />').append($a);
            $quickList.append($li);
        }
        this.$conteudo.append($quickList);
        var $div;
        var $p;
        var vantagem;
        for (var i = 0; i < window.arquetiposArray.length; i++) {
            arquetipo = window.arquetiposArray[i];
            $div = $('<div class="arquetipo" />');
            $div.append($('<a name="arquetipo' + i + '" />'))
                .append($('<h1 />').text(arquetipo.nome))
                .append("<h2>Descrição:</h2>");
            for (var k = 0; k < arquetipo.descricao.length; k++) {
                $p = $('<p />').text(arquetipo.descricao[k]);
                $div.append($p);
            }
            $div.append($('<h2 />').text("Jogue com um " + arquetipo.nome + " se:"));
            $div.append($('<p />').text(arquetipo.joguese));
            
            $div.append("<h2>Atributos recomendados:</h2>");
            $div.append($('<p />').text(arquetipo.atributos));
            
            $div.append("<h2>Vantagens:</h2>");
            for (var k = 0; k < arquetipo.vantagens.length; k++) {
                vantagem = arquetipo.vantagens[k];
                $p = $('<p />').text(vantagem.descricao);
                $p.prepend($("<b />").text(vantagem.nome + ": "));
                $div.append($p);
            }
            
            this.$conteudo.append($div);
        }
    };
}