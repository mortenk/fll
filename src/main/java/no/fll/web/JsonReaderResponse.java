package no.fll.web;

import java.util.List;

public class JsonReaderResponse<T> {

	private List<T> objectsToConvertToRecords;
	
	/**
	 * @see Ext.data.JsonReader.successProperty
	 */
	private boolean success;
	
	/**
	 * Creates a {@link #success}ful JsonReaderResponse with the provided {@link #objectsToConvertToRecords}.
	 * @param objectsToConvertToRecords
	 */
	public JsonReaderResponse(List<T> objectsToConvertToRecords) {
		this.objectsToConvertToRecords = objectsToConvertToRecords;
		success = true;
	}
	
	/**
	 * Creates an un{@link #success}ful JsonReaderResponse with null {@link #objectsToConvertToRecords}.
	 * This signals the case where the client established a connection with the server,
	 * but the server couldn't fulfill it (e.g., user doesn't have proper user credentials).
	 * @param objectsToConvertToRecords
	 */
	public JsonReaderResponse() {
		this.objectsToConvertToRecords = null;
		success = false;
	}

	
	public List<T> getObjectsToConvertToRecords() {
		return objectsToConvertToRecords;
	}

	
	public void setObjectsToConvertToRecords(List<T> objectsToConvertToRecords) {
		this.objectsToConvertToRecords = objectsToConvertToRecords;
	}

	
	public boolean isSuccess() {
		return success;
	}

	
	public void setSuccess(boolean success) {
		this.success = success;
	}
}
