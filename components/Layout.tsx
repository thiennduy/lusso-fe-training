import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "1000px", backgroundColor: "white" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
