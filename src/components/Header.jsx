import BurgerMenu from "@/components/BurgerMenu"

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-600">
      <BurgerMenu />
      <div className="text-xl m-2 ">Triple Triad</div>
    </header>
  )
}

export default Header
