type InputPorps = {
    handleInputChange : () => void;
}

const Input = (props:InputPorps) => {
    return (
        <div>
            <input type="text" onChange={props.handleInputChange} />
        </div>
    );
};

export default Input;