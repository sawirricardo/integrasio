import React from 'react';
import Link from 'gatsby-link';

import Container from '../Container';
import HeaderLink from './HeaderLink';
import { colors, fonts, media } from '../../theme';

import logoSvg from '../../icons/logo.svg'

const Header = ({ location }) => (
    <header
        css={{
            backgroundColor: colors.darker,
            color: colors.white,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            top: 0,
            left: 0,
        }}
    >
        <Container>
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 60,
                    [media.between('small', 'large')]: {
                        height: 50,
                    },
                    [media.lessThan('small')]: {
                        height: 40,
                    },
                }}
            >
                <Link
                    css={{
                        display:'flex',
                        marginRight: 10,
                        height: '100%',
                        alignItems: 'center',
                        color: colors.brand,

                        ':focus': {
                            outline: 0,
                            color: colors.white,
                        },

                        [media.greaterThan('small')]: {
                            width: 'calc(100% /6)'
                        },
                        [media.lessThan('small')]: {
                            flex: '0 0 auto'
                        }
                    }}
                    to="/"
                >
                    <img src={logoSvg} alt="integrasio-logo" height="28"/>
                    <span
                        css={{
                            color: colors.brandBlueDarker,
                            marginLeft: 10,
                            fontWeight: 900,
                            fontSize: 20,
                            lineHeight: '20px',
                            [media.lessThan('large')]: {
                                fontSize: 16,
                                marginTop: 1
                            },
                            [media.lessThan('small')]: {
                                //Visually hidden
                                position: 'absolute',
                                overflow: 'hidden',
                                cliip: 'rect( 0 0 0 0)',
                                height: 1,
                                width: 1,
                                margin: -1,
                                padding: 0,
                                border: 0
                            }
                        }}
                    >
                        Integrasio
                    </span>
                    <span
                        css={{
                            color: colors.brand,
                            fontWeight: 900,
                            fontSize: 20,
                            lineHeight: '20px',
                            [media.lessThan('large')]: {
                                fontSize: 16,
                                marginTop: 1
                            },
                            [media.lessThan('small')]: {
                                //Visually hidden
                                position: 'absolute',
                                overflow: 'hidden',
                                cliip: 'rect( 0 0 0 0)',
                                height: 1,
                                width: 1,
                                margin: -1,
                                padding: 0,
                                border: 0
                            }
                        }}
                    >
                        .com
                    </span>
                    
                </Link>
                <nav
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        WebkitOverflowScrolling: 'touch',
                        height: '100%',
                        width: '60%',

                        [media.size('xsmall')]: {
                            flexGrow: '1',
                            width: 'auto',
                        },
                        [media.greaterThan('xlarge')]: {
                            width: null,
                        },
                        [media.lessThan('small')]: {
                            maskImage:
                                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
                        },
                    }}>
                    <HeaderLink
                        isActive={location.pathname.includes('/about/')}
                        title="About Integrasio"
                        to="/about/"
                    />
                    <HeaderLink
                        isActive={location.pathname.includes('/tutorial/')}
                        title="Meet our Teams"
                        to="/tutorial/tutorial.html"
                    />
                    <HeaderLink
                        isActive={location.pathname.includes('/community/')}
                        title="How it works"
                        to="/community/support.html"
                    />
                    <HeaderLink
                        isActive={location.pathname.includes('/blog')}
                        title="Blog"
                        to="/blog/"
                    />
                </nav>
            </div>
        </Container>
    </header>
)

export default Header