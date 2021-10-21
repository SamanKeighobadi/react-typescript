type StausProps = {
    status: 'loading'| 'success' | 'error';
}

const Status = (props:StausProps) => {

    let message ;
    if(props.status === 'loading')
        message = 'Loading...'
    else if(props.status === 'success')
        message = 'success'
    else if(props.status === 'error')
        message = 'error'
    
    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default Status;