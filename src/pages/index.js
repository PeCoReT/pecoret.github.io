import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container banner">
                <img src="/img/logo.svg"/>
                <div className={styles.buttons}>
                    <span className="col--offset-3"></span>
                    <Link
                        className="button button--secondary button--lg landing-button col"
                        to="/docs/intro">
                        Get Started
                    </Link>
                    <span className="margin--md"></span>
                    <Link className="button button--info button--lg col landing-button"
                          to="https://github.com/pecoret/pecoret/releases">
                        Download
                    </Link>
                    <span className="col--offset-3"></span>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Pentest Collaboration and Reporting Tool`}
            description="An open source pentest collaboration and reporting tool. Selfhosted penetration test management platform.<head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
