import React, { useCallback, useState } from "react"
// import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const links = [
  { children: "1 ⭐️", href: "/cardsCollection/1stars" },
  { children: "2 ⭐️", href: "/cardsCollection/2stars" },
  { children: "3 ⭐️", href: "/cardsCollection/3stars" },
  { children: "4 ⭐️", href: "/cardsCollection/4stars" },
  { children: "5 ⭐️", href: "/cardsCollection/5stars" },
]

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handle = useCallback(() => {
    setMenuOpen((x) => !x)
  }, [])

  return (
    <div className="mr-2 ml-auto">
      <button onClick={handle} className="text-3xl cursor-pointer">
        ☰
      </button>
      <ul
        className={classNames(
          "flex flex-col fixed top-[54px] bottom-6 bg-blue-600 left-0 pl-6 transition-all duration-500 z-50 ease-in",
          { "-left-full": !menuOpen }
        )}
      >
        {links.map((linkProps) => (
          <li
            key={linkProps.href}
            className="mr-4
            text-xl md:my-0 my-7"
          >
            <Link className="text-white" {...linkProps} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerMenu
