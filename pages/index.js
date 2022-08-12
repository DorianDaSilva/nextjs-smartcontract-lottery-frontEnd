//imports work withour front end
//require does not
//nodejs != ecmascript / javascript
//backend JS is different from front end JS

import Head from "next/head"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Raffle</title>
                <meta name="description" content="Generated by Our Smart Contract Raffle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader></ManualHeader>*/}
            <br />
            <Header />
            <LotteryEntrance />
            {/*header/connect/navbar*/}
        </div>
    )
}