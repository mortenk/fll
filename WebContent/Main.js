Ext.onReady(function() {
	Ext.QuickTips.init();
	var controller = new no.fll.ScheduleController();
	var form = controller.createForm("Morten er snill");
	form.render(document.body);
});
