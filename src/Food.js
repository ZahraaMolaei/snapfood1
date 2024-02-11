
import Comment from './Comment'

export default function Food(props) { //JSX

  return <div style={props.foodinfo.isFoodParty ? { backgroundColor: 'green' } : {}}>
    <h1>{props.foodinfo.name}</h1>
    <h3>{props.foodinfo.price} تومان</h3>

    <h2>Comments:</h2>
    {
      props.foodinfo.comments.map(x =>
        <Comment comment={x}></Comment>
      )
    }

    <button>سفارش دهید</button>
  </div>
}
