

export default function Comment(props) { //JSX
 
    return <>
        <h5>{props.comment.text}</h5>
        <span style={{ fontWeight: '700' }}>{props.comment.rate}</span>
    </>
}