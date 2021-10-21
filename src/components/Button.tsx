import {MouseEvent} from "react";

type ButtonProps = {
    handleClick : (event: MouseEvent<HTMLButtonElement> ) => void;
}

const Button = (props:ButtonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}>click button</button>            
        </div>
    );
};

export default Button;