import React from 'react'
import {hydrate} from 'react-dom'
import {App} from "./components/App/App";
import {Solutions} from "./components/pages/Solutions/Solutions";

hydrate(
    <App>
        <Solutions/>
    </App>,
    document.getElementById('root'))
