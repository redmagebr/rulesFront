function TecnicasHandler (addons) {
    this.addons = {};
    this.addonsByTipo = {};
    
    for (var i = 0; i < addons.length; i++) {
        if (this.addonsByTipo[addons[i].tipo] === undefined) this.addonsByTipo[addons[i].tipo] = [];
        this.addonsByTipo[addons[i].tipo].push(addons[i]);
        this.addons[addons[i].id] = addons[i];
    }
    
    for (var tipo in this.addonsByTipo) {
        this.addonsByTipo[tipo].sort(function (a,b) {
            var na = a.nome.toUpperCase().latinize();
            var nb = b.nome.toUpperCase().latinize();
            if (na < nb) return -1;
            if (na > nb) return 1;
            return 0;
        });
    }
    
    this.getAddon = function (id) {
        if (this.addons[id] === undefined) {
            return null;
        }
        return this.addons[id];
    };
    
    this.getAddons = function (tipo) {
        if (this.addonsByTipo[tipo] === undefined) {
            return [];
        }
        return this.addonsByTipo[tipo];
    };
}