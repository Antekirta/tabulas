import Redux from 'redux'

interface IAction<T = string> extends Redux.Action {
    payload?: any
}

export {IAction}
