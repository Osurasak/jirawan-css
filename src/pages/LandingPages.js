import logo from "../assets/icons/death.png";
import { useNavigate } from "react-router-dom";

function LandingPages(){
    const Navigate = useNavigate();
    const handleToDetail = () =>{
        Navigate("/details");
    };

    return(
        <div className="text-center font-mono text-white subpixel-antialiased underline uppercase">
            <p className="font-mono text-7xl font uppercase">Adout Me</p>
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-[15%] cursor-pointer p-6"/>
            </div>
            <p className="text-md mt-2 font-bold text-white mx-8 md:mx-36">
            It can be said thatno one prefers a life in darkness to a life with a bright future. Sometimes it is unavoidable that darkness comes into our lives, however,
            we know that when tomorrow comes, all darkness will disappear.
            With the presence of daylight,
            we will gain hope and courage.
            The light of the day will make things appear more vividly to us,
            so we are not frightened by what we cannot see.
            We can make the sun rise at night as well.
            Just focus the mind at the center of our body
            until the light glows within.
            When this inner sun rises at the center of our body,
            we will feel even happier than when we see the sun of the day.{"/n"}
            </p>{" "}
            <br />
            <button className="font-mono text-xl text-while underline"
                    onClick={() =>handleToDetail()}
            >
                NEXT</button>
        </div>
    );
}

export default LandingPages;