function ChangelogUI (UI) {
    this.ui = UI;
    this.app = this.ui.app;
    
    
    this.$createChangelog = function (json) {
        var $div = $('<div id="changelog" />').append('<h1>Changelog</h1>');
        $div.append($('<h2 />').text(json[0].version[0] + '.' + json[0].version[1]));
        var $ul = $('<ul />');
        for (var k = 0; k < json[0].description.length; k++) {
            $ul.append($('<li />').text(json[0].description[k]));
        }
        $div.append($ul);
        
        if (json.length > 1) {
            var $a = $('<a id="moreChangelog">Mostrar mudanças antigas</a>').on('click', function (e) {
                $(this).parent().children('.oldChanges').toggle();
                e.preventDefault();
            });
            $div.append($a);
        }
        var $h2;
        for (var i = 1; i < json.length; i++) {
            $h2 = $('<h2 class="oldChanges" />').text(json[i].version[0] + '.' + json[i].version[1]);
            $ul = $('<ul class="oldChanges" />');
            for (var k = 0; k < json[i].description.length; k++) {
                $ul.append($('<li />').text(json[i].description[k]));
            }
            $div.append($h2).append($ul);
        }
        return $div;
    };
}