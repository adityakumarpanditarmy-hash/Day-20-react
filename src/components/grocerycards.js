

// export default function GroceryCard({groceryData}) {
//   return (
//     <div className="w-[20%] p-2">
//         <a href={groceryData?.action?.link}>
//            <img src={groceryData.imageId}
//   alt={groceryData.accessibility.altText}
// />
//         </a>
//     </div>
//   )
// }

export default function GroceryCard({ groceryData }) {
  const CDN_PREFIX = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
  return (
    
    <div className="w-24 sm:w-28 flex shrink-0 p-2 justify-between gap-7">
      <a href={groceryData?.action?.link} className="group">
      
        <img
          src={`${CDN_PREFIX}${groceryData?.imageId}`}
          alt={groceryData?.description || "Grocery item"}
          className="w-full h-32 object-cover rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition-transform duration-200"
        />
        <p className="text-sm text-center font-medium text-gray-700 whitespace-normal">
          {groceryData?.description}
        </p>
      </a>
      </div>


      
   
  );
}