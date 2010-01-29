Ext.namespace("no.fll");

no.fll.Viewport = Ext.extend(Ext.Viewport, {

    constructor: function() {
		this.layout = "fit";
        this.items = new no.fll.Application();
        no.fll.Viewport.superclass.constructor.call(this);
    }

});
