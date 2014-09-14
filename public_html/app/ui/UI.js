function UI (app) {
    this.app = app;
    window.ui = this;
    
    this.techs = new TechsUI(this);
    this.arquetipos = new ArquetiposUI(this);
    this.vantagens = new VantagensUI(this);
    this.changelog = new ChangelogUI(this);
    
    this.$loading = $('#loadingPage').fadeOut();
    this.$conteudo = $('#content');
    this.$topButton = $('#toTheTop').hide();
    this.loadCount = 0;
    
    this.$topButton.on('click', function () {
        window.ui.$conteudo.animate({
            scrollTop : 0
        });
    });
    
    this.$conteudo.on('scroll', function () {
        if (this.scrollTop > 30) {
            window.ui.$topButton.stop(true,false).fadeIn(100);
        } else {
            window.ui.$topButton.stop(true,false).fadeOut(100);
        }
    });
    
    this.block = function () {
        if (++this.loadCount > 0) {
            this.$loading.stop(true,false).fadeIn(100);
        }
    };
    
    this.unblock = function () {
        if (--this.loadCount < 1) {
            this.$loading.stop(true,false).fadeOut(100);
        }
    };
    
    this.showError = function () {
        this.$conteudo.empty().text("Erro ao carregar a página. Tente novamente.");
    };
}