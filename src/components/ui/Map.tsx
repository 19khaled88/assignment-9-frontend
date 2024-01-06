"use client";
import React, { useState } from "react";
import { Map } from "pigeon-maps";
export function MyMap() {
  const arrayOfNumber: number[] = [50.879, 4.6997];
  const [center, setCenter] = useState([...arrayOfNumber]);
  const [zoom, setZoom] = useState(11);

  return (
    <Map
      height={300}
    //   center={center}
      defaultCenter={[50.879, 4.6997]} 
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    />
  );
}
