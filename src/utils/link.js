import React from 'react';
import Link as NextLink from 'next/link';

export default function Link({ children, to, activeClassName, partiallyActive, ...other }) {
    const internal = /^\/(?!\/)/.test(to);

    if (internal) {
        return (
            <NextLink
                href={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </NextLink>
        )
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}
