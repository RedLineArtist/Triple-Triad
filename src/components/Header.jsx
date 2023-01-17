import BurgerMenu from "@/components/BurgerMenu"
import Image from "@/components/ImageComponent"

const Header = () => {
  return (
    <header className="overflow-auto flex justify-between bg-blue-600">
      <BurgerMenu />
      <div>
        <Image src="/images/logo/TripleTriadLogo.png" className="w-36 h-16" />
      </div>
      <h1 className="text-xl text-center m-3">Triple Triad</h1>
    </header>
  )
}

export default Header
