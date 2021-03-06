import { createElement } from 'glamor/react'

const Flex = ({
    basis='auto',
    children,
    direction='row',
    grow=0,
    halign = 'flex-start',
    shrink = 1,
    type = 'div',
    valign = 'flex-start',
    ...rest
}) =>
    createElement(
        type,
        {
            css: {
                display: 'flex',
                flexDirection: direction,
                glexGrow: grow,
                flexShrink: basis,
                justifyContent: direction ==='row' ? halign : valign,
                alignItems: direction === 'row' ? valign : halign,
            },
            ...rest,
        },
        children,
    )

export default Flex