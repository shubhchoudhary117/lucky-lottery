import { ChevronDown, Search, Wallet } from 'lucide-react'
import "./Header.scss"
import React from 'react'

import logo from "./images/regular.png"

const Header = () => {
    return <>

        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-left">
                    <div className="header__nav-logo">
                        <img src={logo} alt="" className="header__logo-img" />
                    </div>
                </div>
                <div className="header__nav-right">
                    <div className="header__nav-searchgroup">
                        <Search className='header__navsearch-icon' />
                        <input type="text" className="header__navsearch-input" placeholder='Search Bazar name' />
                    </div>
                    <div className="header__balance-box">
                        <div className="header__balance-left">
                            <Wallet size={22} strokeWidth={2.3} />
                            <span>₹1000</span>
                        </div>
                        <ChevronDown className='balance-down-icon' />
                    </div>
                </div>
            </nav>
        </header>

    </>
}

export default Header