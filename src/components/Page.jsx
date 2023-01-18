import Header from "./Header"

const Page = (props) => {
  const { children } = props
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col w-full bg-cyan-200">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Page
