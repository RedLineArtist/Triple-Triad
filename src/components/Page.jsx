import Header from "./Header"

const Page = (props) => {
  const { children } = props
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col w-full">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Page
