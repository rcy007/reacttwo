import Gallery from "@/app/props/propy";
import { Profile } from "@/app/props/propy";

export default function app(){
    return (
        <Gallery>
            <Profile name="Maria Skłodowska-Curie" imageUrl="szV5sdG" prof="physicist and chemist"
      award={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
      discover="polonium (chemical element)"/>
      <Profile name="Katsuko Saruhashi" imageUrl="YfeOqp2" prof="geochemist"
      award={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      discover="a method for measuring carbon dioxide in seawater"/>
        </Gallery>
    );
}

      