import React from "react";
import "./experience.css";

export const Experience = () => {
  return (
    <div>
      <h1>Mon expérience</h1>
      <section>
        <div className="xp-title">
          <h2>Iris Digital</h2>
          <span className="xp-title-line"></span>
          <span className="poste">Développeur FullStack</span>
        </div>

        <div className="xp-content">
          <img
            src={`${process.env.PUBLIC_URL}assets/images/logo-iris.png`}
            alt="Iris Digital"
            className="xp-img"
          />
          <p>
            Mon expérience chez Iris Digital, où j’ai travaillé en tant que
            développeur FullStack en alternance, a été une période marquante
            dans mon développement professionnel. J'ai su concilier les
            exigences académiques de ma formation chez OpenClassroom avec les
            responsabilités professionnelles au sein de la startup, ce qui a
            renforcé ma capacité à gérer des priorités multiples et à évoluer
            efficacement dans un environnement dynamique.
          </p>
          <p>
            Chez Iris Digital, j’ai participé à la conception et au
            développement de plusieurs sites vitrines, y compris celui de
            l’entreprise elle-même ainsi qu’un projet pour un client externe. En
            tant que développeur front-end, j’ai principalement utilisé Vue.js
            pour créer des interfaces utilisateurs modernes et réactives,
            travaillant dans un environnement Ubuntu qui m’a permis d’optimiser
            mon flux de travail avec des outils open source.
          </p>
          <p>
            L'un des projets les plus complexes sur lequel j’ai eu la chance de
            travailler était une architecture en trois tiers, dans laquelle j’ai
            utilisé NestJS pour le backend et Angular pour le frontend. Ce
            projet m’a offert une immersion profonde dans le monde du
            TypeScript, dont la rigidité m’a permis de renforcer la sécurité des
            applications via un contrôle strict des types et une gestion
            rigoureuse des requêtes. Cette expérience m’a non seulement permis
            d’acquérir une bonne maîtrise d’Angular, mais également d’améliorer
            mes compétences en matière de sécurité applicative, en intégrant des
            pratiques de surcontrôle des requêtes pour assurer la robustesse de
            l'API.
          </p>
          <p>
            Cette alternance a été pour moi une opportunité unique de renforcer
            mes compétences techniques en FullStack, tout en apprenant à
            travailler dans l’environnement exigeant et agile d’une startup. La
            diversité des projets m’a permis de mieux comprendre les besoins des
            clients et de proposer des solutions adaptées, tout en respectant
            les meilleures pratiques de développement.
          </p>
        </div>
      </section>
    </div>
  );
};
