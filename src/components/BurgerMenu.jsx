import React, { useCallback, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const links = [
  { children: "1 ⭐️", href: "/oneStars" },
  { children: "2 ⭐️", href: "/twoStars" },
  { children: "3 ⭐️", href: "/threeStars" },
  { children: "4 ⭐️", href: "/fourStars" },
  { children: "5 ⭐️", href: "/fiveStars" },
]

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handle = useCallback(() => {
    setMenuOpen((x) => !x)
  }, [])

  return (
    <div>
      <button
        onClick={handle}
        className="text-3xl
        cursor-pointer"
      >
        <Bars3Icon className="w-6 h-6 m-4" />
      </button>
      <ul
        className={classNames(
          "flex flex-col fixed top-[64px] bottom-6 bg-purple-800 left-0 pl-6 transition-all duration-500 z-50 ease-in",
          { "-left-full": !menuOpen }
        )}
      >
        {links.map((linkProps) => (
          <li
            key={linkProps.href}
            className="mr-4 p-2
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
