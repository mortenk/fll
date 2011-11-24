package no.fll.dao;

import java.util.List;

import no.fll.web.JsonReaderResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

public class HibernateCrudDAO implements CrudDAO {

	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	/* (non-Javadoc)
	 * @see no.fll.dao.CrudDAO#list()
	 */
	@Override
	public <T> JsonReaderResponse<T> list(Class<T> clazz) {
		return new JsonReaderResponse<T>(hibernateTemplate.loadAll(clazz));
	}

	/* (non-Javadoc)
	 * @see no.fll.dao.CrudDAO#create(java.util.List)
	 */
	@Override
	public <T> JsonReaderResponse<T> create(List<T> objects) {
		hibernateTemplate.saveOrUpdateAll(objects);
		return new JsonReaderResponse<T>(objects);
	}

	/* (non-Javadoc)
	 * @see no.fll.dao.CrudDAO#update(java.util.List, java.util.List)
	 */
	@Override
	public <T> JsonReaderResponse<T> update(List<T> oldValues, List<T> newValues) {
		return create(newValues);
	}

	/* (non-Javadoc)
	 * @see no.fll.dao.CrudDAO#delete(java.util.List)
	 */
	@Override
	public <T> JsonReaderResponse<T> deleteAll(List<T> objects) {
		hibernateTemplate.deleteAll(objects);
		return new JsonReaderResponse<T>(objects);
	}
}
