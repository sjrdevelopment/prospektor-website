import * as React from 'react'
import * as styles from './styles.module.css'
import logo from '../images/logo-thinline-black.png' // Tell webpack this JS file uses this image
import sketch from '../images/sketch-upd.svg' // Tell webpack this JS file uses this image

const IndexPage = () => {
    return (
        <main>
            <title>Prospektor - pain-free product analytics</title>

            <div className={styles.masthead}>
                <h1 className={styles.heading1}>Prospektor</h1>
                <img
                    className={styles.logo}
                    src={logo}
                    alt="Prospektor - Welcome"
                />
            </div>

            <div className={styles.lhs}>
                <p>
                    Implementing Product Analytics is painful, slow and
                    expensive
                </p>
            </div>

            <div className={styles.rhs}>
                <p>
                    Prospektor uses automation to deliver rapid valuable
                    insights into how your customers think, quicker than ever
                    before
                </p>
            </div>

            <div className={styles.sketchWrapper}>
                <img className={styles.sketch} src={sketch} alt="test"/>
            </div>

            <div className={styles.secondary}>
                <h2>Tackling 3 key problem areas</h2>
                <div className={styles.moreInfo}>
                    <div className={styles.secondary1}>
                        <h4>1. Streamlining tagging specs</h4>
                        <p>
                            Work with out-the-box data capture, or create a
                            custom spec with an easy to use browser extension to
                            define what data points are important to you.
                        </p>
                    </div>
                    <div className={styles.secondary2}>
                        <h4>2. Automatic implementation</h4>
                        <p>
                            Prospektor automatically implemements your journey
                            tagging for you, while providing developers with an
                            easy to use JSON data representation of your
                            requirements for customisation.
                        </p>
                    </div>
                    <div className={styles.secondary3}>
                        <h4>3. Validation</h4>
                        <p>
                            Confidence that your products are tracking what they
                            should be, using automation pipelines to confirm the
                            results match your expectations. Be alerted if
                            anything changes to the product that would
                            invalidate the analytics.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <a className={styles.link} href="/faqs">FAQs</a>
            </div>

            <div className={styles.contact}>
                <p>
                    Find out more about product analytics the pain-free way with
                    Prospektor
                </p>
                <a
                    className={styles.button}
                    href="mailto:stuart@prospektor.co.uk"
                >
                    Get in touch today
                </a>
            </div>
        </main>
    )
}

export default IndexPage
