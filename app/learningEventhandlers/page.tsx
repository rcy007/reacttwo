'use client';

export default function Lalala(){
    function handleClick(){
        alert("You clicked it!");
    }
    return (
        <>
        {/* Way 1 */}
        <button onClick={handleClick}>
            Lala
        </button>
        <br />
        {/* Way 2 */}
        <button onClick={function handy() {alert("You fucking clicked!!")}}>
            Lolo
        </button>
        <br />
        {/* Way 3 */}
        <button onClick={() => alert("Bastard stop clicking!")}>
            Lulu
        </button>
        <br />
        </>       
    );
}