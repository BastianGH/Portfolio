import { Link } from "react-router-dom";
import "./home.css";

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
              En tant que développeur FullStack, j'aime allier autonomie et
              flexibilité pour mener à bien chaque projet.
            </p>
            <p>
              Mon objectif est de produire un code rigoureux, clair et structuré
              qui non seulement fonctionne, mais qui reste facile à comprendre
              et à maintenir.
            </p>
            <p>
              J'accorde une grande importance à l'architecture des projets pour
              garantir une solution évolutive et bien pensée.
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
              J'ai eu la chance de travailler pour Iris Digital, une startup
              dynamique spécialisée dans la création de sites vitrines
            </p>
            <p>
              Mon rôle principal a été de développer des sites, dont celui de la
              startup elle-même et un projet pour un client.
            </p>
            <p>
              Durant cette expérience, j'ai principalement utilisé Vue.js sous
              Ubuntu, ce qui m'a permis d'acquérir une grande maîtrise dans la
              gestion de projets front-end dans un environnement startup.
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
              Mon parcours est marqué par deux projets professionnels et
              plusieurs projets réalisés dans le cadre de mes formations chez
              OpenClassroom et AJC.
            </p>
            <p>
              Chaque projet a été l'occasion de renforcer mes compétences
              techniques, notamment avec Vue.js, React et Angular
            </p>
            <p>
              Ce portfolio en cours de développement constitue également l'un de
              mes projets personnels, mettant en valeur mon savoir-faire à
              travers une interface soignée et fonctionnelle.
            </p>
            <Link to="achievements" className="section-link">
              Voir toutes mes réalisations
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
              Je m'appuie sur une boîte à outils variée qui inclut Visual Studio
              Code pour le développement, GitHub pour la gestion de version, et
              Firebase, que j'utilise fréquemment dans mes projets.
            </p>
            <p>
              En plus de cela, j'ai une bonne maîtrise de Trello pour la gestion
              de projets, et je suis à l'aise avec les principaux frameworks
              front-end : Vue.js, React.js et Angular.
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
