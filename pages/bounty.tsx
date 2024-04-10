import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "../components/LeftBar";
import { BottomBar } from "../components/BottomBar";
import { Textarea } from "../@/components/ui/textarea"
import { Input } from "../components/ui/input";
import { IconLockAccess, IconLockCancel, IconLockOpen } from "@tabler/icons-react";


// mock data
const openBounties = [{
    title: "Bounty 1",
    content: "This is content for Bounty 1",
    date: "2019-04-07T09:45:12.123Z"
  },
  {
    title: "Bounty 2",
    content: "This is content for Bounty 2",
    date: "2021-09-05T12:30:45.678Z"
  }];

const closedBounties = [{
    title: "Bounty 3",
    content: "This is content for Bounty 3",
    date: "2019-11-19T17:20:30.987Z"
  },
  {
    title: "Bounty 4",
    content: "This is content for Bounty 4",
    date: "2021-01-17T06:15:22.345Z"
  },{
    title: "Bounty 5",
    content: "This is content for Bounty 5",
    date: "2020-12-09T14:55:38.234Z"
  },{
    title: "Bounty 6",
    content: "This is content for Bounty 6",
    date: "2020-06-12T18:10:15.432Z"
  },{
    title: "Bounty 7",
    content: "This is content for Bounty 7",
    date: "2023-07-23T08:20:59.876Z"
  },{
    title: "Bounty 8",
    content: "This is content for Bounty 8",
    date: "2022-10-30T11:40:33.654Z"
  }];

const Bounty: NextPage = () => {

  return (
    <div>
      <LeftBar selectedTab="Bounty" />
      <div className="flex flex-col justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div>
          <h1 className="text-lg font-bold mb-5">Open Bounties</h1>
          <div className="grid grid-cols-4">
          {openBounties.map((oB) => (
            <div className="flex flex-col gap-3 min-w-32 min-h-24 shadow-md p-10 m-5 rounded-lg" key={oB.title}>
              <h2 className="text-md flex gap-2 font-bold mb-5"><IconLockOpen color="green" /> {oB.title}</h2>
              <p>{oB.content}</p>
              <p className="text-sm font-thin mt-2">{new Date(oB.date).toDateString()}</p>
                <button className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-cyan-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    <span>Claim</span>
                </button>
            </div>
          ))}
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-5">Closed Bounties</h1>
          <div className="grid grid-cols-4">
          {closedBounties.map((cB) => (
            <div className="flex flex-col gap-3 min-w-32 min-h-24 shadow-md p-10 m-5 rounded-lg" key={cB.title}>
              <h2 className="text-md flex gap-2 font-bold mb-5"><IconLockCancel color="red" /> {cB.title}</h2>
              <p>{cB.content}</p>
              <p className="text-sm font-thin mt-2">{new Date(cB.date).toDateString()}</p>
              <button disabled className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-gray-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    <span>Claimed</span>
                </button>
            </div>
          ))}
          </div>
        </div>
      </div>
      <BottomBar selectedTab="Bounty" />
    </div>
  );
};

export default Bounty;