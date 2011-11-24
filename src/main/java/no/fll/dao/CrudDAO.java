package no.fll.dao;

import java.util.List;

import no.fll.web.JsonReaderResponse;

public interface CrudDAO {

	<T> JsonReaderResponse<T> list(Class<T> clazz);

	<T> JsonReaderResponse<T> create(List<T> objects);

	<T> JsonReaderResponse<T> update(List<T> oldValues, List<T> newValues);

	<T> JsonReaderResponse<T> deleteAll(List<T> objects);

}
