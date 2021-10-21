
type ButtonProps = {
    handleClick : () => void;
}

const Button = (props:ButtonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}>click button</button>            
        </div>
    );
};

export default Button;