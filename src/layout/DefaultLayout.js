import React from 'react'
import { Header } from './partial/Header.comp'
import { Footer } from './partial/Footer.comp'
export const DefaultLayout = ({children}) => {
    return (
        <div>
            <div className="default-layout">
                <header className="header">
                    <Header></Header>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>

        </div>
    )
}
