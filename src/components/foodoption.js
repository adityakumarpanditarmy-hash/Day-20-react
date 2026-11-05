import { imageGridCards } from "../utils/data.js";
import FoodCard from "./foodCard";

export default function FoodOptions() {
  return (
    <>
        <div className="max-w-[80%] container mx-auto flex  flex-wrap mt-10 ">
        {
            imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard> )
        }
        </div>
    </>
  )
}