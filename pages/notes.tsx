import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "../components/LeftBar";
import { BottomBar } from "../components/BottomBar";
import { Textarea } from "../@/components/ui/textarea"
import { Input } from "../components/ui/input";

const currentNotes = [
  {
    "title": "Note 1",
    "content": "This is content for Note 1",
    "color": "blue",
    "date": "2019-04-07T09:45:12.123Z"
  },
  {
    "title": "Note 2",
    "content": "This is content for Note 2",
    "color": "red",
    "date": "2021-09-05T12:30:45.678Z"
  },
  {
    "title": "Note 3",
    "content": "This is content for Note 3",
    "color": "green",
    "date": "2019-11-19T17:20:30.987Z"
  },
  {
    "title": "Note 4",
    "content": "This is content for Note 4",
    "color": "yellow",
    "date": "2021-01-17T06:15:22.345Z"
  },
  {
    "title": "Note 5",
    "content": "This is content for Note 5",
    "color": "purple",
    "date": "2020-12-09T14:55:38.234Z"
  },
  {
    "title": "Note 6",
    "content": "This is content for Note 6",
    "color": "orange",
    "date": "2020-06-12T18:10:15.432Z"
  },
];

const Notes: NextPage = () => {
  const [notes, setNotes] = React.useState(currentNotes);
  const [title, setTitle] = React.useState('');
  const [description, setDesc] = React.useState('');

  const handleClick = () => {
    setNotes([...notes, {
      "title": title,
      "content": description,
      "color": "blue",
      "date": (new Date()).toISOString()
    }]);
  }


  return (
    <div>
      <LeftBar selectedTab="Notes" />
      <div className="flex flex-col justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex flex-col gap-2 min-w-32 min-h-24 shadow-md p-10 m-5 rounded-lg">
          <h1>Create Note</h1>
          <Input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder="description" onChange={(e) => setDesc(e.target.value)} />
          <button onClick={handleClick} className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-cyan-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            <span>Create</span>
          </button>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-5">Notes</h1>
          <div className="grid grid-cols-4">
          {notes.map((note) => (
            <div className="min-w-32 min-h-24 shadow-md p-10 m-5 rounded-lg" key={note.title}>
              <h2 className="text-md font-bold mb-5">{note.title}</h2>
              <p>{note.content}</p>
              <p className="text-sm font-thin mt-2">{new Date(note.date).toDateString()}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <BottomBar selectedTab="Notes" />
    </div>
  );
};

export default Notes;
