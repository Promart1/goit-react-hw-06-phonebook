import React from 'react';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={css.label}>
      Filter contacts by name:
      <input
        className={css.input}
        type="text"
        placeholder="Name"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </label>
  );
};
