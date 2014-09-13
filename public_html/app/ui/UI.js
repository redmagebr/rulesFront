function UI (app) {
    this.app = app;
    window.ui = this;
    
    this.techs = new TechsUI(this);
    this.arquetipos = new ArquetiposUI(this);
    this.changelog = new ChangelogUI(this);
    
    this.$loading = $('#loadingPage').fadeOut();
    this.$conteudo = $('#content');
    this.loadCount = 0;
    
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