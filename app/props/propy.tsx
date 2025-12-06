import { ReactNode } from "react";

export function getImageUrl(imageId: string, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

type ProfileType = {
    name: string,
    imageUrl: string,
    prof: string,
    award: string[],
    discover: string
}

export function Profile({name, imageUrl, prof, award, discover}: ProfileType){
    return (
        <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageUrl)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {prof}
          </li>
          <li>
            <b>Awards: {award.length} </b> 
            ({award.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discover}
          </li>
        </ul>
      </section>
    );
}

type GalleryProps = {
  children: ReactNode;
}

export default function Gallery({children}: GalleryProps) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {children}
    </div>
  );
}
