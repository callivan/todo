import { todosSlice } from '../../slice';

const actions = todosSlice.actions;

type TActionKeys = (typeof actions)[keyof typeof actions];

type TActionTypes = TActionKeys[keyof TActionKeys];

type TActionPayloads = Parameters<TActionKeys>[0];

interface IActionCreatorProps {
  type: TActionTypes;
  payload: TActionPayloads;
}

export const actionCreator = (props: IActionCreatorProps) => props;
