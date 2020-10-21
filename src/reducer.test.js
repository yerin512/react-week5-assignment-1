import reducer from './reducer';

import {
  checkRegion,
  setRegions,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('checkRegion', () => {
    it('change checked Region', () => {
      const state = reducer({
        checkedRegion: 2,
      }, checkRegion(1));

      expect(state.checkedRegion).toBe(1);
    });
  });

  describe('setRegions', () => {
    it('set initial value of regions', () => {
      const state = reducer(undefined, setRegions(regions));
      expect(state.regions).toBe(regions);
    });
  });
});
