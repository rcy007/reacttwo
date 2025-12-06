import Image from "next/image";

// https://i.imgur.com/MK3eW3As.jpg

export function Profile(){
    return (
        <Image src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine"
        width={100}
        height={100}
        />
    );
}

const scientists = [1, 2, 3];

export default function Gallery(){
    return (
        <section>
            <h1>Amazin scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            {scientists.map((n) => (
                <Profile key={n}/>
            ))}
        </section>
    );
}