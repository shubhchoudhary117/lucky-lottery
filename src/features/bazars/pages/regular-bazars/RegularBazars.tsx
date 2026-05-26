import React from 'react'
import "./RegularBazars.scss"

import tvIcon from "./images/tv.png"

const bazarsData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: [
        "MORNING MADHURI",
        "TIME KALYAN",
        "MAIN SRIDEVI",
        "RAJDHANI NIGHT",
        "KALYAN STARLINE",
        "MADHURI DAY",
        "MILAN MORNING",
        "SUPREME NIGHT",
        "KALYAN NIGHT",
        "SRIDEVI NIGHT"
    ][index % 10],

    result: "20-20-2003",
    market: "Regular Market",
    liveResult: "Running For Tomorrow",
    openTime: "09:00 AM",
    closeTime: "09:00 AM",
    countdown: "16h 12m 51s"
}))

const RegularBazars = () => {
    return (
        <section className="regular-bz">
            <main className="regular-bz__container">

                <div className="regular-bz__bazars-grid">

                    {bazarsData.map((bazar) => (
                        <div
                            className="regular-bazar-card"
                            key={bazar.id}>

                            <div className="regular-bazar-card__header">
                                <div className="regular-bazar-card__left">
                                    <div className="regular-bazar-card__logo">
                                        ♠
                                    </div>
                                    <div className="regular-bazar-card__info">
                                        <h3 className="regular-bazar-card__title">
                                            {bazar.title}
                                        </h3>
                                        <span className="regular-bazar-card__result">
                                            {bazar.result}
                                        </span>
                                    </div>
                                </div>

                                <div className="regular-bazar-card__right">
                                    <img
                                        src={tvIcon}
                                        alt=""
                                        className="regular-bazar-card__live-tv"
                                    />
                                </div>
                            </div>

                            <div className="regular-bazar-card__meta">
                                <div className="regular-bazar-card__meta-item">
                                    <span className="regular-bazar-card__meta-label">
                                        MARKET
                                    </span>
                                    <span className="regular-bazar-card__meta-value">
                                        {bazar.market}
                                    </span>
                                </div>
                                <div className="regular-bazar-card__divider"></div>
                                <div className="regular-bazar-card__meta-item">
                                    <span className="regular-bazar-card__meta-label">
                                        LIVE TV RESULT
                                    </span>
                                    <span className="regular-bazar-card__meta-value">
                                        {bazar.liveResult}
                                    </span>
                                </div>
                            </div>

                            <div className="regular-bazar-card__timings">
                                <div className="regular-bazar-card__time-item">
                                    <span className="regular-bazar-card__time-label">
                                        OPEN TIME
                                    </span>
                                    <span className="regular-bazar-card__time-value">
                                        {bazar.openTime}
                                    </span>
                                </div>

                                <div className="regular-bazar-card__time-divider"></div>
                                <div className="regular-bazar-card__time-item">
                                    <span className="regular-bazar-card__time-label">
                                        CLOSE TIME
                                    </span>
                                    <span className="regular-bazar-card__time-value">
                                        {bazar.closeTime}
                                    </span>
                                </div>

                                <div className="regular-bazar-card__time-divider"></div>
                                <div className="regular-bazar-card__time-item">
                                    <span className="regular-bazar-card__time-label">
                                        COUNTDOWN
                                    </span>
                                    <span className="regular-bazar-card__countdown">
                                        {bazar.countdown}
                                    </span>
                                </div>
                            </div>
                            <button className="regular-bazar-card__play-btn">
                                Open Market
                            </button>
                        </div>
                    ))}

                </div>

            </main>
        </section>
    )
}

export default RegularBazars