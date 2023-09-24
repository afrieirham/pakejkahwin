import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-base-100 p-4">
      <Link href="/">
        <img
          src="/logo.png"
          className="h-[30px] pl-2 md:h-[52px]"
          alt="PackageKahwin.com logo"
        />
      </Link>
      <Link
        href="/submit"
        className="btn-primary btn hidden normal-case md:inline-flex"
      >
        Submit Service
      </Link>
      <div className="drawer drawer-end m-0 w-auto p-0 md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2 h-6 w-6 fill-none stroke-primary"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu h-full w-80 gap-2 bg-base-200 p-4 text-base-content">
            <Link
              href="/submit"
              className="btn-primary btn btn-sm text-xs normal-case"
            >
              Submit Service
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
