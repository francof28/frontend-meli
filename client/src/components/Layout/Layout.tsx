
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Navbar />
            <main style={{minHeight: '80vh'}}>
                {children}
            </main>
            <Footer />
        </>
    )
}