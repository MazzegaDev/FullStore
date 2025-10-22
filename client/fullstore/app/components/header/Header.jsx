import "./styleH.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <h1>Loja fullstack</h1>
            <button className="login">
                <Link className="link"  href={""}>
                    Login
                </Link>
            </button>
        </header>
    );
}
