Ext.namespace("no.fll");
/**
 * Controller for FLL schedules.
 *
 * @class no.fll.ScheduleController
 * @extends Ext.Component
 * @author morten.knudsen@vps.no
 */
no.fll.ScheduleController = Ext.extend(Ext.Component, {
    constructor: function(config) {

		this.plan = 1;
        this.addEvents(
            /**
             * @event create-schedule
             * Fires when user clicks the create action on a the create schedule form
             * @param {int} teams The number of teams
             */
            'create-schedule',
            'clear-form'
        );
    },

    createSchedule : function(starttime, duration, teams) {
        var grid = new no.fll.ScheduleGrid(starttime, duration, teams, {title: 'Kjøreplan', closable: true});
        this.mainPanel.add(grid);
        this.mainPanel.setActiveTab(grid);
        this.mainPanel.doLayout();
    },

    
    clearForm : function(form) {
        form.reset();
    },

    createForm : function(mainPanel) {
    	this.mainPanel = mainPanel;
        var form = new no.fll.ScheduleCreateForm({id: 'scheduleCreateForm'});
        form.on('create-schedule', this.createSchedule.createDelegate(this));
        form.on('clear', this.clearForm.createDelegate(this));
        return form;
    }
});