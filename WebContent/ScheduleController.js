Ext.namespace("no.fll");
/**
 * Controller for FLL schedules.
 *
 * @class no.fll.ScheduleController
 * @extends Ext.Component
 * @author morten.knudsen@vps.no
 */
no.fll.ScheduleController = Ext.extend(Ext.Component, {
    /*** default properties ***/


    /*** constructor ***/
    constructor: function(config) {

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

    /*** public methods ****/

    showActivities : function() {
    	var grid = new no.fll.ActivityGrid();
        grid.render(document.body);
    }, 
    
    createSchedule : function(teams) {
        var grid = new no.fll.ScheduleGrid(teams);
        grid.on('next', this.showActivities.createDelegate(this));
        grid.render(document.body);
    },

    
    clearForm : function(form) {
        form.reset();
    },

    createForm : function(title) {
        var form = new no.fll.ScheduleCreateForm({id: 'scheduleCreateForm', title: title});
        form.on('create-schedule', this.createSchedule.createDelegate(this));
        form.on('clear', this.clearForm.createDelegate(this));
        return form;
    }
});