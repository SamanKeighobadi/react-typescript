import {ChangeEvent} from 'react'

type InputPorps = {
    handleInputChange : (event:ChangeEvent<HTMLInputElement>) => void;
    value:string;
}

const Input = (props:InputPorps) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={ props.handleInputChange} />
        </div>
    );
};

export default Input;