Ext.onReady(function() {
	Ext.QuickTips.init();
	try {
		new no.fll.Viewport();
	} catch (ex) {
		alert(ex.msg);
	}
});
