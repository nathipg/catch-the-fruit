import React from 'react';

import './InlineList.scss';

const InlineList = props => {
    return (
        <div className="InlineList">
            {props.children}
        </div>
    );
};

export default InlineList;