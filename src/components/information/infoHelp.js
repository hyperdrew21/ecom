import React from 'react';

export function UnderlinedTitle({ className, title }) {
    return (
        <div className={`${className} underlined-title`}>
            {title}
        </div>
    )
}

export function InfoTitle({ className, title, value }) {
    return (
        <div className={`${className} info-title`}>
            <div className='info-title_title'>
                {title}
            </div>
            <div className='info-title_value'>
                {value}
            </div>
        </div>
    )
}