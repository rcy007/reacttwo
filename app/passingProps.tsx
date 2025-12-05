import Image from "next/image";

export function Avatar({person, size = 100}: {person: {name: string; age: number}, size: number}){
    return (
        <Image src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb" 
        alt={person.name}
        width={size}
        height={size} />
    )
}

export default function Profy(props){
    return (
        <>
        <Avatar person={{name: "Idiot", age: 25}} size={100}/>
        <Avatar {...props} />
        </>
    )
}