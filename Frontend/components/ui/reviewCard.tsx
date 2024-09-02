import React from "react"
import "../../app/styles.css";
import Image from "next/image";
import Person1 from "../images/person1.jpg";

const ReviewCard: React.FC = () => {
    return(
        <>
            <div className="section7card">
            <div className="reviewCardTop">
            <div className="reviewImg">
            <Image
              src={Person1}
              alt="Professional Teams"
              className="ml-2 rounded-full border-2 border-white"
              height="200"
              width="110"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            </div>
            <div className="reviewCardTopHead">
                <p className="text-xl text-bold">Aditya Sharma</p>
                <p>CEO, Software Company</p>
                <p className="text-xl text-bold">⭐⭐⭐⭐⭐ 5.0</p>

            </div>
            </div>
            <div className="reviewCardBottom">
                <p>The Stay was one of the Coziest one&apos;s, The best  part was the Cleanliness</p>
            </div>
          </div>
        </>
    )
}

export default ReviewCard;