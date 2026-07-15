import fs from 'fs';
import path from 'path';

// Configuration complète du cursus de Chant (14 étapes, 3 leçons par étape)
const configurationChant = {
  nom: "Chant",
  emoji: "🎤",
  etapes: [
    // --- PHASE 1 ---
    {
      code: "etape-1-1",
      titreEtape: "Posture et Conscience Corporelle",
      phase: "Phase 1 : Les Fondations Physiques",
      lecons: [
        { num: 1, titre: "L'alignement et le relâchement des tensions", contenu: "Apprends à relâcher la mâchoire, la nuque et à aligner ton corps comme un fil à plomb." },
        { num: 2, titre: "L'ouverture thoracique et stabilité des épaules", contenu: "Chante sans lever les épaules pour libérer le passage naturel de l'air." },
        { num: 3, titre: "La gestion du stress physique", contenu: "Pratique des étirements spécifiques du cou et du pharynx avant de produire tes premiers sons." }
      ],
      validation: "Tenir une posture parfaitement détendue et stable pendant 3 minutes en respirant profondément, sans aucune tension visible au niveau des épaules ou du cou."
    },
    {
      code: "etape-1-2",
      titreEtape: "La Respiration Diaphragmatique",
      phase: "Phase 1 : Les Fondations Physiques",
      lecons: [
        { num: 1, titre: "Comprendre le diaphragme", contenu: "Maîtrise la respiration 3D : expansion abdominale, latérale et dorsale." },
        { num: 2, titre: "L'exercice de la bougie", contenu: "Expulse un filet d'air ultra-fin et constant sans éteindre une flamme imaginaire." },
        { num: 3, titre: "Le réflexe de détente de l'inspiration", contenu: "Laisse l'air rentrer tout seul dans ton corps sans 'aspirer' bruyamment." }
      ],
      validation: "Réaliser l'exercice du sifflement continu (produire un son « Sssss ») pendant 25 secondes de manière parfaitement rectiligne et linéaire."
    },
    {
      code: "etape-1-3",
      titreEtape: "Le Soutien et l'Ancrage",
      phase: "Phase 1 : Les Fondations Physiques",
      lecons: [
        { num: 1, titre: "Activer la ceinture abdominale", contenu: "Sens le réflexe d'engagement musculaire en utilisant le rire ou la toux contrôlée." },
        { num: 2, titre: "L'exercice du ballon qui se dégonfle", contenu: "Exhale par saccades contrôlées avec les sons « Ts-Ts-Ts » en utilisant uniquement le bas du ventre." },
        { num: 3, titre: "Connecter la respiration à l'effort", contenu: "Chante une note tenue stable tout en effectuant une légère flexion sur tes jambes." }
      ],
      validation: "Enchaîner 10 saccades de « Ts » puissants et nets sans que la poitrine ne s'affaisse d'un millimètre."
    },
    // --- PHASE 2 ---
    {
      code: "etape-2-1",
      titreEtape: "Voix de Poitrine et Résonateurs Bas",
      phase: "Phase 2 : La Voix Claire et le Placement",
      lecons: [
        { num: 1, titre: "Trouver sa voix de poitrine saine", contenu: "Parle et chante dans ton registre parlé naturel de manière totalement confortable." },
        { num: 2, titre: "Le bourdonnement (humming)", contenu: "Fais vibrer tes lèvres sur un « Mmm » pour ramener le son à l'avant du visage." },
        { num: 3, titre: "Projeter sa voix de poitrine", contenu: "Chante sur des voyelles ouvertes comme « Ah » ou « Oh » sans jamais forcer sur ta gorge." }
      ],
      validation: "Tenir une note confortable en voix de poitrine pendant 15 secondes avec un son riche, vibrant, et qui résonne nettement dans le nez ou les lèvres (sensation de picotement)."
    },
    {
      code: "etape-2-2",
      titreEtape: "Voix de Tête et Résonateurs Hauts",
      phase: "Phase 2 : La Voix Claire et le Placement",
      lecons: [
        { num: 1, titre: "Trouver sa voix de tête", contenu: "Imite le hululement d'une chouette ou le son d'une sirène d'ambulance pour basculer vers le haut." },
        { num: 2, titre: "Alléger le flux d'air", contenu: "Passe de ta voix parlée à ta voix de tête sans ressentir de cassure douloureuse." },
        { num: 3, titre: "Les voyelles de tête", contenu: "Stabilise ton son aigu sur les voyelles fermées « Ou » et « I »." }
      ],
      validation: "Faire une sirène vocale fluide qui monte du plus grave au plus aigu possible en voix de tête sans interruption ni tension."
    },
    {
      code: "etape-2-3",
      titreEtape: "Le Twang et la Voix Mixte",
      phase: "Phase 2 : La Voix Claire et le Placement",
      lecons: [
        { num: 1, titre: "Le Twang sain", contenu: "Imite une sorcière ou un canard pour resserrer l'entonnoir laryngé sainement et gagner en puissance sans forcer." },
        { num: 2, titre: "Le pont vocal", contenu: "Travaille spécifiquement la zone de transition délicate entre ta voix de poitrine et ta voix de tête." },
        { num: 3, titre: "Fusionner les registres", contenu: "Chante de petites mélodies dans cette zone de transition en maintenant un volume constant." }
      ],
      validation: "Chanter une gamme montante et descendante de 5 notes traversant ton 'passage' (la zone de cassure) de manière totalement fluide."
    },
    // --- PHASE 3 ---
    {
      code: "etape-3-1",
      titreEtape: "Le Vocal Fry",
      phase: "Phase 3 : L'Introduction à la Compression",
      lecons: [
        { num: 1, titre: "Le vocal fry passif", contenu: "Fais le bruit d'un zombie fatigué ou d'une porte qui grince de manière extrêmement détendue." },
        { num: 2, titre: "Le vocal fry actif", contenu: "Réduis ton flux d'air au minimum nécessaire pour faire grincer précisément une note voulue." },
        { num: 3, titre: "Nettoyer le fry", contenu: "Passe instantanément d'un son clair à un fry, puis reviens au son clair pour garder le contrôle." }
      ],
      validation: "Tenir un grincement de vocal fry régulier et sans effort pendant 10 secondes, puis enchaîner immédiatement sur une note parlée claire sans aucune fatigue."
    },
    {
      code: "etape-3-2",
      titreEtape: "La Compression Saine (Appoggio)",
      phase: "Phase 3 : L'Introduction à la Compression",
      lecons: [
        { num: 1, titre: "Le réflexe de retenue d'air", contenu: "Bloque l'air au niveau du diaphragme, comme si tu t'apprêtais à soulever une charge lourde." },
        { num: 2, titre: "Ajouter de la voix sur la retenue", contenu: "Chante un « Hé ! » court, dynamique et percutant avec une forte sensation d'ancrage abdominal." },
        { num: 3, titre: "Gérer la pression sous-glottique", contenu: "Évite que trop d'air ne s'échappe d'un coup à travers tes cordes vocales lors de la poussée." }
      ],
      validation: "Produire un « Hé ! » de style rock/opéra puissant, très net, sans aucun souffle d'air parasite qui s'échappe."
    },
    // --- PHASE 4 ---
    {
      code: "etape-4-1",
      titreEtape: "Le Fry Scream",
      phase: "Phase 4 : Les Techniques de Saturation Extrême",
      lecons: [
        { num: 1, titre: "Ajouter de l'air au vocal fry", contenu: "Projette ton grincement naturel grâce au soutien puissant développé dans la Phase 1." },
        { num: 2, titre: "La distorsion par résonance", contenu: "Utilise le Twang (Phase 2) pour amplifier la saturation de ton fry de manière acoustique sans forcer sur la gorge." },
        { num: 3, titre: "Contrôler la hauteur du cri", contenu: "Rends ton cri plus aigu en utilisant une voix de tête fine comme base de départ." }
      ],
      validation: "Produire un sifflement saturé de type fry scream continu pendant 5 secondes à un volume moyen/faible (sans aucune douleur ni irritation)."
    },
    {
      code: "etape-4-2",
      titreEtape: "Le False Chord (Fausses Cordes)",
      phase: "Phase 4 : Les Techniques de Saturation Extrême",
      lecons: [
        { num: 1, titre: "Activer les bandes ventriculaires", contenu: "Fais le soupir d'agacement très lourd ou imite un grognement de chien pour engager tes fausses cordes." },
        { num: 2, titre: "Isoler le mouvement", contenu: "Sépare le mouvement de vibration sain du réflexe défensif de tousser ou de racler fort." },
        { num: 3, titre: "Ajouter le soutien d'air", contenu: "Propulse ce grognement avec une expiration puissante et contrôlée venant tout droit du bas-ventre." }
      ],
      validation: "Produire un cri saturé False Chord d'au moins 3 secondes, large et volumineux, suivi immédiatement d'une phrase chantée en voix claire parfaite."
    },
    {
      code: "etape-4-3",
      titreEtape: "Le Death Growl",
      phase: "Phase 4 : Les Techniques de Saturation Extrême",
      lecons: [
        { num: 1, titre: "La résonance de caverne", contenu: "Baisse ton larynx et lève ton voile du palais comme lors d'un début de bâillement pour assombrir le son." },
        { num: 2, titre: "Façonner les voyelles", contenu: "Forme un « O » ou un « Ou » serré avec tes lèvres pour étouffer le son et lui donner une profondeur monstrueuse." },
        { num: 3, titre: "Le positionnement de la mâchoire", contenu: "Ajuste l'ouverture de ta mâchoire pour maximiser les harmoniques et fréquences graves de ton grognement." }
      ],
      validation: "Réaliser un grognement très grave (growl) stable et constant pendant 5 secondes avec un son de monstre de cinéma."
    },
    // --- PHASE 5 ---
    {
      code: "etape-5-1",
      titreEtape: "Le Grit (Saturation Rock)",
      phase: "Phase 5 : Les Techniques Avancées",
      lecons: [
        { num: 1, titre: "Le ratio clair et saturé", contenu: "Apprends à mélanger précisément 80% de voix claire et 20% de distorsion (style Kurt Cobain / Chester Bennington)." },
        { num: 2, titre: "Stabiliser le mélange", contenu: "Évite que ta voix ne bascule accidentelquement vers un cri complet ou un son purement propre." },
        { num: 3, titre: "L'endurance sur un morceau", contenu: "Gère ton souffle et tes muscles pour enchaîner les lignes agressives sans te fatiguer au bout de 2 lignes." }
      ],
      validation: "Chanter une phrase rock agressive en maintenant une saturation constante sur les notes cibles sans perdre la justesse de la mélodie."
    },
    {
      code: "etape-5-2",
      titreEtape: "Effets Spéciaux et Distorsions Avancées",
      phase: "Phase 5 : Les Techniques Avancées",
      lecons: [
        { num: 1, titre: "Le Pig Squeal", contenu: "Place ta langue contre ton palais pour créer des sifflements d'harmoniques ultra-aigus." },
        { num: 2, titre: "Le Tunnel Throat", contenu: "Creuse le milieu de ta langue pour générer une double résonance unique." },
        { num: 3, titre: "Les transitions rapides", contenu: "Entraîne-toi à passer d'un growl grave à un scream aigu en moins d'une fraction de seconde." }
      ],
      validation: "Enchaîner un growl grave, un tunnel throat moyen et un scream aigu de manière fluide et contrôlée sur une seule expiration."
    }
  ]
};

const tranchesAge = [
  {
    cle: "adulte",
    layout: "../../../layouts/LayoutAdulte.astro",
    dossierBase: "src/pages"
  },
  {
    cle: "enfant",
    layout: "../../../layouts/LayoutEnfant.astro",
    dossierBase: "src/pages"
  }
];

// Générateur de contenu Markdown pour chaque leçon
function genererContenuLecon(layout, titreLecon, titreEtape, phase, urlRetour, labelRetour, numLecon, contenuDetail, validationEtape) {
  return '---' + '\n' +
    'layout: "' + layout + '"' + '\n' +
    'title: "Leçon ' + numLecon + ' : ' + titreLecon + '"' + '\n' +
    'urlRetour: "' + urlRetour + '"' + '\n' +
    'labelRetour: "' + labelRetour + '"' + '\n' +
    '---' + '\n\n' +
    '# 🎤 Leçon ' + numLecon + ' : ' + titreLecon + '\n\n' +
    '**Sous-catégorie :** ' + phase + ' - *' + titreEtape + '*' + '\n\n' +
    '---' + '\n\n' +
    '## 📖 Contenu du cours' + '\n' +
    contenuDetail + '\n\n' +
    'Pratique cet exercice lentement. Concentre-toi sur la détente corporelle et ton soutien abdominal.' + '\n\n' +
    '---' + '\n\n' +
    '## 🏆 Critère de validation de l\'étape' + '\n' +
    'Pour finir cette étape et passer à la suivante, tu devras réussir le test suivant :' + '\n' +
    '> **Défi :** ' + validationEtape + '\n';
}

console.log("🚀 Lancement de la génération des leçons de Chant...");

tranchesAge.forEach(age => {
  const labelAge = age.cle === "adulte" ? "Adultes" : "Enfants";
  const instrumentCle = "chant";

  configurationChant.etapes.forEach(etape => {
    // 1. Détermination du dossier cible (ex: src/pages/chant/adulte/etape-1-1)
    const dossierEtape = path.join(age.dossierBase, instrumentCle, age.cle, etape.code);
    const urlRetour = "/chant/" + age.cle + "/";
    const labelRetour = "Retour au cursus Chant " + labelAge;

    // 2. Création récursive du dossier d'étape
    if (!fs.existsSync(dossierEtape)) {
      fs.mkdirSync(dossierEtape, { recursive: true });
      console.log("📁 Dossier créé : " + dossierEtape);
    }

    // 3. Écriture des 3 fichiers de leçons de l'étape
    etape.lecons.forEach(lecon => {
      const nomFichier = "lecon-" + lecon.num + ".md";
      const cheminFichier = path.join(dossierEtape, nomFichier);

      const contenu = genererContenuLecon(
        age.layout,
        lecon.titre,
        etape.titreEtape,
        etape.phase,
        urlRetour,
        labelRetour,
        lecon.num,
        lecon.contenu,
        etape.validation
      );

      fs.writeFileSync(cheminFichier, contenu, 'utf8');
      console.log("📄 Fichier créé : " + cheminFichier);
    });
  });
});

console.log("\n✅ Tout est prêt ! Les 14 étapes de Chant (soit 84 fichiers de cours) ont été générées avec succès.");