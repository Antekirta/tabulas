import {IInitialState} from "../../../../shared/interfaces/IInitialState";
import {IAction} from "../../../../shared/interfaces/IAction";
import {REDUX_ACTIONS} from "../../../../shared/registry/REDUX_ACTIONS";

export const rootReducer = (state: IInitialState, action: IAction): IInitialState => {
    switch (action.type) {
        case REDUX_ACTIONS.HIGHLIGHT_MAIN_MENU_ITEM:
            return Object.assign(state, {
                highlightedMainMenuItemHref: action.payload
            } as IInitialState)
    }

    return state
}
