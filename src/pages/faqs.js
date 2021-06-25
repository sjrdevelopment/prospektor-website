import * as React from 'react'
import * as styles from './styles.module.css'
import logo from '../images/logo-thinline-black.png' // Tell webpack this JS file uses this image

const IndexPage = () => {
    return (
        <main>
            <title>FAQs - Prospektor - pain-free product analytics</title>

            <div className={styles.masthead}>
                <h1 className={styles.heading1}>Prospektor FAQs</h1>
                <img
                    className={styles.logo}
                    src={logo}
                    alt="Prospektor - Welcome"
                />
            </div>



            <div className={styles.content}>
                <a href="/">Home</a>
                <h2>FAQs</h2>
                <li>
                    <h3>Who is Prospektor aimed at?</h3>
                    <p>Prospektor helps product teams quickly gather analytics data for their user journeys without the need for a development cycle. Mamny different organisations can benefit from this rapid approach to product analytics.</p>
                </li>
                <li>
                    <h3>How does out of the box analytics work?</h3>
                    <p>The Prospektor script is loaded onto your website or app, and straight away starts gathering useful insights such as how users drop off your journey, which areas they click on and interact with, and how much time they spend.</p>
                </li>
                <li>
                    <h3>What data is captured?</h3>
                    <p>Anything you want, but by default the script will capture user interaction time, location, browser and device stats, page name and meta data, load time, interactions and click events, and many more. You can also capture custom data using our browser extension tool which will automatically implement your own specification tags to the application.</p>
                </li>
                <li>
                    <h3>Does this replace my current analytics tool?</h3>
                    <p>Only if you want to - you can configure the data gathered to be integrated with your existing tools such as Adobe Analytics, Google, Mixpanel etc.</p>
                </li>
                <li>
                    <h3>How can I customise what data is gathered?</h3>
                    <p>Using our browser tool, you can click through your web application and define at each step any additional data you would like to capture, for example product name, or funnel step name.  This data is then seamlessly integrated with the application via the Propektor script.  No additional development required.</p>
                </li>

            </div>
        </main>
    )
}

export default IndexPage
