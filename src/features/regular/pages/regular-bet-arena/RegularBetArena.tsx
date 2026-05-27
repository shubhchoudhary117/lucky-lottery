import React from 'react'
import "./RegularBetArena.scss"
import { ExpandIcon } from 'lucide-react'
import Header from '../../../../shared/layouts/header/Header'

import jodiIcon from "./images/akada-icons/jodi.png"
import doublePatti from "./images/akada-icons/double-pati.png"
import singleAkad from "./images/akada-icons/single-akad.png"
import panaFamilyIcon from "./images/akada-icons/pana-family.png"
import groupJodiIcon from "./images/akada-icons/group-jodi.png"
import triplePatti from "./images/akada-icons/triple-patti.png"
import { useNavigate } from 'react-router-dom'

const RegularBetArena = () => {
    const navigate = useNavigate();
    const betTypes = [
        {
            id: 1,
            name: "Jodi",
            icon: jodiIcon,
        },
        {
            id: 2,
            name: "Double Patti",
            icon: doublePatti,
        },
        {
            id: 3,
            name: "Single Akada",
            icon: singleAkad,
        },
        {
            id: 4,
            name: "Pana Family",
            icon: panaFamilyIcon,
        },
        {
            id: 5,
            name: "Group Jodi",
            icon: groupJodiIcon,
        },
        {
            id: 6,
            name: "Triple Patti",
            icon: triplePatti,
        },
    ];

    const repeatedBetTypes = Array(4)
        .fill(betTypes)
        .flat();

    const openBet = () => {
        navigate("/regular/place-bet")
    }
    return <>
        <Header />
        <section className="rba">
            <main className="rba__container">
                <div className="rba__header">
                    <div className="rba__h-left">
                        <div className="rba__market-logo">
                            <img src="/assets/common/regular.png" alt="" className="rba__logo-img" />
                        </div>
                        <div className="rba__market-info">
                            <div className="rba__market-type">Regular Market</div>
                            <div className="rba__market-name">Morning Madhuri</div>
                            <div className="rba__running-for">Live Result-Running for tommorrow</div>
                        </div>
                    </div>
                    <div className="rba__h-mid">
                        <div className="rba__result-time">
                            <div className="rba__label">Result Time</div>
                            <div className="rba__result-time-val">9:00 AM</div>
                        </div>
                    </div>
                </div>
                <div className="rba__results-container">
                    <div className="rba__result-tv-section">
                        <div className="rba__tv-section-header">
                            <div className="rba__tv-live-marker">Live Table</div>
                            <div className="rba__tv-expand-action"><ExpandIcon className='icon' /></div>
                        </div>
                        <div className="rba__result-tv-box">
                            <div className="rba__resulb-box-banner"></div>
                        </div>
                    </div>
                    <div className="rba__result-information-box">
                        <div className="rba__result-info-heading">Result Information</div>
                        <div className="rba__result-info-list">
                            <div className="rba__result-info-row">
                                <div className="rba__result-info-label">Dealer will come</div>
                                <div className="rba__result-info-value">00:00:58</div>
                            </div>
                            <div className="rba__result-info-row">
                                <div className="rba__result-info-label">Dealer will come</div>
                                <div className="rba__result-info-value">00:00:58</div>
                            </div>
                            <div className="rba__result-info-row">
                                <div className="rba__result-info-label">Dealer will come</div>
                                <div className="rba__result-info-value">00:00:58</div>
                            </div>
                            <div className="rba__result-info-row">
                                <div className="rba__result-info-label">Dealer will come</div>
                                <div className="rba__result-info-value">00:00:58</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rba__bet-types">
                    <div className="rba__bet-types-heading">
                        Popular Bets
                    </div>

                    <div className="rba__bet-types-grid">

                        {repeatedBetTypes.map((item, index) => (
                            <button
                                key={`${item.id}-${index}`}
                                className="rba__bet-type-btn"
                                onClick={openBet}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="rba__bet-type-icon"
                                />

                                <span className="rba__bet-type-name">
                                    {item.name}
                                </span>
                            </button>
                        ))}

                    </div>

                </div>
            </main>
        </section>


    </>
}

export default RegularBetArena