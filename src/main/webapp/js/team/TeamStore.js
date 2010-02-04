Ext.namespace("no.fll.team");
no.fll.team.TeamStore = Ext.extend(Ext.data.Store, {
    constructor: function(config) {
		this.autoSave = false;
		this.autoLoad = true;
		this.proxy = new Ext.ux.data.DwrProxy({
	 		apiActionToHandlerMap : {
	 			read : {
	  				dwrFunction : TeamService.getTeams
	 			},
	 			create : {
	 				dwrFunction : TeamService.createTeam
	 			}, 
	 			update : {
	 				dwrFunction : TeamService.updateTeam
	 			}, 
	 			destroy : {
	 				dwrFunction : TeamService.deleteTeam
	 			}
	 		}
	    });
	    this.reader = new Ext.data.JsonReader({
			root : 'objectsToConvertToRecords',
			fields: no.fll.team.Team
		});
		this.writer = new Ext.data.JsonWriter({});
		no.fll.team.TeamStore.superclass.constructor.call(this, config);
	}
});