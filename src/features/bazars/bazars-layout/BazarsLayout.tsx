import React from 'react'
import "./BazarsLayout.scss"
import { Search } from 'lucide-react'

import regularBazarIcon from "./images/bazar-icons/regular.png"
import { Outlet } from 'react-router-dom'
import Header from '../../../shared/layouts/header/Header'

const BazarsLayout = () => {
    return <>
        <section className="bz-layout">
            <Header />
            <main className="bz-layout__container">
                <div className="bz-layout__bazar-tabs">
                    <button className="bz-layout__bazar-tab active">
                        <img src={regularBazarIcon} alt="" className="bz-layout__bazar-tab-icon" />
                        <div className="bz-layout__tab-title">Regular Market</div>
                    </button>
                    <button className="bz-layout__bazar-tab">
                        <img src={regularBazarIcon} alt="" className="bz-layout__bazar-tab-icon" />
                        <div className="bz-layout__tab-title">King Market</div>
                    </button>
                </div>
                <div className="bz-layout__dynamic-outlet">
                    <Outlet/>
                </div>
            </main>
        </section>
    </>
}

export default BazarsLayout