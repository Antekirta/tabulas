import React from 'react'
import {hydrate} from 'react-dom'
import {App} from "./components/App/App";
import {Home} from "./components/pages/Home/Home";

hydrate(
    <App>
        <Home/>
    </App>,
    document.getElementById('root'))
