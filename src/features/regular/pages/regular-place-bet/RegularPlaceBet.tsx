import React from 'react'
import "./RegularPlaceBet.scss"
import { Calendar, ChevronDown, MoveLeft, Redo2, RefreshCcw, Undo2, Wallet } from 'lucide-react';

import marketIcon from "./images/marketIcon.png";
import calenderIcon from "./images/schedule.png";

import chip10 from "./images/chips/10.png"
import chip20 from "./images/chips/20.png"
import chip50 from "./images/chips/50.png"
import chip100 from "./images/chips/100.png"
import chip500 from "./images/chips/500.png"
import chip1000 from "./images/chips/1000.png"


const RegularPlaceBet = () => {
    const chips = [
        { id: 1, img: chip10, name: "10", val: 10 },
        { id: 3, img: chip20, name: "10", val: 20 },
        { id: 4, img: chip50, name: "10", val: 50 },
        { id: 5, img: chip100, name: "10", val: 100 },
        { id: 6, img: chip500, name: "10", val: 5000 },
        { id: 7, img: chip1000, name: "10", val: 1000 }
    ]
    return <>
        <section className="rpb">
            <header className="rpb__header">
                <nav className="rpb__nav">
                    <div className="rpb__left">
                        <div className="rpb__back-btn">
                            <MoveLeft className='icon' />
                        </div>
                        <div className="rpb__h-content">
                            <div className="rpb__h-title">Place <span> Your Bet</span></div>
                            <div className="rpb__h-subtitle">Choose your chips and place your bet</div>
                        </div>

                    </div>
                    <div className="rpb__right">
                        <div className="rpb__balance-box">
                            <div className="rpb__balance-left">
                                <Wallet size={22} strokeWidth={2.3} />
                                <span>₹1000</span>
                            </div>
                            <ChevronDown className='balance-down-icon' />
                        </div>
                    </div>
                </nav>
            </header>
            <main className="rpb__container">
                <div className="rpb__market-date-selectors">
                    <div className="rpb__select-box">
                        <div className="rpb__select-box-left">
                            <div className="rpb__select-icon">
                                <img src={marketIcon} alt="Market Icon" />
                            </div>
                            <div className="rpb__select-content">
                                <span className="rpb__select-label">Market</span>
                                <span className="rpb__select-val">Single Patti</span>
                            </div>
                        </div>
                        <div className="rpb__select-box-right">
                            <button className="rpb__select-arrow">
                                <ChevronDown className='icon' />
                            </button>
                        </div>
                    </div>
                    <div className="rpb__select-box">
                        <div className="rpb__select-box-left">
                            <div className="rpb__select-icon">
                                <img src={calenderIcon} alt="Market Icon" />
                            </div>
                            <div className="rpb__select-content">
                                <span className="rpb__select-label">Date</span>
                                <span className="rpb__select-val">25/03/2026</span>
                            </div>
                        </div>
                        <div className="rpb__select-box-right">
                            <button className="rpb__select-arrow">
                                <ChevronDown className='icon' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rpb__open-close-container">
                    <div className="rpb__open-close-selector active">
                        <div className="rpb__open-close-radio"></div>
                        <div className="rpb__open-close-label">Open</div>
                    </div>
                    <div className="rpb__open-close-selector">
                        <div className="rpb__open-close-radio"></div>
                        <div className="rpb__open-close-label">Close</div>
                    </div>
                </div>
                <div className="rpb__chip-selectors">
                    {
                        chips?.map((chip) => {
                            return (
                                <button className="rpb__chip-btn" key={chip.id}>
                                    <img src={chip.img} alt={chip.name} />
                                </button>
                            )
                        })
                    }
                </div>
                <div className="rpb__bet-instructions">
                    <div className="rpb__instruction-line"></div>
                    <div className="rpb__instruction-text">select chips and bets</div>
                    <div className="rpb__instruction-line"></div>
                </div>
                <div className="rpb__digits-grid">
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                    <div className="rpb__digit-box">
                        <span className="rpb__digit-box-digit">44</span>
                    </div>
                </div>
                <div className="rpb__bet-actions">
                    <button className="rpb__action-btn">
                        <RefreshCcw className='icon' />
                        <span className="rpb__action-label">Undo</span>
                    </button>
                    <button className="rpb__action-btn">
                        <Redo2 className='icon' />
                        <span className="rpb__action-label">Undo</span>
                    </button>
                    <button className="rpb__action-btn place-bet">
                        <span className="rpb__action-label">Place Bet</span>
                    </button>
                </div>
                <div className="rpb__bet-instructions">
                    <div className="rpb__instruction-line"></div>
                    <div className="rpb__instruction-text">Last Results</div>
                    <div className="rpb__instruction-line"></div>
                </div>
                <div className="rpb__last-results">
                    <div className="rpb__last-result-blok">
                        <div className="rpb__last-result-date">
                            <Calendar className='icon' />
                            <span className="date">22/04/2026</span>
                        </div>
                        <div className="rpb__last-result-digit">33-44-55</div>
                    </div>
                    <div className="rpb__last-result-blok">
                        <div className="rpb__last-result-date">
                            <Calendar className='icon' />
                            <span className="date">22/04/2026</span>
                        </div>
                        <div className="rpb__last-result-digit">33-44-55</div>
                    </div>
                    <div className="rpb__last-result-blok">
                        <div className="rpb__last-result-date">
                            <Calendar className='icon' />
                            <span className="date">22/04/2026</span>
                        </div>
                        <div className="rpb__last-result-digit">33-44-55</div>
                    </div>
                    <div className="rpb__last-result-blok">
                        <div className="rpb__last-result-date">
                            <Calendar className='icon' />
                            <span className="date">22/04/2026</span>
                        </div>
                        <div className="rpb__last-result-digit">33-44-55</div>
                    </div>
                </div>
            </main>
        </section>


    </>
}

export default RegularPlaceBet