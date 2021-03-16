import React from 'react';

const Comments = (props) => {
    const { id, name, email } = props.comment;
    return (
        <div>
            <p>id: {id}</p>
            <p>Name: {name}</p>
            <p>Mailto: {email}</p><br/>
        </div>
    );
};

export default Comments;