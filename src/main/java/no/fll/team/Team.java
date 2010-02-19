package no.fll.team;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TEAM")
public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TEAM_ID")
	private int id;

	@Column(name = "NUMBER", unique=true)
	private int number;
	
	@Column(name = "NAME", unique=true)
	private String name;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getNumber() {
		return number;
	}
	
	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
