import {combineReducers} from 'redux';
import StarWarsReducer from './star-wars-reducer';

export const rootReducer = combineReducers({
  characters: StarWarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
