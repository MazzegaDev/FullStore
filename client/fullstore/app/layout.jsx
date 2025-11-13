import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import appContext from "./context/appContext";
import "../public/css/sb-admin-2.min.css";
import "../public/css/fontawesome-free/css/all.min.css";


//Usa o contexto pelo provedor
import { ContextProvider } from "./context/appContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const nunito = Nunito({ subsets: ["latin"] });

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "FullStore",
    description: "API-REST de uma loja",
};

export default function RootLayout({ children }) {
    return (
        <ContextProvider>
            <html lang="en">
                <body className={`${nunito.className}`}>
                    <Toaster />
                    {children}
                </body>
            </html>
        </ContextProvider>
    );
}
