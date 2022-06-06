import Header from "./Header"
import Footer from "./Footer"
import Message from "./Message"

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Message />
      <main
        style={{
          minHeight: "1000px",
          backgroundColor: "white"
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
