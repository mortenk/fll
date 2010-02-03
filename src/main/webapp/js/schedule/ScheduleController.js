Ext.namespace("no.fll.schedule");
/**
 * Controller for FLL schedules.
 *
 * @class no.fll.ScheduleController
 * @extends Ext.Component
 * @author morten.knudsen@vps.no
 */
no.fll.schedule.ScheduleController = Ext.extend(Ext.Component, {
    constructor: function(config) {

        this.addEvents(
            /**
             * @event create-schedule
             * Fires when user clicks the create action on a the create schedule form
             * @param (string) starttime Start of first round
             * @param {int} duration Duration of each round
             */
            'create-schedule',
            'clear-form'
        );
    },

    createSchedule : function(starttime, duration) {
        this.mainPanel.setActiveTab(this.grid);
        ScheduleService.generateSchedule(starttime, duration, function(schedule) {
        	var records = new Array();
        	for (var i in schedule) {
        		records[i] = new no.fll.schedule.Schedule(schedule[i]);
        	}
        	this.grid.store.add(records);
        }.createDelegate(this));
        this.mainPanel.doLayout();
    },

    
    clearForm : function(form) {
        form.reset();
    },

    createForm : function(mainPanel) {
    	this.mainPanel = mainPanel;
		this.grid = new no.fll.schedule.ScheduleGrid({title: 'Kj�replan'});
        this.mainPanel.add(this.grid);
        var form = new no.fll.schedule.ScheduleCreateForm({title: 'Opprett kj�replan'});
        form.on('create-schedule', this.createSchedule.createDelegate(this));
        form.on('clear', this.clearForm.createDelegate(this));
        return form;
    }
});