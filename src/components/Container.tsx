import {CSSProperties, ReactNode} from "react";

type ContainerProps = {
    styles: CSSProperties;
    children: ReactNode;
}

const Container = (props:ContainerProps) => {
    return (
        <div style={props.styles}>
            {props.children}
        </div>
    );
};

export default Container;