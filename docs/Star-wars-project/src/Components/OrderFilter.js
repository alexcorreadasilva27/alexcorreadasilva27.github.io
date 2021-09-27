import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import {
  compareNameAsc,
  compareNameDesc,
  compareOrbitalAsc,
  compareOrbitalDesc,
  comparePopulationAsc,
  comparePopulationDesc,
} from '../services/orderPlanets';
import '../styles/orderFilter.css';

function OrderFilter() {
  const context = useContext(PlanetsContext);
  const { setOrderSort, data, setData } = context;
  const [orderBy, setOrderBy] = useState('name');
  const [orderForm, setOrderForm] = useState('ASC');

  const ordersPlanets = (type, form) => {
    if (type === 'name') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareNameAsc));
      case 'DESC':
        return setData(data.sort(compareNameDesc));
      default:
        break;
      }
    }
    if (type === 'population') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(comparePopulationAsc));
      case 'DESC':
        return setData(data.sort(comparePopulationDesc));
      default:
        break;
      }
    }
    if (type === 'orbital_period') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareOrbitalAsc));
      case 'DESC':
        return setData(data.sort(compareOrbitalDesc));
      default:
        break;
      }
    }
  };

  const getOrderForm = () => {
    ordersPlanets(orderBy, orderForm);
  };

  useEffect(() => {
    setOrderSort(orderBy, orderForm);
    getOrderForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, orderBy, orderForm]);

  return (
    <div className="order-filter">
      <span>Order By:</span>
      <select
        onChange={ (event) => setOrderBy(event.target.value) }
        data-testid="column-sort"
        className="column-sort"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
      </select>
      <span>In a way: </span>
      <label htmlFor="asc" className="ascendant">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          onChange={ (event) => setOrderForm(event.target.value) }
          id="asc"
          defaultChecked
          name="ordeBy"
          value="ASC"
        />
      </label>
      <label htmlFor="desc" className="downward">
        DESC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          onChange={ (event) => setOrderForm(event.target.value) }
          id="desc"
          name="ordeBy"
          value="DESC"
        />
      </label>
      <button
        type="button"
        onClick={ getOrderForm }
        data-testid="column-sort-button"
        className="column-sort-button"
      >
        Order Columns
      </button>
    </div>
  );
}

export default OrderFilter;
