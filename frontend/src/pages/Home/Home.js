import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Voici Mon Portfolio</h1>
      <section id="about">
        <h2>à propos de moi</h2>
        <div className="section-subcontainer">
          <img src="./assets/images/Photo-BP.jpg" alt="Bastian PUSSEY" />
          <div className="section-description">
            <p>
              Je m'appelle Bastian PUSSEY, je suis un jeune homme de 26 ans et
              je viens de Belfort, une petite ville de Franche-Comté.
            </p>
            <p>
              Je suis dévellopeur Full Stack junior, et j'aimerai acquérir plus
              d'experience en tant que tel. C'est pourquoi je suis en recherche
              active d'emploi.
            </p>
            <p>
              Je trouve personnellement le côté Full Stack attrayant car j'aime
              beaucoup le principe de couteau suisse que présente ce métier. De
              surcroît, je suis intéressé par tous les aspects du web.
            </p>
            <p>
              Bien que j'ai une forte apétence pour le Front-End, l'aspect de
              logique pure des autres languages backend, ainsi que les
              mécanismes lié au déploiement continue et les enjeux de la
              sécurité sont particulièrement attrayant pour moi
            </p>
            <Link to="about" className="section-link">
              En apprendre plus sur moi
            </Link>
          </div>
        </div>
      </section>
      <section id="experience">
        <h2>Expérience</h2>
        <div className="section-subcontainer">
          <img src="./assets/images/logo-iris.png" alt="Iris Digital" />
          <div className="section-description">
            <p>
              Lors de ma formation OpenClassrooms, j'ai été en alternance chez
              Iris-Digital. Cette ensemble de travail et étude en pure autonomie
              s'est avéré être très formateur pour moi, j'ai ainsi pu acquérir
              une certaine résilience et une excellent capacité d'adaptation.
            </p>
            <p>
              Durant mon temps chez Iris Digital, J'ai du développer deux sites
              vitrines : Iris Digital ainsi que Artisanat Van. Il s'agit de deux
              application que j'ai développer à l'aide de Vuejs, le premier a
              été fait pour mon entreprise, afin qu'il ai une interface de
              communication avec les clients, le second a été fait pour un
              client, tous les deux ont exprimé leur grande satisfaction, vis à
              vis du produit final.
            </p>
            <p>
              J'ai également commencé à développer une troisieme application en
              trois tiers, le projet portant le nom de Mangabo. L'équipé a pris
              la relève à mon départ et à pu terminer le site.
            </p>
            <Link to="experience" className="section-link">
              Plus d'informations sur mon experience
            </Link>
          </div>
        </div>
      </section>
      <section id="realisations">
        <h2>Réalisations</h2>
        <div className="section-subcontainer">
          <img src="./assets/images/Artisanat-Van.png" alt="Artisanat Van" />
          <div className="section-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <Link to="achievements" className="section-link">
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>
      <section id="tools">
        <h2>Mes outils</h2>
        <div className="section-subcontainer">
          <img src="./assets/images/Github.png" alt="Github BastianGH" />
          <div className="section-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse semper consectetur est, eget elementum est rhoncus
              non. Pellentesque non ante sed ipsum porttitor auctor. Mauris
              magna ex, porttitor nec sagittis quis, aliquam in elit. Integer
              sodales neque nibh, ut sodales libero mollis vel. Sed semper ex
              vitae venenatis iaculis. Nulla.
            </p>
            <Link to="about" className="section-link">
              En apprendre plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
