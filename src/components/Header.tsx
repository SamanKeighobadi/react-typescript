import {ReactNode} from 'react'

type HeaderProps = {
    children:ReactNode;
}

const Header = (props:HeaderProps) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Header;