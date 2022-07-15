import React from "react";
import style from "./About.module.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <h2>A Growing Protocal Ecosystem</h2>
        <p>
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className={style["card-container"]}>
          <div className={style.card}>
            <AboutCard
              icon={<SiHiveBlockchain className={style.icon} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract."
            />
          </div>
          <div className={style.card}>
            <AboutCard
              icon={<SiStrapi className={style.icon} />}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
          </div>
          <div className={style.card}>
            <AboutCard
              icon={<SiFsecure className={style.icon} />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
          </div>
          <div className={style.card}>
            <AboutCard
              icon={<VscServerProcess className={style.icon} />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
        <a href="/" className={`btn ${style.btn}`}>
          Use DeFi
        </a>
      </div>
    </div>
  );
};

export default About;
