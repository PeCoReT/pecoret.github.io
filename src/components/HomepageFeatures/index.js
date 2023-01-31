import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Unlimited Users and Projects',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Despite other solutions, PeCoReT provides no limitation on users or projects.
            </>
        ),
    },
    {
        title: 'Easy Report Creation',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Do not waste time in writing the report. Create reports from templates in a couple of minutes.
            </>
        ),
    },
    {
        title: 'Make PeCoReT yours!',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                PeCoReT can be customized on multiple places.
                Create custom report or vulnerability templates or bring your own checklists.
            </>
        ),
    },
    {
        title: "Markdown",
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Write your texts in markdown. Markdown can even be used to write the report.
            </>
        )
    },
    {
        title: "REST-API",
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Do you want to integrate your tools with PeCoReT, or need some custom workflow?
                PeCoReT provides a <a href="/docs/advanced_guide/rest-api">REST-API</a>.
            </>
        )
    },
    {
        title: "Internationalization",
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                PeCoReT supports multi-language reports and vulnerability templates.
            </>
        )
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
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
