import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"

function Nosotros() {
  return (
    <Layout title={"Nosotros"} description={"Informacion sobre nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

          <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            porta, justo vel sollicitudin posuere, nibh orci porta orci, at
            ultricies quam enim at nulla. Integer maximus nibh sed quam
            imperdiet, eu tempus odio euismod. In hac habitasse platea dictumst.
            Mauris eget porta ex, in tincidunt velit. Fusce felis quam, lobortis
            nec fermentum vitae, aliquam quis lectus. Suspendisse sollicitudin
            ante et velit sollicitudin rhoncus. Vestibulum luctus suscipit ipsum
            luctus tincidunt. Morbi dictum leo eu quam egestas, quis dapibus
            tellus aliquet. Aliquam sit amet tempus neque, id varius est.
            Aliquam quis eros ac risus aliquam malesuada. Suspendisse quam
            tortor, blandit quis ipsum non, consequat scelerisque diam. Ut nec
            arcu vel purus auctor placerat ac id lacus. In sagittis nulla eget
            metus rhoncus varius. Proin at nulla tempor, varius ligula et,
            pharetra eros. Etiam molestie augue ligula, sollicitudin feugiat
            libero tempor quis. Sed lorem ex
          </p>
        </div>
        </div>

        
      </main>
    </Layout>
  );
}

export default Nosotros;
