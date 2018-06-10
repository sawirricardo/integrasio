import React, { Component } from 'react';
import Flex from '../components/Flex';
import Header from '../components/LayoutHeader'

import { media } from '../theme';

import './index.css'

class Template extends Component {
    render() {
        const { children, location } = this.props;
        return(
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 'calc(100vh - 40px)'
                }}
            >
                <Header location={location} />
                <Flex
                    direction="column"
                    shrink="0"
                    grow="1"
                    valign="stretch"
                    css={{
                        flex: '1 0 auto',
                        marginTop: 60,
                        [media.between('medium', 'large')]: {
                            marginTop: 50,
                        },
                        [media.lessThan('medium')]: {
                            marginTop: 40,
                        },
                    }}
                >
                <span>{JSON.stringify(location)}</span>
                {children()}
                </Flex>
            </div>
        )
    }
}

export default Template;