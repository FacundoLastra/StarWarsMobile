import {makeCharacterListCall} from '../../services/apiCallsService';

export const characterActions = {
  GET_CHARACTER_LIST: 'GET CHARACTER LIST',
  GET_CHARACTER_LIST_SUCCESS: 'GET CHARACTER LIST SUCCESS',
  GET_CHARACTER_LIST_FAILURE: 'GET CHARACTER LIST FAILURE',
  LOAD_MORE_CHARACTERS: 'LOAD MORE CHARACTERS',
  LOAD_MORE_CHARACTERS_SUCCESS: 'LOAD MORE CHARACTERS SUCCESS',
  LOAD_MORE_CHARACTERS_FAILURE: 'LOAD MORE CHARACTERS FAILURE',
};

export const getCharacterList = () => {
  return (dispatch: any) => {
    dispatch({type: characterActions.GET_CHARACTER_LIST});
    makeCharacterListCall()
      .then((response: any) => {
        dispatch({
          type: characterActions.GET_CHARACTER_LIST_SUCCESS,
          payload: response,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: characterActions.GET_CHARACTER_LIST_FAILURE,
          payload: error,
        });
      });
  };
};

export const loadMoreCharacters = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    if (state.characters.length < state.charactersNumber) {
      dispatch({type: characterActions.LOAD_MORE_CHARACTERS});
      makeCharacterListCall()
        .then((response: any) => {
          dispatch({
            type: characterActions.LOAD_MORE_CHARACTERS_SUCCESS,
            payload: response,
          });
        })
        .catch((error: any) => {
          dispatch({
            type: characterActions.LOAD_MORE_CHARACTERS_FAILURE,
            payload: error,
          });
        });
    }
  };
};
