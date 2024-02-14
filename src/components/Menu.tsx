import {MouseEvent} from 'react';   // enables backend handling of mouse events

function Menu() {
    const items = ['First', 'Second', 'Third'];
    const notification = () =>
        {return items.length === 0 ? <span>Menu Empty.</span> : <span>Menu Populated.</span>} // ternary operator
    const sidenote = () =>
        {return items.length > 0 && <div>Menu Exists.</div>} // true && 'spam' returns 'spam'; false && 'spam' returns false
    const clickresult = (event: MouseEvent) =>
        {alert(event.clientY); return <span>{event.clientY}</span>}
    return <>
        {notification()}
        {sidenote()}
        <button onClick={(event) => clickresult(event)}>Alert Y</button>
        <ul className="menu">
        {items.map((item, index) => <li key={item} className="menu-item" onClick={(event) => alert(event.clientX)}>{item} = {index}</li>)}
        </ul>
    </>
}

export default Menu;