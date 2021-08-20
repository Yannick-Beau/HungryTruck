/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import './legalMentions.scss';

// == Composant
const LegalMentions = () => (
  <section className="lm">
    <h3 className="lm-title">
      Mentions Légales
    </h3>
    <a href="http://www.hungrytruck.fr" alt="HungryTruck">
      www.hungrytruck.fr
    </a>
    <article className="lm-text">
      <p className="lm-text--parahraph">
        HungryTruck est soucieux des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses utilisateurs, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
      </p>
      <p className="lm-text--parahraph">
        Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : <a href="https://www.cnil.fr/">https://www.cnil.fr/</a>
      </p>
      <p className="lm-text--parahraph">
        La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent.
      </p>

      <p className="lm-text--parahraph">
        La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu’à ce qu'une nouvelle version la remplace.
      </p>
      <p className="lm-text--title">
        Article 1 : Mentions légales
      </p>
      <p className="lm-text--subtitle">
        Site (ci-après «le site») :
      </p>
      <p className="lm-text--parahraph">
        HungryTruck
      </p>
      <p className="lm-text--subtitle">
        Éditeur (ci-après « L’éditeur ») :
      </p>
      <p className="lm-text--parahraph">
        <ul>
          <li>Jonathan Turpin, domicilié au 41 rue de la pigacière, 14 000 CAEN</li>
          <li>Aodrën Lacot Le Clanche, domicilié au 7 rue français, 38 270 BEAUREPAIRE</li>
          <li>Yannick Beau, domicilié au 3 rue du 11 novembre, 21 140 SEMUR EN AUXOIS</li>
        </ul>
      </p>
      <p className="lm-text--subtitle">
        Hébergeur (ci-après « [hébergeur] ») :
      </p>
      <p className="lm-text--parahraph">
        HungryTruck est hébergé par [Nom de L’hébergeur], dont le siège social est situé [adresse du siège Social hébergeur]
        [Code postal et ville hébergeur].
      </p>
      <p className="lm-text--subtitle">
        Délégué à la protection des données (DPO) :
      </p>
      <p className="lm-text--parahraph">
        Un délégué à la protection des données : Yannick Beau, [adresse email] est à votre disposition pour toute question relative à la protection de vos données personnelles.
      </p>
      <p className="lm-text--title">
        Accès au site
      </p>
      <p className="lm-text--parahraph">
        L’accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l’envoi de courriers électroniques non sollicités.
      </p>
      <p className="lm-text--title">
        Contenu du site
      </p>
      <p className="lm-text--parahraph">
        Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
      </p>
      <p className="lm-text--parahraph">
        Ils sont la propriété pleine et entière de l’éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l’accord préalable et écrit de l’éditeur, sont strictement interdites. Le fait pour l’éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
      </p>
      <p className="lm-text--title">
        Gestion du site
      </p>
      <p className="lm-text--parahraph">
        Pour la bonne gestion du site, l’éditeur pourra à tout moment :
        <ul>
          <li>
            Suspendre, interrompre ou limiter l’accès à tout ou partie du site, réserver l’accès au site, ou certaines parties du site, a une catégorie déterminée d'internautes ;
          </li>
          <li>
            Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;
          </li>
          <li>
            Suspendre le site afin de procéder à des mises à jour.
          </li>
        </ul>
      </p>

      <p className="lm-text--title">
        Responsabilités
      </p>
      <p className="lm-text--parahraph">
        La responsabilité de l’éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l’accès au site ou à une de ses fonctionnalités.
      </p>
      <p className="lm-text--parahraph">
        Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.
      </p>
      <p className="lm-text--parahraph">
        L’éditeur ne pourra être tenu responsable en cas de poursuites judiciaires votre encontre :
        <ul>
          <li>
            Du fait de l'usage du site ou de tout service accessible via Internet ;
          </li>
          <li>
            Du fait du non-respect par vous des présentes conditions générales.
          </li>
        </ul>
      </p>
      <p className="lm-text--parahraph">
        L’éditeur n’est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.
      </p>
      <p className="lm-text--parahraph">
        Si l'éditeur venait à faire l’objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.
      </p>
      <p className="lm-text--title">
        Les liens hypertextes
      </p>
      <p className="lm-text--parahraph">
        La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est strictement interdite, sauf autorisation préalable et écrite de l’éditeur.
      </p>
      <p className="lm-text--parahraph">
        L’éditeur est libre de refuser cette autorisation sans avoir à justifier de quelque manière que ce soit sa décision. Dans le cas où l’éditeur accorderait son autorisation, celle-ci n'est dans tous les cas que temporaire et pourra être retirée à tout moment, sans obligation de justification à la charge de l'éditeur.
      </p>
      <p className="lm-text--parahraph">
        Toute information accessible via un lien vers d'autres sites n'est pas publiée par l’éditeur. L’éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.
      </p>
      <p className="lm-text--title">
        Collecte et protection des données
      </p>
      <p className="lm-text--parahraph">
        Vos données sont collectées par HungryTruck.
      </p>
      <p className="lm-text--parahraph">
        Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle on sociale.
      </p>
      <p className="lm-text--parahraph">
        Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l’éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos demandes sur le site.
      </p>
      <p className="lm-text--parahraph">
        Les données personnelles collectées sont les suivantes :
        <ul>
          <li>
            Adresse mail
          </li>
          <li>
            Nom
          </li>
          <li>
            Prénom
          </li>
        </ul>
      </p>
      <p className="lm-text--parahraph">
        Un délégué à la protection des données : Yannick Beau [adresse mail], est à votre disposition pour toute question relative à la protection de vos données personnelles.
      </p>
      <p className="lm-text--title">
        Droit d’accès, de rectification et de déréférencement de vos données
      </p>
      <p className="lm-text--parahraph">
        En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :
        <ul>
          <li>
            Le droit d’accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l’adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier exactitude ;
          </li>
          <li>
            Le droit de rectification : si les données à caractère personnel détenues par la plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;
          </li>
          <li>
            Le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;
          </li>
          <li>
            Le droit à la limitation du traitement : les utilisateurs peuvent demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;
          </li>
          <li>
            Le droit de s‘opposer au traitement des données : les utilisateurs peuvent s‘opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;
          </li>
        </ul>
      </p>
      <p className="lm-text--parahraph">
        Vous pouvez exercer ce droit en nous contactant
      </p>
      <p className="lm-text--parahraph">
        Vous pouvez vous adresser à notre délégué la protection des données : Yannick Beau, [adresse email], qui est à votre disposition pour toute question relative à la protection de vos données personnelles.
      </p>
      <p className="lm-text--parahraph">
        Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité signé et faire mention de l’adresse à laquelle l’éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l’exigent.
      </p>
      <p className="lm-text--parahraph">
        De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la CNIL : <a href="https://www.cnil.fr">https://www.cnil.fr</a>.
      </p>
      <p className="lm-text--parahraph">
        Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL : <a href="https://www.cnil.fr">https://www.cnil.fr</a>.
      </p>
      <p className="lm-text--parahraph">
        Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème.
      </p>
      <p className="lm-text--title">
        Utilisation des données
      </p>
      <p className="lm-text--parahraph">
        Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est l’exécution du contrat entre l'utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes - accès et utilisation de la Plateforme par l'utilisateur ;
        <ul>
          <li>
            Gestion du fonctionnement et optimisation de la Plateforme ;
          </li>
          <li>
            Mise en œuvre d'une assistance utilisateurs ;
          </li>
          <li>
            Vérification, identification et authentification des données transmises par l'utilisateur ;
          </li>
          <li>
            Prévention et détection des fraudes et gestion des incidents de sécurité ;
          </li>
          <li>
            Gestion des éventuels litiges avec les utilisateurs ;
          </li>
        </ul>
      </p>
      <p className="lm-text--title">
        Politique de conservation des données
      </p>
      <p className="lm-text--parahraph">
        La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance.
      </p>
      <p className="lm-text--parahraph">
        Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n’ayons plus besoin pour vous fournir nos services.
      </p>
      <p className="lm-text--title">
        Partage des données personnelles avec des tiers
      </p>
      <p className="lm-text--parahraph">
        Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants :
        <ul>
          <li>
            Si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.
          </li>
        </ul>
      </p>
      <p className="lm-text--parahraph">
        Cependant à date le partage de données personnelles avec des tiers n’est pas prévu.
      </p>
      <p className="lm-text--parahraph">
        Cookies
      </p>
      <p className="lm-text--parahraph">
        Qu’est-ce qu'un « cookie » ?
      </p>
      <p className="lm-text--parahraph">
        Un « Cookie » ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone...) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l’installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé (source : <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi">https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi</a> ). 
      </p>
      <p className="lm-text--parahraph">
        Le site peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.
      </p>
      <p className="lm-text--parahraph">
        Le cas échéant, des « cookies » émanant de l’éditeur du site et/ou des sociétés tiers pourront être déposés sur votre terminal, avec votre accord. Dans ce cas, lors de la première navigation sur ce site, une bannière explicative sur l'utilisation desdits « cookies » apparaîtra. Avant de poursuivre la navigation, le client et/ou le prospect devra accepter ou refuser l’utilisation desdits « cookies ». Le consentement donné sera valable pour une période de treize (13) mois. L'utilisateur a la possibilité de désactiver les cookies à tout moment.
      </p>
      <p className="lm-text--parahraph">
        Les cookies suivants sont présents sur ce site :
        <ul>
          <li>
            Cookie de thème
          </li>
          <li>
            Cookie de session
          </li>
        </ul>
      </p>
      <p className="lm-text--parahraph">
        La durée de vie de ces cookies est de 14 jours seulement, pour une notion de sécurité.
      </p>
      <p className="lm-text--title">
        Photographies et représentation des produits
      </p>
      <p className="lm-text--parahraph">
        Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l’éditeur.
      </p>
      <p className="lm-text--title">
        Loi applicable
      </p>
      <p className="lm-text--parahraph">
        Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l’éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
      </p>
      <p className="lm-text--title">
        Contactez-nous
      </p>
      <p className="lm-text--parahraph">
        Pour toute question, information concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante : [adresse mail]
      </p>
    </article>
  </section>
);

// == Export
export default LegalMentions;
