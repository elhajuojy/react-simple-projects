import React from 'react';

const Answer = (props) => {
    const [isDisabled, setDisabled] = React.useState(true)

    return (
        console.log(props.isfinsh),

        <button
            className={props.click === props.text ? "btn-clicked" : ""}
            onClick={props.handelCheckAnswer(props.text)}
            value={props.text}
        // todo:i need to do disabled 
        // disabled
        >
            {
                props.text
            }

        </button >

    );
};

export default Answer;