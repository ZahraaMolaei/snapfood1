import Food from './Food'

export default function App() { //JSX

  // let x = ''
  // let x:number = ''
  // bigint
  // string
  // boolean
  // any

  // IDE vs

  // code editor 
  //molaei change

  let foods = [
    {
      name: 'کباب', price: 100000, isFoodParty: false,
      comments: [
        { text: 'خوب بود', rate: 5 },
        { text: 'گرون بود', rate: 2 },
      ]
    },
    {
      name: 'جوجه', price: 90000, isFoodParty: false,
      comments: [
        { text: 'خوب بود', rate: 4 },
        { text: 'بد بود', rate: 1 },
      ]
    },
    {
      name: 'فلافل', price: 30000, isFoodParty: true,
      comments: [
        { text: 'خوب بود', rate: 5 },
        { text: 'گرون بود', rate: 2 },
      ]
    },
    {
      name: 'پیتزا', price: 200000, isFoodParty: false,
      comments: [
        { text: 'خوب بود', rate: 5 },
        { text: 'مو بود', rate: 1 },
      ]
    }
  ]

  return <>
    {
      foods.map(x => <><Food foodinfo={x}></Food><hr /><hr /></>)
    }
  </>
}

