import React from 'react'

const mainLogoSvg = require('../../../../assets/icons/main-logo.svg')

function MainLogo() {
    return (
        <div className="main-logo">
            <a href="/">
                <svg className="main-logo__svg"
                     width={100}
                     height={100}
                     viewBox="0 0 100 100">
                    <use xlinkHref={mainLogoSvg.url}></use>
                </svg>
            </a>
        </div>
    )
}

export {MainLogo}
