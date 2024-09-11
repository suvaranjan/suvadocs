import { Noto_Sans_Oriya } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Noto_Sans_Oriya({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {

    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}