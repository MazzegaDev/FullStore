import "./styleM.css";
import Tittle from "../tittle/Tittle";

export default function Main() {
    return (
        <main>
            <Tittle titulo={"Sobre a loja"}></Tittle>
            <section className="section-sobre">
                <p className="texto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta, blanditiis enim fugiat autem deserunt animi quia
                    amet ex iusto laborum laboriosam, aliquid molestiae eaque
                    fuga. Perspiciatis quidem laboriosam dignissimos natus.
                </p>
                <img src="\img\imgteste.jpg" alt="" width={320} />
            </section>
            <Tittle titulo={"Teste"}></Tittle>
            <section>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis sint qui neque exercitationem, expedita nemo
                    tenetur reiciendis veritatis, et placeat quibusdam. Nulla
                    impedit harum accusamus obcaecati deserunt a sequi ad.
                </p>
            </section>
        </main>
    );
}
