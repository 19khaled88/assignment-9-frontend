import React from "react";

const Vidoe = () => {
  const id1 = "wYjp2zoqQrs";
  const id2 = "Mne7IBAU9Nc";
  return (
    <div className="pt-10 pb-16">
      <h1 className="text-center text-2xl py-10 text-gray-500">Videos</h1>
      <div className="aspect-w-16 aspect-h-9 px-5 flex flex-col gap-16 md:gap-5 md:flex-row">
        <span  className="w-full h-80 md:text-center">
          <iframe
            className="w-full h-80 "
            src={`https://www.youtube.com/embed/${id1}`}
            // src={`https://www.youtube.com/watch?v=E32xFNEflls`}
            title="YouTube video player"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="py-4 text-lg lg:text-2xl text-gray-600">The basic Rules of Basketball | BasketBall</p>
        </span>
        <span  className="w-full h-80 md:text-center">
          <iframe
            className="w-full h-80 "
            src={`https://www.youtube.com/embed/${id2}`}
            // src={`https://www.youtube.com/watch?v=E32xFNEflls`}
            title="YouTube video player"
            style={{ border: 0, borderRadius: "10px" }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="py-4 text-lg lg:text-2xl text-gray-600">The basic Rules of Football | FootBall</p>
        </span>
      </div>
    </div>
  );
};

export default Vidoe;
