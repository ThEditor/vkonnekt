import React from 'react';
import { cn } from '../utils/cn';

interface RightSideDotsProps {
  links: string[];
}

const RightSideDots = (dots: RightSideDotsProps) => {
  const [active, setActive] = React.useState(0);
    return (
    <div className="flex flex-col gap-2 fixed top-1/2 right-6 transform -translate-y-1/2">
      {dots.links.map((link, index) => (
        <a onClick={() => setActive(index)} key={link} href={`#${link}`} className={cn("dot-link w-6 h-6 border-4 border-black rounded-full", active == index ? "bg-black" : "bg-transparent")}></a>
      ))}
    </div>
  );
};

export default RightSideDots;
