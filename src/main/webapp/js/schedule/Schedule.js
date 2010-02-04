Ext.namespace("no.fll.schedule");
no.fll.schedule.Schedule = Ext.data.Record.create([
	{name: 'id'}, 
	{name: 'time'}, 
	{name: 'team1', record: no.fll.team.Team},
	{name: 'team2', record: no.fll.team.Team},
	{name: 'team1.id'},
	{name: 'team1.name'},
	{name: 'team2.id'},
	{name: 'team2.name'}
], 'id');