import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  checkCategories, initializeCheckedCategories,
} from './actions';

function loadCategories({ dispatch }) {
  dispatch({ type: 'setCategories' });
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
  }, []);

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkCategories({ id, isChecked }));

    dispatch(initializeCheckedCategories({ id }));
  }

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
