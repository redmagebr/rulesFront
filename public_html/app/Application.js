function Application () {
    this.ajax = new Ajax(this);
    this.ui = new UI(this);
    
    this.emulateBind = function (f, context) {
        return function () {
            f.apply(context, arguments);
        };
    };
}