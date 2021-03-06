import Helmet from 'react-helmet';
import React from 'react';

const defaultDescription = 'A Website for contractor lists';

const TitleAndMetaTags = ({ title, ogDescription, ogUrl }) => {
    return (
        <Helmet title={title}>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            {ogUrl && <meta property="og:url" content={ogUrl} />}
            <meta property="og:image" content="/logo-og.png" />
            <meta
                property="og:description"
                content={ogDescription || defaultDescription}
            />
            <meta property="fb:app_id" content="623268441017527" />
            <link rel="icon" href="../../icons/favicon.ico" />
        </Helmet>
    )
}

export default TitleAndMetaTags;