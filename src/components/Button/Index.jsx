export const Button = (props) => {
    const {action} = props;
    return (
        <div>
            <button onClick={action}> Next </button>
        </div>         
    )
}