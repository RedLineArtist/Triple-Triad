import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-blue-600 flex justify-between sticky bottom-0">
      <Link href="/">
        <HomeIcon className="w-6 h-6" />
      </Link>

      <button>
        <Link href="/">
          <Cog8ToothIcon className="w-6 h-6" />
        </Link>
      </button>
    </div>
  )
}

export default Footer
