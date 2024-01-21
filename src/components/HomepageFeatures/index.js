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
                Tailor PeCoReT to fit your unique needs.
                Customize report templates, vulnerability templates, and checklists to align the application with your specific assessment methodologies and reporting preferences.
            </>
        ),
    },
    {
        title: 'Report generator',
        Svg: require('@site/static/img/landing/wand-magic-sparkles.svg').default,
        description: (
            <>
                Bid farewell to traditional Word documents.
                PeCoReT features a state-of-the-art report generator based on WeasyPrint, ensuring sleek and professional reports for your assessments.
            </>
        ),
    },
    {
        title: 'Advisory Management',
        Svg: require('@site/static/img/landing/bug.svg').default,
        description: (
            <>
                Effortlessly navigate the responsible disclosure process with our integrated Advisory Management application.
                Track, manage, and collaborate on advisories as part of a streamlined and secure disclosure workflow.
            </>
        ),
    },
    {
        title: 'Markdown',
        Svg: require('@site/static/img/landing/markdown.svg').default,
        description: (
            <>
                Simplify your documentation with Markdown.
                Write and format your findings, notes, advisories and more effortlessly using this lightweight and intuitive markup language.
            </>
        ),
    },
        {
        title: 'Checklists',
        Svg: require('@site/static/img/landing/list-check.svg').default,
        description: (
            <>
               Stay organized and keep track of your progress with built-in checklists. Mark off completed tasks, ensuring that nothing is overlooked during your assessments.
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
