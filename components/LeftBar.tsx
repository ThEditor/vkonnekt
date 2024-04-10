import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useEffect, useState } from "react";
import type { Tab } from "./BottomBar";
import { useBottomBarItems } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";
import { GlobeIconSvg, PodcastIconSvg } from "./Svgs";
import { useBoundStore } from "../hooks/useBoundStore";
import { IconLogin, IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/router";

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#CE82FF"
        stroke="#CE82FF"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logOut = useBoundStore((x) => x.logOut);

  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const [username, setUsername] = useState<string | null>(null);  
  const router = useRouter();
  
  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    setUsername(null);
    router.push('/');
  }

  const login = () => {
    router.push('/');
  }

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) router.push('/');
    return setUsername(user ?? null);
  }, []);

  const bottomBarItems = useBottomBarItems();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white pl-3 py-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/learn"
          className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#1b2245] lg:block"
        >
          vKonnekt
        </Link>
        <ul className="flex flex-col items-stretch gap-3">
          {bottomBarItems.map((item) => {
            return (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow h-14 items-center gap-3 rounded-xl bg-[#1b224520] pl-2 py-1 text-sm font-bold uppercase text-blue-400"
                  >
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow h-14 items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-500 hover:bg-gray-100"
                  >
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
          {username ? <button onClick={logout} className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-red-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            <IconLogout />
            <span>Logout</span>
          </button> : <button onClick={login} className="flex gap-1 justify-center text-center items-center px-4 mb-8 py-2 w-full rounded-md bg-red-500 text-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            <IconLogin />
            <span>Login</span>
            </button>}
          {/* <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-gray-300 hover:bg-gray-100"
            onClick={() => setMoreMenuShown((x) => !x)}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">More</span>
            <div
              className={[
                "absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-gray-300 bg-white text-left text-gray-300",
                moreMenuShown ? "" : "hidden",
              ].join(" ")}
            >
              <div className="flex flex-col py-2">
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://schools.vKonnekt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIconSvg className="h-10 w-10" />
                  Schools
                </Link>
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://podcast.vKonnekt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PodcastIconSvg className="h-10 w-10" />
                  Podcast
                </Link>
              </div>
              <div className="flex flex-col border-t-2 border-gray-300 py-2">
                {!loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("SIGNUP")}
                  >
                    Create a profile
                  </button>
                )}
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href={loggedIn ? "/settings/account" : "/settings/sound"}
                >
                  Settings
                </Link>
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://support.vKonnekt.com/hc/en-us"
                >
                  Help
                </Link>
                {!loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("LOGIN")}
                  >
                    Sign in
                  </button>
                )}
                {loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={logOut}
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div> */}
        </ul>
      </nav>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};
