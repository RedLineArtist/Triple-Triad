import React, { useCallback, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "@/components/Link"
import classNames from "classnames"

const links = [
  { children: "1 ⭐️", href: "/oneStars" },
  { children: "2 ⭐️", href: "/" },
  { children: "3 ⭐️", href: "/" },
  { children: "4 ⭐️", href: "/" },
  { children: "5 ⭐️", href: "/" },
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
