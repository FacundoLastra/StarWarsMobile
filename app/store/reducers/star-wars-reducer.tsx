import {IAction} from '../../models/actions';
import {characterActions} from '../actions/star-wars-character-actions';

const initialState = {
  characters: [],
  isLoading: false,
  hasErrors: false,
  loadMoreUrl: '',
  charactersNumber: 0,
};
export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case characterActions.GET_CHARACTER_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case characterActions.GET_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      };
    case characterActions.GET_CHARACTER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: true,
      };
    case characterActions.LOAD_MORE_CHARACTERS:
      return {
        ...state,
        isLoading: true,
      };
    case characterActions.LOAD_MORE_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isLoading: false,
      };
    case characterActions.LOAD_MORE_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: true,
      };
    default:
      return state;
  }
};
