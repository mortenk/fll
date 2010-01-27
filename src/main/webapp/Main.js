Ext.onReady(function() {
	Ext.QuickTips.init();
	var controller = new no.fll.ScheduleController();
	var form = controller.createForm();
	form.render(document.body);
});
