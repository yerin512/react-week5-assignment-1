import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export function setCategory(categoryId) {
  return {
    type: 'setCategory',
    payload: {
      categoryId,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRegion(region) {
  return {
    type: 'setRegion',
    payload: {
      region,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadRestaurants(region, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, categoryId);
    dispatch(setRestaurants(restaurants));
  };
}
