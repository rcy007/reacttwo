import Gallery from "@/app/Gallery";
import { Profile } from "@/app/Gallery";
import Profy from "./passingProps";

const today = new Date();
const temp = 123;
// {abc: 123, def:334};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function Home(){
    const abc = 'bababuddbu';
    return (
        <>
        <Gallery />
        <Profile />
        <h1>{abc}</h1>
        <h1 style={{
            backgroundColor: 'white',
            color: 'black'
        }}>Whatever! This is your {temp} damn day: {formatDate(today)}</h1>
        <Profy person={{name: "Duffer", age: 25}} size={300}/>
        </>
    );
}