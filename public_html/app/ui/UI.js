function UI (app) {
    this.app = app;
    
    this.techs = new TechsUI(this);
    
    this.$loading = $('#loadingPage').fadeOut();
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
}