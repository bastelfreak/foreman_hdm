import { combineReducers } from 'redux';
import EmptyStateReducer from './Components/EmptyState/EmptyStateReducer';

const reducers = {
  foremanHdm: combineReducers({
    emptyState: EmptyStateReducer,
  }),
};

export default reducers;
