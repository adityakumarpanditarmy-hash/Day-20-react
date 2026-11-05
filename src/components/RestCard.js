

export default function RestCard({restInfo}){
    const prefix="https://media-assets.swiggy.com/swiggy/image/upload/"

    return(
        <div>
          
          <img className="w-70 h-45 object-cover" src={`${prefix}${restInfo.imageId}`}></img>
        
        
        </div>
    )

}