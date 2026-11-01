/* ==========================================================================
   Données du prototype.
   Dans Wix, ces listes correspondent à des collections CMS (si le CMS est
   disponible) ou à du contenu statique saisi page par page (sinon).
   - realisations : réalisations passées (portfolio)   -> collection "Realisations"
   - experiences  : activités réelles du site actuel   -> collection "Experiences"
   - events       : événements à venir                 -> Wix Events (application)
   ========================================================================== */
window.BMG = window.BMG || {};

/* Catégories de réalisations (propositions de structure, à valider). */
BMG.categories = [
  { id: "team-building", label: "Team-building" },
  { id: "entreprise", label: "Incentives & entreprises" },
  { id: "gastronomie", label: "Expériences gastronomiques" },
  { id: "bruxelles", label: "Découvertes de Bruxelles" },
  { id: "prive", label: "Événements privés" }
];

/* --------------------------------------------------------------------------
   RÉALISATIONS — EXEMPLES FICTIFS
   Les photos proviennent de la galerie actuelle du site. Les textes sont des
   contenus de démonstration : ils ne décrivent pas de véritables événements
   et doivent être remplacés par les informations fournies par la cliente.
   -------------------------------------------------------------------------- */
BMG.realisations = [
  {
    slug: "casino-de-la-biere-seminaire",
    demo: true,
    title: "Un Casino de la Bière pour clôturer un séminaire",
    category: "team-building",
    tags: ["team-building"],
    client: "Entreprise",
    lieu: "Bruxelles · espace privatisé",
    activite: "Casino de la Bière",
    format: "Fin de journée · animation de groupe",
    cover: "casino-table",
    excerpt: "Jetons, croupiers-biérologues et bières belges servies à l’aveugle : un challenge convivial pour terminer une journée de travail en beauté.",
    contexte: "L’entreprise souhaitait une activité courte et fédératrice pour clôturer son séminaire : accessible à tous, amateurs de bière comme néophytes, et qui laisse une vraie place à l’échange entre collègues.",
    steps: [
      { t: "Accueil et règles du jeu", d: "Les croupiers-biérologues présentent le principe et distribuent les jetons autour des tables de casino." },
      { t: "Dégustations à l’aveugle", d: "Chaque bière est servie en galopin. Robe, arômes, provenance, degré d’alcool : chacun mise sur son palais." },
      { t: "Révélations et remise des prix", d: "Les réponses sont dévoilées, les plus perspicaces sont récompensés et la soirée se poursuit autour du bar." }
    ],
    photos: ["casino-table", "casino-detail", "casino-noir-blanc", "casino-rose", "degustation-mystere", "degustation-verres"]
  },
  {
    slug: "soiree-bieres-abbaye",
    demo: true,
    title: "Une soirée d’entreprise au temps des abbayes",
    category: "entreprise",
    tags: ["entreprise"],
    client: "Agence événementielle (MICE)",
    lieu: "Bruxelles · lieu privatisé",
    activite: "Animation de soirée et bières d’abbaye",
    format: "Réception · animation en continu",
    cover: "soiree-abbaye-moine",
    excerpt: "Moines comédiens, lueur des bougies et bières d’abbaye : une mise en scène immersive pour accueillir les invités d’une agence partenaire.",
    contexte: "L’agence recherchait une animation à forte identité belge pour la soirée de ses invités : une ambiance qui se crée dès l’arrivée et une histoire à raconter autour de la bière.",
    steps: [
      { t: "Un accueil mis en scène", d: "Des comédiens en tenue de moines accueillent les invités et donnent immédiatement le ton de la soirée." },
      { t: "Le bar de l’abbaye", d: "Dégustation de bières d’abbaye et trappistes, racontée par nos biérologues : traditions monastiques et savoir-faire brassicole." },
      { t: "Une animation qui accompagne la soirée", d: "Les invités vont et viennent au fil de la réception ; l’animation se poursuit sans interrompre les échanges." }
    ],
    photos: ["soiree-abbaye-moine", "soiree-abbaye-invites", "soiree-abbaye-toast", "soiree-abbaye-moines"]
  },
  {
    slug: "reception-bar-a-bieres",
    demo: true,
    title: "Un bar à bières élégant pour une réception d’entreprise",
    category: "entreprise",
    tags: ["entreprise"],
    client: "Entreprise",
    lieu: "Bruxelles · salon historique",
    activite: "Bar à bières élégant",
    format: "Cocktail · réception",
    cover: "reception-buffet",
    excerpt: "Une sélection de bières belges d’exception, servie et commentée par nos biérologues tout au long de la réception.",
    contexte: "Pour une réception réunissant collaborateurs et partenaires, l’entreprise souhaitait remplacer le bar classique par une animation qualitative, élégante et résolument belge.",
    steps: [
      { t: "Une sélection sur mesure", d: "Au minimum cinq bières de Belgique, choisies pour leur diversité : blonde légère, IPA, stout, ambrée, lambic, bières vieillies…" },
      { t: "Un service commenté", d: "Nos biérologues servent, présentent chaque bière et accompagnent les invités : goûts, arômes, styles." },
      { t: "Au cœur de la réception", d: "Le bar s’intègre au buffet et au déroulé de l’événement, pour que la dégustation reste un moment d’échange." }
    ],
    photos: ["reception-buffet", "reception-invites", "equipe-reception", "reception-bar", "bar-bieres-bouteilles", "biere-houblon"]
  },
  {
    slug: "beer-quiz-atelier-chocolat",
    demo: true,
    title: "Beer Quiz et atelier chocolat : deux icônes belges",
    category: "gastronomie",
    tags: ["gastronomie", "team-building"],
    client: "Entreprise",
    lieu: "Bruxelles · centre historique",
    activite: "Workshop Chocolat & Bière",
    format: "Deux ateliers en alternance",
    cover: "atelier-chocolat",
    excerpt: "Deux équipes, deux ateliers : un quiz de dégustation à l’aveugle d’un côté, la création de chocolats aux côtés d’un maître chocolatier de l’autre.",
    contexte: "Le groupe souhaitait découvrir deux icônes belges en une seule activité, avec un format participatif où chacun repart avec ses propres créations.",
    steps: [
      { t: "Deux équipes, deux univers", d: "Le groupe est divisé en deux équipes qui alternent entre les deux expériences." },
      { t: "Beer Quiz", d: "Quatre bières belges en verres opaques, des questions surprenantes et de petits défis : couleur, arômes, degré d’alcool…" },
      { t: "Atelier chocolat", d: "Aux côtés d’un maître chocolatier bruxellois, chacun découvre les secrets du chocolat belge et réalise ses propres créations." }
    ],
    photos: ["atelier-chocolat", "chocolat-beer-my-guest", "chocolat-creation", "chocolat-atelier-tablier", "soiree-chocolat-neon"]
  },
  {
    slug: "bruxelles-a-velo",
    demo: true,
    title: "Bruxelles à vélo, entre street art et brasseries",
    category: "bruxelles",
    tags: ["bruxelles", "team-building"],
    client: "Groupe international",
    lieu: "Bruxelles · du centre au Cinquantenaire",
    activite: "City tour à vélo",
    format: "Demi-journée · guide local",
    cover: "velo-selfie",
    excerpt: "Une balade guidée à vélo électrique pour découvrir les incontournables, les fresques BD et une brasserie bruxelloise.",
    contexte: "Le groupe disposait d’une demi-journée et souhaitait découvrir un maximum de Bruxelles de manière active, avec une pause bière en chemin.",
    steps: [
      { t: "Départ depuis l’hôtel", d: "Remise des vélos — principalement électriques — et briefing avec le guide." },
      { t: "Incontournables et parcours BD", d: "Palais royal, Cinquantenaire, fresques de bande dessinée : les grands sites et les petites histoires de la ville." },
      { t: "Halte brassicole", d: "Arrêt dans une brasserie pour découvrir et déguster des bières locales avant le retour." }
    ],
    photos: ["velo-selfie", "velo-brasserie", "velo-bd", "velo-cinquantenaire", "velo-silos"]
  },
  {
    slug: "degustation-basilique-koekelberg",
    demo: true,
    title: "Bières d’abbaye au cœur de la Basilique de Koekelberg",
    category: "entreprise",
    tags: ["entreprise", "bruxelles"],
    client: "Agence réceptive",
    lieu: "Basilique nationale de Koekelberg",
    activite: "Atelier « La Bière et l’Église »",
    format: "Visite guidée · panorama · dégustation",
    cover: "basilique-nef",
    excerpt: "Visite guidée, panorama à 360° sur Bruxelles puis dégustation de bières d’abbaye et trappistes dans un décor Art déco hors du commun.",
    contexte: "Pour un programme incentive, l’agence cherchait un lieu d’exception, encore méconnu des visiteurs, et une activité culturelle qui reste conviviale.",
    steps: [
      { t: "Découverte de la basilique", d: "Avec le guide, le groupe découvre l’architecture Art déco, l’histoire et les espaces monumentaux du bâtiment." },
      { t: "Panorama à 360°", d: "Montée vers les hauteurs pour admirer Bruxelles sous un angle inédit." },
      { t: "« La Bière et l’Église »", d: "Dégustation de bières d’abbaye et trappistes qui retrace les liens entre traditions monastiques et savoir-faire brassicole belge." }
    ],
    photos: ["basilique-nef", "basilique-verres", "basilique-degustation", "basilique-vitrail"]
  },
  {
    slug: "jeu-de-piste-anniversaire",
    demo: true,
    title: "Un jeu de piste bière pour fêter un anniversaire",
    category: "prive",
    tags: ["prive", "bruxelles"],
    client: "Groupe privé · entre amis",
    lieu: "Bruxelles · centre historique",
    activite: "Jeu de piste bière",
    format: "Équipes de 4 à 8 · roadbook",
    cover: "jeu-piste-equipe",
    excerpt: "Roadbook en main, les équipes ont sillonné les ruelles de Bruxelles entre énigmes, défis photo et dégustations à l’aveugle.",
    contexte: "Un groupe d’amis cherchait une activité originale pour célébrer un anniversaire : ludique, en plein air et ponctuée de pauses gourmandes.",
    steps: [
      { t: "Accueil et roadbook", d: "L’animateur accueille les équipes, explique les règles et remet à chacune son roadbook." },
      { t: "L’enquête dans les ruelles", d: "Énigmes, défis photo et quiz d’observation entre monuments incontournables et fresques urbaines." },
      { t: "Dégustations à l’aveugle", d: "Des galopins de bière dans trois bars emblématiques ; pour gagner, il faut deviner les saveurs." },
      { t: "Révélation du grand gagnant", d: "L’animateur dévoile les réponses et sacre l’équipe gagnante." }
    ],
    photos: ["jeu-piste-equipe", "jeu-piste-roadbook", "jeu-piste-couple", "jeu-piste-groupe", "jeu-piste-in-den-vos", "jeu-piste-belgian-beer"]
  },
  {
    slug: "balade-gourmande-famille",
    demo: true,
    title: "Une balade gourmande en famille au cœur de Bruxelles",
    category: "gastronomie",
    tags: ["gastronomie", "prive", "bruxelles"],
    client: "Groupe privé · famille",
    lieu: "Bruxelles · centre historique",
    activite: "Balade gourmande – Food tour",
    format: "Balade guidée · environ 2 h",
    cover: "balade-chocolat",
    excerpt: "Pralines chez deux chocolatiers, halte dans un bar typiquement bruxellois et anecdotes sur la ville : une balade qui plaît à toutes les générations.",
    contexte: "La famille souhaitait découvrir Bruxelles autrement le temps d’un week-end, avec une activité adaptée à tous les âges et des alternatives sans alcool.",
    steps: [
      { t: "Le centre historique", d: "Le guide fait découvrir les lieux emblématiques et les secrets de Bruxelles." },
      { t: "Bruxelles et ses pralines", d: "Halte chez deux chocolatiers, avec dégustation de pralines artisanales soigneusement sélectionnées." },
      { t: "La halte bière", d: "Direction un bar typiquement bruxellois pour une dégustation, avec des alternatives sans alcool pour les plus jeunes." }
    ],
    photos: ["balade-chocolat", "particuliers-guide-famille", "chocolaterie", "balade-toast", "balade-manneken"]
  }
];

/* --------------------------------------------------------------------------
   EXPÉRIENCES — contenus réels repris des fiches du site actuel
   (Wix Stores aujourd'hui, affichées "Out of stock").
   -------------------------------------------------------------------------- */
BMG.experiences = [
  {
    slug: "beer-tasting-quiz", title: "Beer Tasting Quiz", img: "tablee-bougies",
    signature: "Notre expérience signature",
    audience: ["entreprises", "particuliers"], types: ["degustation", "jeu"],
    short: "Une dégustation interactive guidée par un zythologue : histoire, anecdotes, dégustation à l’aveugle et quiz.",
    duree: "1 h à 1 h 30", groupe: "2 à 300 pers.",
    long: [
      "Si nous sommes experts en activités et expériences à Bruxelles et partout en Belgique, la bière reste incontestablement l’une de nos grandes spécialités.",
      "Guidé par un zythologue professionnel et dynamique, plongez dans l’univers de la bière belge à travers une dégustation interactive mêlant histoire, culture, anecdotes et challenges. Dégustation à l’aveugle, quiz et découvertes sensorielles : une expérience conviviale, accessible et résolument belge.",
      "L’activité peut être organisée dans l’un de nos lieux partenaires ou directement sur votre lieu de réunion, conférence ou événement. Des alternatives sans alcool sont toujours possibles sur demande."
    ]
  },
  {
    slug: "casino-de-la-biere", title: "Casino de la Bière", img: "casino-table",
    audience: ["entreprises"], types: ["degustation", "jeu", "soiree"],
    short: "Jetons, croupiers-biérologues et bières belges servies à l’aveugle : faites vos jeux… et misez sur la bonne bière.",
    duree: "1 h à 1 h 30 (ou en continu)", groupe: "jusqu’à 30 pers. · plus en format stand",
    long: [
      "Autour de nos tables de Casino de la Bière, nos croupiers-biérologues distribuent les jetons et servent les bières belges à l’aveugle. À vous de miser sur la bonne réponse : couleur, arômes, saveurs, provenance, degré d’alcool…",
      "Deux formats phares : « Dégustation & Challenge », une activité de groupe d’1 h à 1 h 30 pour 30 participants maximum ; ou le « Stand Casino de la Bière », idéal pour une soirée incentive, un cocktail ou une réception : les participants rejoignent les tables au fur et à mesure.",
      "Lambics, bières d’abbaye, IPA, bières vieillies en fût… Des cadeaux sont prévus pour les plus perspicaces."
    ]
  },
  {
    slug: "top-chef-cocktail-biere", title: "Top Chef – Cocktail bière", img: "cocktail-biere",
    audience: ["entreprises"], types: ["jeu", "gourmand"],
    short: "À vos shakers ! Les équipes s’affrontent pour créer leurs cocktails à base de bière devant un jury fun et impitoyable.",
    duree: "1 h à 1 h 30", groupe: "1 à 40 pers.",
    long: [
      "Inspiré des concours culinaires télévisés, notre Top Chef – Cocktail Bière transforme votre groupe en équipes prêtes à s’affronter autour d’un challenge créatif et convivial.",
      "Bières, jus de fruits, sirops, fruits frais, décorations… tout est à disposition pour réaliser trois cocktails autour de différents défis, dont un challenge final. Chaque création passe devant le jury : goût, présentation, respect du thème.",
      "Dans vos locaux ou dans un espace privatisé, à Bruxelles ou ailleurs en Belgique. Une version entièrement sans alcool est possible."
    ]
  },
  {
    slug: "workshop-chocolat-biere", title: "Beer Quiz & atelier chocolat", img: "atelier-chocolat",
    audience: ["entreprises"], types: ["jeu", "gourmand", "degustation"],
    short: "Une activité deux-en-un : quiz de dégustation de bières belges et création de chocolats avec un maître chocolatier.",
    duree: "2 h à 3 h", groupe: "2 à 180 pers.",
    long: [
      "Votre groupe est divisé en deux équipes qui alternent entre deux expériences emblématiques.",
      "Beer Quiz : quatre dégustations de bières belges, verres opaques, questions surprenantes et petits défis. Atelier chocolat : aux côtés d’un maître chocolatier bruxellois, découvrez les secrets du chocolat belge et réalisez vos propres créations.",
      "Dans le centre de Bruxelles, dans un autre lieu adapté ou directement sur votre lieu de conférence. Le format est modulable selon votre groupe, votre budget et vos contraintes."
    ]
  },
  {
    slug: "pairing-biere-chocolat", title: "Pairing bière & chocolat", img: "chocolaterie",
    audience: ["entreprises", "particuliers"], types: ["degustation", "gourmand"],
    short: "Deux icônes belges, un accord parfait : quatre bières et six pralines à associer avec un zythologue.",
    duree: "1 h à 1 h 30", groupe: "2 à 300 pers.",
    long: [
      "Et si deux des plus grands symboles de la Belgique formaient aussi l’accord parfait ? Guidé par un zythologue, découvrez les associations surprenantes entre bières belges et chocolats artisanaux.",
      "Au programme : quatre bières soigneusement sélectionnées et six pralines de qualité, à déguster et à associer pour comprendre comment arômes, textures et saveurs se complètent… ou vous surprennent.",
      "Des alternatives sans alcool peuvent être proposées. Dans un lieu partenaire du centre historique, dans un lieu choisi pour votre groupe ou sur le lieu de votre événement."
    ]
  },
  {
    slug: "jeux-de-piste", title: "Jeux de piste gourmands", img: "jeu-piste-equipe",
    audience: ["entreprises", "particuliers"], types: ["jeu", "visite"],
    short: "En équipe, suivez les indices dans les ruelles de Bruxelles : BD, street art, bière, chocolat… et bonne humeur.",
    duree: "2 h à 2 h 30", groupe: "2 à 300 pers.",
    long: [
      "Partez à l’aventure au cœur de Bruxelles : suivez les indices, relevez des challenges et découvrez la ville autrement, entre anecdotes insolites, culture et bonne humeur.",
      "Plusieurs expériences : Jeu de piste BD, Street Art & Chocolat ; Jeu de piste Bière & Chocolat ; jeux de piste sur mesure, adaptés à votre groupe et à vos envies.",
      "Idéal pour les entreprises, les team-buildings, les groupes d’amis ou les événements privés."
    ]
  },
  {
    slug: "balade-gourmande", title: "Balade gourmande – Food tour", img: "balade-chocolat",
    signature: "L’un de nos best-sellers",
    audience: ["entreprises", "particuliers"], types: ["visite", "gourmand"],
    short: "Pralines chez deux chocolatiers, halte bière dans un bar bruxellois et anecdotes sur la ville.",
    duree: "2 h à 2 h 30", groupe: "2 à 400 pers.",
    long: [
      "Notre incontournable pour découvrir la ville autrement, à Bruxelles mais aussi à Bruges, Gand et Anvers.",
      "Avec un guide local passionné, explorez les incontournables et les petites rues plus confidentielles. Halte chez deux chocolatiers, avec dégustation de trois pralines artisanales, puis direction un bar typiquement bruxellois pour déguster deux bières belges.",
      "Dégustations supplémentaires, autres spécialités belges, parcours plus court ou plus long : tout peut être adapté à votre groupe et à la saison."
    ]
  },
  {
    slug: "basilique-koekelberg", title: "Atelier bière dans la Basilique", img: "basilique-verres",
    audience: ["entreprises"], types: ["degustation", "visite"],
    short: "Visite de la Basilique de Koekelberg, panorama à 360° et dégustation « La Bière et l’Église ».",
    duree: "2 h à 2 h 30", groupe: "1 à 120 pers.",
    long: [
      "Entrez dans la Basilique nationale de Koekelberg, joyau Art déco et l’un des monuments les plus étonnants de Bruxelles. Avec votre guide, découvrez son architecture et son histoire avant d’admirer un panorama à 360° sur la ville.",
      "Puis place à « La Bière et l’Église » : une dégustation autour des bières d’abbaye et trappistes qui retrace les liens entre traditions monastiques et savoir-faire brassicole belge.",
      "Envie d’un autre lieu d’exception ? D’autres lieux emblématiques ou insolites sont possibles sur demande."
    ]
  },
  {
    slug: "brasserie-historique", title: "Brasserie historique & bières modernes", img: "brasserie-futs",
    audience: ["entreprises", "particuliers"], types: ["visite", "degustation"],
    short: "Du lambic brassé comme autrefois aux créations d’aujourd’hui : Bruxelles racontée par sa bière.",
    duree: "1 h à 3 h", groupe: "2 à 100 pers.",
    long: [
      "L’expérience commence dans une brasserie historique unique, à deux pas de la Gare du Midi, où la bière est encore produite selon des méthodes ancestrales. Vous y découvrirez le lambic, bière historique de Bruxelles issue de la fermentation spontanée.",
      "Vous poursuivez à pied vers le centre historique avec votre guide, puis changement d’époque avec les bières d’aujourd’hui.",
      "Les deux visages de la bière bruxelloise : les méthodes d’autrefois face au brassage contemporain."
    ]
  },
  {
    slug: "bruxelles-cachee-belgian-beer-world", title: "Bruxelles cachée & Belgian Beer World", img: "lieu-bourse",
    audience: ["entreprises", "particuliers"], types: ["visite", "degustation"],
    short: "Sur les traces du Bruxelles disparu, jusqu’à la Bourse et son rooftop avec vue sur la ville.",
    duree: "1 h à 2 h", groupe: "2 à 300 pers.",
    long: [
      "Partez sur les traces du Bruxelles disparu : l’ancienne rivière enfouie sous la ville, les quartiers transformés et les histoires qui ont façonné le centre historique.",
      "Le parcours mène jusqu’à la Bourse de Bruxelles, entièrement rénovée, pour découvrir le Belgian Beer World et la culture brassicole belge comme un véritable patrimoine.",
      "Pour terminer : le rooftop de la Bourse, avec sa vue sur Bruxelles et une bière (ou une alternative sans alcool)."
    ]
  },
  {
    slug: "city-tours-velo", title: "City tours à vélo", img: "velo-selfie",
    audience: ["entreprises", "particuliers"], types: ["visite"],
    short: "Bruxelles, Gand, Anvers, Bruges… à vélo (principalement électrique) avec un guide local.",
    duree: "2 h à 3 h (jusqu’à une journée)", groupe: "2 à 120 pers.",
    long: [
      "Enfourchez votre vélo pour une balade dynamique entre incontournables, quartiers méconnus, anecdotes et petites surprises.",
      "Parcours au choix : incontournables et hors des sentiers battus, architecture et patrimoine, bande dessinée et street art, histoire brassicole, bière et chocolat… ou un itinéraire entièrement sur mesure.",
      "Départ et arrivée où vous le souhaitez : hôtel, lieu de conférence, restaurant. Pauses café, bière, chocolat ou visite de brasserie en option."
    ]
  },
  {
    slug: "visites-guidees", title: "Visites guidées pédestres", img: "street-art",
    audience: ["entreprises", "particuliers"], types: ["visite"],
    short: "Bruxelles avec un local : incontournables, Art nouveau, BD et street art, quartier royal ou européen…",
    duree: "1 h à une journée", groupe: "2 à 500 pers.",
    long: [
      "Explorez Bruxelles à pied, bien au-delà de ses incontournables, avec un guide local passionné : lieux emblématiques, petites rues, anecdotes et curiosités.",
      "Choisissez votre Bruxelles : découverte et incontournables, Art nouveau et Art déco, bande dessinée et street art, quartier royal, quartier européen, histoire de Bruxelles, hors des sentiers battus…",
      "Toutes nos visites sont modulables et peuvent être enrichies : musée, monument, exposition ou autre expérience bruxelloise."
    ]
  },
  {
    slug: "institutions-europeennes", title: "Explorez les institutions européennes", img: "velo-cinquantenaire",
    audience: ["entreprises"], types: ["visite"],
    short: "Parlement, Commission, Parc Léopold, Cinquantenaire : comprendre l’Europe au cœur de Bruxelles.",
    duree: "1 h 30 à 3 h (ou journée)", groupe: "2 à 500 pers.",
    long: [
      "Entrez dans les coulisses de l’Union européenne et découvrez pourquoi Bruxelles est devenue l’un des centres politiques les plus importants au monde.",
      "Plusieurs formules : balade guidée dans le Quartier européen ; balade et Parlamentarium ; balade et Maison de l’Histoire européenne ; balade et Parlement européen avec accès à l’Hémicycle.",
      "Programme sur mesure, selon les disponibilités des institutions, et combinable avec une dégustation, un jeu de piste ou une activité de team-building."
    ]
  },
  {
    slug: "bruxelles-royal-coudenberg", title: "Bruxelles royal & Palais du Coudenberg", img: "lieu-ruines",
    audience: ["entreprises", "particuliers"], types: ["visite"],
    short: "Du Parc de Bruxelles à la Place Royale, puis sous la ville, dans les vestiges du palais de Charles Quint.",
    duree: "À partir de 2 h", groupe: "2 à 200 pers.",
    long: [
      "Explorez le Quartier royal à travers son architecture, ses anecdotes, ses personnages et les grandes pages de l’histoire belge.",
      "Puis descendez sous la ville pour explorer les vestiges du Palais du Coudenberg, ancienne résidence de Charles Quint : un voyage dans le Bruxelles disparu.",
      "La visite peut se terminer par une dégustation de bières belges accompagnée d’un quiz."
    ]
  },
  {
    slug: "anvers-en-une-journee", title: "Anvers en une journée", img: "anvers",
    audience: ["entreprises"], types: ["visite"],
    short: "Diamant, mode, architecture et port : une journée sur mesure dans la ville des contrastes.",
    duree: "1 h à une journée", groupe: "2 à 500 pers.",
    long: [
      "Historique, audacieuse, élégante et contemporaine : Anvers est une ville de contrastes. Son histoire se lit dans ses façades, ses églises et ses maisons historiques.",
      "Une journée type : plongée dans l’univers du diamant, déjeuner dans un lieu choisi selon l’expérience recherchée, découverte du centre historique, du quartier du diamant ou du port.",
      "Ce n’est qu’un exemple : dites-nous qui vous êtes, le temps dont vous disposez et ce que vous aimez."
    ]
  },
  {
    slug: "animations-soirees", title: "Animations pour vos soirées", img: "bar-bieres-soiree",
    audience: ["entreprises"], types: ["soiree"],
    short: "Mentaliste, comédiens Tintin & Haddock, musique, Casino de la Bière, bar à bières élégant…",
    duree: "1 h à 4 h ou plus", groupe: "10 à 400 pers.",
    long: [
      "Ce sont souvent les petites touches qui font les grandes soirées. Cocktail, dîner, incentive ou événement d’entreprise : choisissez une ou plusieurs animations.",
      "Mentaliste et magicien close-up ; Tintin et Capitaine Haddock (comédiens) ; chanteuses et saxophone ; Casino de la Bière ; bar à bières élégant et éphémère… et bien plus encore : DJ, musiciens, artistes ou concepts sur mesure.",
      "Dans des hôtels, lieux privatisés ou lieux d’exception, à Bruxelles et ailleurs en Belgique."
    ]
  },
  {
    slug: "bar-a-bieres-elegant", title: "Bar à bières élégant", img: "bar-bieres-bouteilles",
    audience: ["entreprises"], types: ["soiree", "degustation"],
    short: "Au moins cinq bières de Belgique, servies et présentées par nos biérologues.",
    duree: "Selon l’événement", groupe: "Sur demande",
    long: [
      "Nos biérologues sélectionnent pour vous un minimum de cinq bières de Belgique. Ils servent, présentent les bières et accompagnent les participants dans leur dégustation : goûts, arômes, style.",
      "Blonde légère, IPA amère et fruitée, stout aux notes de café, ambrée aux arômes de caramel, lambic aux notes acidulées, bières vieillies… chacun trouvera son bonheur."
    ]
  },
  {
    slug: "musee-des-egouts", title: "Dégustation insolite au Musée des Égouts", img: "egouts-tunnel",
    audience: ["entreprises", "particuliers"], types: ["visite", "degustation"],
    short: "L’histoire de l’eau à Bruxelles — élément clé de la bière — suivie d’une dégustation sur place.",
    duree: "Sur demande", groupe: "Sur demande",
    long: [
      "Rassurez-vous : il ne s’agit pas de patauger dans un souterrain sombre ! La visite du Musée des Égouts vous plonge dans l’histoire locale de l’eau, élément qui a façonné la ville et reste fondamental dans la fabrication de la bière.",
      "L’expérience commence par une visite du musée, suivie d’une dégustation de bières sur place."
    ]
  }
];

/* Expériences "réservables" pour les particuliers (pages dédiées actuelles). */
BMG.particuliers = [
  {
    slug: "jeu-de-piste-biere",
    title: "Le jeu de piste bière",
    subtitle: "Les secrets du lambic",
    img: "jeu-piste-roadbook",
    text: "En équipe de 4 à 8 personnes, munis d’un roadbook, résolvez une enquête, relevez des défis et dégustez des galopins de bière à l’aveugle dans trois bars emblématiques. Un animateur vous accompagne jusqu’à la révélation du grand gagnant.",
    points: ["Énigmes, défis photo et quiz d’observation", "Dégustations à l’aveugle dans 3 bars", "Pas fan de bière ? Optez pour un soft", "Existe aussi en version bière & chocolat"]
  },
  {
    slug: "journee-biere",
    title: "La journée bière à Bruxelles",
    subtitle: "Brasserie historique, lunch et jeu de piste",
    img: "cantillon-caisses",
    text: "Visite de la plus ancienne brasserie de Bruxelles et dégustation de trois bières, déjeuner dans un restaurant apprécié des Bruxellois, puis jeu de piste dans les ruelles de la ville pour terminer la journée en beauté.",
    points: ["Visite guidée d’une brasserie historique (lambic, gueuze)", "Déjeuner : plat, dessert, deux boissons et café", "Jeu de piste avec dégustation à l’aveugle", "Aussi le lundi, mardi, jeudi et vendredi pour les groupes privés"]
  }
];

/* --------------------------------------------------------------------------
   AGENDA — EXEMPLES (à gérer dans Wix Events)
   Les dates ci-dessous sont fictives.
   -------------------------------------------------------------------------- */
BMG.events = [
  { day: "14", month: "nov.", weekday: "Samedi", title: "Jeu de piste bière — séance ouverte", time: "14 h 00", place: "Bruxelles · centre historique", tag: "Particuliers", text: "Formez votre équipe ou rejoignez-en une : roadbook, défis et dégustations à l’aveugle." },
  { day: "26", month: "nov.", weekday: "Jeudi", title: "Dégustation bière du mois", time: "19 h 00", place: "Bruxelles · lieu partenaire", tag: "Dégustation", text: "Un thème, une sélection de bières belges et un zythologue pour vous les raconter." },
  { day: "05", month: "déc.", weekday: "Samedi", title: "Journée bière à Bruxelles", time: "11 h 00", place: "Bruxelles · Gare du Midi", tag: "Journée", text: "Brasserie historique, déjeuner bruxellois et jeu de piste l’après-midi." }
];

/* Libellés des types d'expériences (filtres du catalogue). */
BMG.types = {
  degustation: "Dégustation",
  jeu: "Jeu & challenge",
  visite: "Visite & découverte",
  gourmand: "Gourmand",
  soiree: "Soirée & animation"
};
