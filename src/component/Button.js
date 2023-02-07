const Button = (props) => {
    return(
        <button onClick={props.onClick} className={`rounded-md shadow-lg p-2 px-5 hover:shadow-gray-900 hover:border-slate-50 border hover:bg-transparent ${props.style}`} > {props.title}</button>
    )
}

export default Button;