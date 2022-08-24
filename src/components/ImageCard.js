import React from "react";


function ImageCard({image}) {
  const tags = image.tags.split(',')
  return (
    <div className="card rounded-lg container max-w-sm  overflow-cover shadow-2xl py-3">
      <img
        src={image.webformatURL}
        className="w-full h-auto rounded-lg shadow-sm"
      ></img>
      <p>
        Photo by <strong>{image.user}</strong>
      </p>
      <ul>
        <li>
          <strong>Views : </strong>{image.views}
        </li>
        <li>
          <strong>Downloads : </strong>{image.downloads}
        </li>
        <li>
          <strong>Likes : </strong>{image.likes}
        </li>
      </ul>
      <div className="tags space-x-6">
        <ul className="flex flex-row space-x-6">
             {tags.map((tag,index) =>(
               <li className="rounded-full w-auto bg-gray-500 px-2 shadow-zinc-800 mt-3" >{tag}</li>

             ))}
             
          
        </ul>
      </div>
    </div>
  );
}


export default ImageCard