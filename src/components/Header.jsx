import BurgerMenu from "@/components/BurgerMenu"
import Connexion from "@/components/Connexion"
import Image from "@/components/ImageComponent"

const Header = () => {
  return (
    <header className="overflow-auto flex justify-between bg-blue-600">
      <BurgerMenu />
      <div>
        <Image src="/images/logo/TripleTriadLogo.png" className="w-36 h-16" />
      </div>
      <Connexion />
    </header>
  )
}

export default Header
