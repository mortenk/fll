package no.fll.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.persistence.criteria.CriteriaQuery;

import no.fll.web.JsonReaderResponse;

public class JpaCrudDAO implements CrudDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public <T> JsonReaderResponse<T> list(Class<T> clazz) {
		CriteriaQuery<T> criteriaQuery = em
				.getCriteriaBuilder().createQuery(clazz);
		criteriaQuery.from(clazz);
		return new JsonReaderResponse<T>(em
				.createQuery(criteriaQuery).getResultList());
	}

	@Override
	public <T> JsonReaderResponse<T> create(List<T> objects) {
		for (T object : objects) {
			em.persist(object);
		}
		return new JsonReaderResponse<T>(objects);
	}

	@Override
	public <T> JsonReaderResponse<T> update(List<T> oldValues, List<T> newValues) {
		for (T object : newValues) {
			em.merge(object);
		}
		return new JsonReaderResponse<T>(newValues);
	}

	@Override
	public <T> JsonReaderResponse<T> deleteAll(List<T> objects) {
		for (T object : objects) {
			em.remove(em.merge(object));
		}
		return new JsonReaderResponse<T>(objects);
	}

}
