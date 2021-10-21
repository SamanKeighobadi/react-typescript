type NavbarProps = {
    children: string;
}

const Navbar = (props:NavbarProps) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Navbar;