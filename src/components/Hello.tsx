
type HelloProps = {
    name: String;
    numberOfMessage:number;
    isLogged:Boolean;
}

const Hello = (props:HelloProps) => {
    return (
        <div>
          {props.isLogged ? (
                <div>
                <h3>Hellow {props.name} Welcome </h3>
                <h5>you have {props.numberOfMessage} unread messages</h5>
            </div>
          ):null}
        </div>
    );
};

export default Hello;