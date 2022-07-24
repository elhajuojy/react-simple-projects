import React from 'react';

const Answer = (props) => {
    const [click, chnageClick] = React.useState(false);
    function handleClick() {
        console.log(props.text)
        console.log(click)
        chnageClick((prev) => prev = !prev)
    }

    return (

        <button className={click ? "btn-clicked" : ""}
            onClick={handleClick}
        >
            {
                props.text
            }

        </button >

    );
};

export default Answer;