import {REDUX_ACTIONS} from "../../../../shared/registry/REDUX_ACTIONS";
import {IAction} from "../../../../shared/interfaces/IAction";

export const highLightMainMenuItem = (payload: string): IAction => {
    return {
        type: REDUX_ACTIONS.HIGHLIGHT_MAIN_MENU_ITEM,
        payload
    }
}
