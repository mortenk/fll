Ext.namespace("no.fll.web");

no.fll.web.Viewport = Ext.extend(Ext.Viewport, {

    constructor: function() {
		this.layout = "fit";
        this.items = new no.fll.web.Application();
        no.fll.web.Viewport.superclass.constructor.call(this);
    }

});
