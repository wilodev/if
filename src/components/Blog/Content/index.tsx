import React from "react";

function BlogContent() {
  return (
    <div className="px-10 my-4 py-6 rounded shadow-xl bg-white w-4/5 mx-auto">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">Quienes somos</span>
        <a
          className="px-2 py-1 
             bg-blue-600
                         
            text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          Infinyti
        </a>
      </div>
      <div className="mt-2">
        <a
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href="#"
        >
          Lorem ipsum dolor sit amet
        </a>
        <p className="mt-2 text-gray-600">
          Ille enim occurrentia nescio quae comminiscebatur; Eadem nunc mea
          adversum te oratio est. Sit sane ista voluptas. Omnes enim iucundum
          motum, quo sensus hilaretur.
        </p>
      </div>
    </div>
  );
}

export { BlogContent };
