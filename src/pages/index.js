import * as React from "react"
import * as styles from "./styles.module.css"
import logo from "../images/logo-thinline-black.png" // Tell webpack this JS file uses this image
import sketch from "../images/sketch-upd.svg" // Tell webpack this JS file uses this image



const IndexPage = () => {
  return (
    <main>
      <title>Prospektor - pain-free product analytics</title>

      <div className={styles.masthead}>
        <h1 className={styles.heading1}>Prospektor</h1>
        <img className={styles.logo} src={logo} alt="Prospektor - Welcome" />
        <p>Welcome to the world of pain-free product analytics</p>
      </div>

      <div className={styles.lhs}>
        <p>Implementing Product Analytics is painful, slow and expensive</p>


      </div>

      <div className={styles.rhs}>

        <p>Prospektor uses automation to deliver rapid valuable insights into how your customers think, quicker than ever before</p>

      </div>

      <div className={styles.sketchWrapper}>
        <img className={styles.sketch} src={sketch} />
      </div>

      <div className={styles.secondary}>
        <h2>Tackling 3 key problem areas</h2>
        <div className={styles.secondary1}>
            <p>1. Streamlining tagging specs</p>
            <p>Work with out-the-box data capture, or create a custom spec with an easy to use browser extension that saves data as code</p>
        </div>
        <div className={styles.secondary2}>
            <p>2. Automatic implementation</p>
            <p>Save time and money by removing the endless back and forth between data analysis reguirements and developmemnt.  Prospektor captures your data out-the-box.
For more custom requirements, Prospektor automatically produces a JSON schema with your specification, making life easy for developers.</p>
        </div>
        <div className={styles.secondary3}>
            <p>3. Validation</p>
            <p>Confirm your products are tracking what they should be, using automation pipelines to confirm the results mastch the specfification.  Be alerted if anything changes to the product that would invalidate the analytics</p>
        </div>
      </div>


      <div className={styles.contact}>
        <p>Find out more about product analytics the pain-free way with Prospektor</p>
        <button>Get in touch today</button>
      </div>

    </main>
  )
}

export default IndexPage
