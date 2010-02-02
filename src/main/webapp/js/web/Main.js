Ext.onReady(function() {
	Ext.QuickTips.init();
	try {
		new no.fll.web.Viewport();
	} catch (ex) {
		alert(ex.msg);
	}
});
