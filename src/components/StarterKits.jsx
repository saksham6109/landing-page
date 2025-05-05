import React from 'react';

const StarterKits = () => {
  return (
    <div className="bg-white p-3 ">
      <p className="text-gray-500 text-lg font-semibold text-center sm:text-left">
        TOP 5 REACT NATIVE STARTER KITS
      </p>

      {[
        {
          img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
          title: "Lorem ipsum dolor Reprehenderit, perferendis",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, enim.",
        },
        {
          img: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0fGVufDB8fDB8fHww",
          title: "Necessitatibus, earum Lorem, ipsum dolor..",
          desc: "In nemo necessitatibus, repudiandae architecto maiores ex facilis eveniet perspiciatis nobis nam elit. Natus, enim.",
        },
        {
          img: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWN0fGVufDB8fDB8fHww",
          title: "Eum est exercitationem nemo. Pariatur?",
          desc: "Quas ad, autem hic perspiciatis odit voluptates? consectetur adipisicing elit. Natus, enim.",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-5">
          <img className="h-20 w-30 object-contain" src={item.img} alt="" />
          <div className="flex flex-col justify-center sm:items-start items-center gap-1 p1-2">
            <h3 className="text-xl font-semibold text-gray-800 text-center sm:text-left">{item.title}</h3>
            <p className="text-lg font-thin text-center sm:text-left">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarterKits;
