Ext.onReady(function() {
	Ext.QuickTips.init();
	new no.fll.web.Viewport();
	try {
	} catch (ex) {
		alert(ex.msg);
	}
});
