import React from 'react';
import PropTypes from 'prop-types';

const DeleteCountdown = ({
    shouldShow,
    onDelete,
}) => {

    return (
        shouldShow ? (
            <span
                className='delete-countdown'
                onClick={onDelete}
            >
                [&times;]
            </span>
        ) : null
    );

};

DeleteCountdown.propTypes = {
    shouldShow: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteCountdown;
