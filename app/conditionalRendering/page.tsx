function Item({ name, isPacked }) {
// Way 1
  //     if (isPacked) {
  //   return null;
  // }
  // return <li className="item">
  //   {isPacked ? name + ' ✅' : name}
  //   </li>;
// Way 2
    // return (
    //     <li className="item">
    //         {isPacked ? (
    //             <del>
    //                 {name + ' ✅'}
    //             </del>
    //         ) : (name)}
    //     </li>
    // )
// Way 3
    // return (
    //     <li className="item">
    //         {name} {isPacked && '✅'}
    //     </li>
    // )
// Way 4
    // let itemContent = name;
    // if(isPacked) itemContent = name + ' ✅';

    // return (
    //     <li className="item">
    //         {itemContent}
    //     </li>
    // )
// Way 5
    let itemContent = name;
    if(isPacked){
        itemContent = (
            <del>
                {name + ' ✅'}
            </del>
        )
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    )
}


export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
      {1 < 2 && 3<4 && <div>Lala</div>}
    </section>
  );
}
