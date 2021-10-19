type PersonProps = {
    name : {
       last:string;
       first:string;
    }
}

const Person = (props:PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    );
};

export default Person;