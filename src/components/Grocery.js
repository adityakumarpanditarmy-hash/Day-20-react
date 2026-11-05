import GroceryCard from "./grocerycards.js";
import { groceryGridCards } from "../utils/grocery.js";



export default function GroceryOptions() {
  return (
    <div className="bg-[#f7f7f7] py-10 mt-15 ">
    <h1 className="text-2xl font-bold">Shoap Groceries on Instamart</h1>
        <div className="flex container mx-auto gap-4 px-4 w-full overflow-x-auto whitespace-nowrap scrollbar-hide ">
        {
            groceryGridCards.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard> )
        }
        </div>
    </div>
  )
}