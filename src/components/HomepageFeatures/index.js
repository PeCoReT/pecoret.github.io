import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Unlimited projects and users',
        Svg: require('@site/static/img/landing/infinity-solid.svg').default,
        description: (
            <>
                Despite other solutions PeCoReT does not limit the amount of projects or users.
                PeCoReT is open source and can be self-hosted.
            </>
        ),
    },
    {
        title: 'Customizable',
        Svg: require('@site/static/img/landing/user-pen.svg').default,
        description: (
            <>
                Customize different aspects of the application like report templates, checklists, vulnerability
                templates, ... . Or integrate tools using the REST-API
            </>
        ),
    },
    {
        title: 'Report generator',
        Svg: require('@site/static/img/landing/wand-magic-sparkles.svg').default,
        description: (
            <>
                Flexible report generator using weasyprint. Never struggle with Word documents again!
            </>
        ),
    },
    {
        title: 'Responsible Disclosure',
        Svg: require('@site/static/img/landing/bug.svg').default,
        description: (
            <>
                Manage advisories and share vulnerability details with vendors during the responsible disclosure
                process.
            </>
        ),
    },
    {
        title: 'Markdown',
        Svg: require('@site/static/img/landing/markdown.svg').default,
        description: (
            <>
                Write your executive summary, proofs, ... in markdown.
            </>
        ),
    },
        {
        title: 'Checklists',
        Svg: require('@site/static/img/landing/list-check.svg').default,
        description: (
            <>
               Afraid of forgetting something during the pentest? Track what you have tested on your assets using checklists.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
