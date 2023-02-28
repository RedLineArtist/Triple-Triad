import { useAppContext } from "@/components/AppContext"
import BurgerMenu from "@/components/BurgerMenu"
import Connexion from "@/components/Connexion"
import ImageComponent from "@/components/ImageComponent"
import { XCircleIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Header = () => {
  const router = useRouter()

  const {
    state: { session },
  } = useAppContext()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!session) {
      return
    }

    setUser(session.user)
  }, [session])

  const { setSession } = useAppContext()

  const handelClick = () => {
    setSession()
    router.push("/deckCollection")

    return
  }

  return (
    <header className="overflow-auto flex justify-between bg-blue-600">
      <BurgerMenu />
      <div>
        <ImageComponent
          src="/images/logo/TripleTriadLogo.png"
          className="w-36 h-16"
        />
      </div>
      {session ? (
        <div className="flex items-center ">
          <h1>
            Bonjour
            <span className="text-black pr-2"> {session.user.displayName}</span>
          </h1>

          <button onClick={handelClick}>
            <XCircleIcon className="w-7 h-7 mr-6" />
          </button>
        </div>
      ) : user ? (
        <div>{user.displayName}</div>
      ) : (
        <Connexion />
      )}
    </header>
  )
}

export default Header
