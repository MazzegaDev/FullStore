import "./styleM.css";
import Tittle from "../tittle/Tittle";

export default function Main() {
    return (
        <main>
            
            <Tittle titulo={"Confira nossos produtos"}></Tittle>
            <section>
                <p className="texto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis sint qui neque exercitationem, expedita nemo
                    tenetur reiciendis veritatis, et placeat quibusdam. Nulla
                    impedit harum accusamus obcaecati deserunt a sequi ad.
                </p>
            </section>
        </main>
    );
}
