import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "../components/LeftBar";
import { BottomBar } from "../components/BottomBar";
import { IconLockCancel, IconLockOpen } from "@tabler/icons-react";
import { cn } from "../utils/cn";

// mock data
const orders = [{
    title: "Order 1",
    content: "This is content for Order 1",
    open: true,
    date: "2019-04-07T09:45:12.123Z"
  },
  {
    title: "Order 2",
    content: "This is content for Order 2",
    open: false,
    date: "2021-09-05T12:30:45.678Z"
  }];
const Deliver: NextPage = () => {

  return (
    <div>
      <LeftBar selectedTab="Deliver" />
      <div className="flex flex-col justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div>
          <h1 className="text-lg font-bold mb-5">vDeliver Orders</h1>
          <div className="grid grid-cols-4">
          {orders.map((order) => (
            <div className="flex flex-col gap-3 min-w-32 min-h-24 shadow-md p-10 m-5 rounded-lg" key={order.title}>
              <div className="flex flex-row justify-between">
                <h2 className="text-md flex gap-2 font-bold mb-5">{order.title}</h2>
                <div className={cn('text-sm text-white w-16  h-6 text-center rounded-lg', order.open ? "bg-green-400" : "bg-red-400")}>{order.open ? "Open" : "Closed"}</div>
              </div>
              <p>{order.content}</p>
              <p className="text-sm font-thin mt-2">{new Date(order.date).toDateString()}</p>
                {order.open ? <button className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-cyan-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    <span>Claim</span>
                </button> :  <button disabled className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-gray-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    <span>Claimed</span>
                </button>}
            </div>
          ))}
          </div>
        </div>
      </div>
      <BottomBar selectedTab="Deliver" />
    </div>
  );
};

export default Deliver;
