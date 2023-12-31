"use client";

import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemType } from './constants';



function WeekCard({ week, image }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.CARD,
    item: { week },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const imageStyle = week === "1" ? { filter: "grayscale(100%)" } : {}; 

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="shadow-lg rounded-xl p-4 w-1/4 h-1/4">
      <img src={image} alt={`Week ${week} Image`} style={imageStyle} className="object-cover" />
      <p className="text-center mt-2">Week {week}</p>
    </div>
  );
}



export default WeekCard;