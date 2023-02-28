import { UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Connexion = () => {
  return (
    <Link className="text-3xl cursor-pointer" href="/sign-up">
      <UserIcon className="w-6 h-6 m-4" />
    </Link>
  )
}

export default Connexion
