import "./styleLL.css";
import Link from "next/link";

export default function LinkList(){
    return(
        <ul className="listaLinks">
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
        </ul>
    )
}