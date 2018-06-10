import React from 'react';
import Link from 'gatsby-link';
import ButtonLink from '../components/ButtonLink'

const About = () => {
    return (
        <React.Fragment>
            <h1>About Integrasio</h1>
            <ButtonLink to="/" type="primary">Back to Home</ButtonLink>
        </React.Fragment>
    )
}

export default About