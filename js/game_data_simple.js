// Données SIMPLIFIÉES des étapes du jeu - Pour 10VG
// Textes narratifs plus courts et vocabulaire accessible

const stepsDataSimple = [
    // Étape 0 : Les motivations
    {
        title: "Les motivations",
        subtitle: "Espagne, 1518",
        image: "images/Cortès_portrait.jpg",
        narrative: "Tu es Hernán Cortés. Tu as 34 ans et tu vis à Cuba. Tu n'es pas riche. Des explorateurs reviennent du Mexique avec des histoires incroyables : des villes magnifiques, beaucoup d'or ! Le gouverneur cherche quelqu'un pour diriger une expédition. C'est ta chance de devenir riche et célèbre. Mais pourquoi veux-tu vraiment partir ?",
        essential: "Au XVIe siècle, les explorateurs espagnols voulaient trois choses : convertir les gens au christianisme (Dieu), devenir riches (Or), et devenir célèbres (Gloire). On appelait ça « Dieu, Or et Gloire ».",
        moreInfo: `
            <strong>Contexte économique et social :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>La petite noblesse espagnole (hidalgos) s'appauvrit après la Reconquista terminée en 1492</li>
                <li>Les guerriers formés au combat n'ont plus de guerre en Espagne, ils cherchent aventure ailleurs</li>
                <li>Le modèle antillais (Hispaniola, Cuba) a montré qu'on peut s'enrichir rapidement avec l'or et les esclaves</li>
            </ul>
            <strong>Les récits qui inspirent :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>En 1518, Grijalva revient du Yucatán avec de l'or et des récits de villes en pierre</li>
                <li>On parle d'une civilisation riche, organisée, avec des temples magnifiques</li>
                <li>Les Espagnols croient être proches des « Indes » de Marco Polo et de Christophe Colomb</li>
            </ul>
            <strong>Le catholicisme militant :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>L'Espagne sort de 700 ans de Reconquista contre les Maures (musulmans)</li>
                <li>Convertir les « païens » est vu comme une mission sacrée</li>
                <li>Le pape a accordé aux rois catholiques le droit de conquérir les terres « païennes »</li>
            </ul>
            <strong>L'ambition personnelle de Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés refuse d'être un simple colon, il veut commander et conquérir</li>
                <li>Il est lettré, connaît le droit, et sait manipuler les règles administratives espagnoles</li>
                <li>Sa devise : "Mieux vaut mourir glorieux que vivre déshonorés"</li>
            </ul>
        `,
        choices: [
            {
                text: "Motivation principale : L'OR. Je veux devenir riche, très riche. Les conquistadors qui ont réussi aux Antilles sont maintenant puissants. C'est mon tour.",
                effects: { richesses: 10, pouvoir: 5, humanisme: -5 },
                historical: false
            },
            {
                text: "Motivation principale : LA GLOIRE et le pouvoir. Je veux être gouverneur, avoir des terres, commander des hommes. L'or n'est qu'un moyen.",
                effects: { pouvoir: 15, richesses: 5, humanisme: -5 },
                historical: false
            },
            {
                text: "Motivation principale : ÉVANGÉLISER. Sauver ces âmes païennes est un devoir sacré. L'or et la gloire viendront comme récompenses divines.",
                effects: { humanisme: 10, pouvoir: 5, richesses: -5 },
                historical: false
            },
            {
                text: "Les TROIS motivations sont importantes. Dieu, Or et Gloire sont indissociables. Je ne peux réussir sans les trois.",
                effects: { pouvoir: 5, richesses: 5, humanisme: 5 },
                historical: true,
                feedback: "Cortés voulait vraiment ces trois choses en même temps. Dans ses lettres au roi, il parle de religion, mais on voit qu'il veut aussi l'or et le pouvoir."
            }
        ]
    },

    // Étape 1 : Financement
    {
        title: "Financement de l'expédition",
        subtitle: "Cuba, février 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "Le gouverneur te donne un peu d'argent, mais pas assez. Tu dois équiper 11 bateaux et 550 hommes pour plusieurs mois. C'est très cher ! Tu dois emprunter de l'argent et convaincre des gens d'investir. Chaque peso (monnaie espagnole) que tu dépenses maintenant pourrait te sauver la vie plus tard. Comment vas-tu dépenser ton budget ?",
        essential: "Les expéditions n'étaient PAS payées par le roi d'Espagne, mais par des investisseurs privés. Les conquistadors s'endettaient beaucoup et devaient absolument réussir pour rembourser leurs dettes.",
        moreInfo: `
            <strong>Le système des capitulations :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Contrat entre la Couronne et le conquistador : la Couronne prend 20% du butin (le "quinto real")</li>
                <li>Le reste est partagé entre les investisseurs selon leur mise de départ</li>
                <li>Source de conflits permanents : qui a investi combien ? qui mérite quelle part ?</li>
            </ul>
            <strong>Les coûts astronomiques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Un cheval coûte 100-150 pesos (le salaire annuel d'un ouvrier)</li>
                <li>Un canon : 200-300 pesos</li>
                <li>Arquebuse : 50-80 pesos</li>
                <li>Armure complète : 30-50 pesos</li>
                <li>Vivres pour 6 mois pour 550 hommes : environ 2000 pesos</li>
            </ul>
            <strong>Les investisseurs :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Velázquez met environ 5000 pesos (un tiers du total)</li>
                <li>Cortés emprunte 4000-5000 pesos à des marchands de Cuba</li>
                <li>Les soldats eux-mêmes investissent (armes, chevaux) et attendent leur part</li>
            </ul>
            <strong>L'endettement = pression :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés doit des sommes colossales qu'il ne pourra JAMAIS rembourser sans un immense butin</li>
                <li>Cette dette le pousse à désobéir à Velázquez : impossible de faire marche arrière</li>
                <li>Les soldats aussi sont endettés, d'où leur férocité dans la recherche d'or</li>
            </ul>
        `,
        choices: [
            {
                text: "Budget équilibré : 16 chevaux (2000), 10 canons (1800), armures prioritaires (1500). Je m'endette de 2000 pesos supplémentaires pour sécuriser l'expédition.",
                effects: { pouvoir: 10, loyaute: 10, richesses: -10 },
                historical: true,
                feedback: "C'est ce qu'a fait Cortés. Il a beaucoup investi dans les chevaux et les canons, et s'est beaucoup endetté. Ses dettes l'ont forcé à désobéir au gouverneur.",
                equipment: ['chevaux', 'canons', 'armures', 'endetté']
            },
            {
                text: "Priorité militaire : Tous les chevaux possibles (2000), tous les canons (1800), toutes les arquebuses (800). Pas d'interprète, on improvisera.",
                effects: { pouvoir: 15, humanisme: -10, loyaute: 5 },
                historical: false,
                equipment: ['chevaux', 'canons', 'arquebuses']
            },
            {
                text: "Priorité diplomatie : Interprète expérimenté (500), marchandises d'échange (800), vivres supplémentaires (1000), médecins (600). Moins d'armes mais plus de survie.",
                effects: { humanisme: 15, loyaute: 10, pouvoir: -10 },
                historical: false,
                equipment: ['interprete', 'marchandises', 'vivres', 'medecins']
            },
            {
                text: "Économie maximale : Minimum d'équipement, on pillera sur place pour s'équiper. Je garde l'argent pour soudoyer des alliés plus tard.",
                effects: { richesses: 15, pouvoir: -15, loyaute: -10 },
                historical: false,
                gameOver: true,
                gameOverText: "Ton équipement est trop faible. Tes hommes, mal équipés et affamés, se révoltent contre toi. L'expédition échoue avant même de commencer."
            }
        ]
    },

    // Étape 2 : Innovations techniques
    {
        title: "Les innovations techniques",
        subtitle: "En mer, mars 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "Tu es en mer vers le Mexique. Ton pilote te montre les instruments qui permettent cette traversée : la boussole pour trouver le nord, l'astrolabe pour se repérer avec les étoiles. Sans ces inventions du XVe siècle, impossible de traverser l'Atlantique ! Ces technologies donnent un grand avantage aux Européens. Mais maintenant, une question : que fais-tu de tes bateaux une fois arrivé ?",
        essential: "Les progrès techniques du XVe siècle (caravelle, boussole, gouvernail, astrolabe, canons) ont permis aux Européens d'explorer le monde. Ces innovations expliquent pourquoi l'Europe a pu conquérir d'autres continents.",
        moreInfo: `
            <strong>Les innovations nautiques majeures :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Caravelle :</strong> Navire portugais rapide et maniable, combine voiles triangulaires (louvoyage contre le vent) et carrées (vitesse)</li>
                <li><strong>Gouvernail d'étambot :</strong> Fixé à l'arrière du navire, remplace l'aviron latéral, permet précision</li>
                <li><strong>Boussole magnétique :</strong> D'origine chinoise, adoptée au XIIIe siècle, permet navigation hors vue des côtes</li>
                <li><strong>Astrolabe :</strong> Mesure la latitude en observant l'angle du soleil ou des étoiles</li>
                <li><strong>Portulans :</strong> Cartes maritimes détaillées des côtes (mais intérieur des terres reste inconnu)</li>
            </ul>
            <strong>Armes révolutionnaires :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Canons de bronze :</strong> Montés sur navires, permettent bombardement côtier et supériorité navale</li>
                <li><strong>Arquebuses :</strong> Premières armes à feu portatives, lentes à recharger mais terrifiantes</li>
                <li><strong>Arbalètes d'acier :</strong> Puissantes, traversent les armures en coton aztèques</li>
            </ul>
            <strong>La route vers l'ouest :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Colomb (1492) a prouvé qu'on peut atteindre une terre en allant vers l'ouest</li>
                <li>Traité de Tordesillas (1494) : partage du monde entre Espagne (ouest) et Portugal (est/Afrique)</li>
                <li>Les Espagnols cherchent toujours le passage vers les "vraies" Indes et la Chine</li>
            </ul>
        `,
        choices: [
            {
                text: "Je décide de SABOTER les navires après débarquement. Pas de retraite possible = engagement total des troupes. Victoire ou mort.",
                effects: { pouvoir: 20, loyaute: -10 },
                historical: true,
                feedback: "Cortés a fait couler ses bateaux (on dit souvent 'brûler' mais il les a sabordés). Stratégie radicale : impossible de fuir, donc les hommes se battent désespérément."
            },
            {
                text: "Je GARDE tous les navires intacts pour assurer une retraite en cas de désastre. La sécurité avant l'audace.",
                effects: { loyaute: 10, pouvoir: -15 },
                historical: false
            },
            {
                text: "Je garde 2 navires, sabote le reste. Compromis : retraite possible pour les blessés graves, mais engagement fort.",
                effects: { pouvoir: 5, loyaute: 5 },
                historical: false
            },
            {
                text: "J'envoie la moitié des navires chercher des renforts à Cuba. Nous serons plus nombreux pour conquérir.",
                effects: { pouvoir: -10, loyaute: -5 },
                historical: false,
                feedback: "Mauvaise idée : cela permettrait au gouverneur d'apprendre ta désobéissance et d'envoyer des soldats pour t'arrêter."
            }
        ]
    },

    // Étape 3 : Départ de Cuba
    {
        title: "Le départ de Cuba",
        subtitle: "Cuba, mars 1519",
        image: "images/Cortes_brule_ses_navires.jpeg",
        narrative: "Tout est prêt pour partir. Mais hier soir, un messager t'apprend une mauvaise nouvelle : le gouverneur Velázquez a changé d'avis. Il te trouve trop ambitieux. Il veut annuler l'expédition et nommer quelqu'un d'autre. Le problème : tu as emprunté beaucoup d'argent. Si tu obéis, tu es ruiné à jamais. Les bateaux peuvent partir maintenant, en secret. Mais c'est une rébellion contre le gouverneur.",
        essential: "Les conquistadors partaient souvent contre les ordres, parce qu'ils avaient investi leur propre argent. La désobéissance était fréquente car les enjeux financiers étaient énormes.",
        moreInfo: `
            <strong>Pourquoi Velázquez se méfie-t-il ?</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés a déjà montré des signes d'insubordination dans le passé</li>
                <li>Il recrute trop de soldats, s'endette trop, semble vouloir conquérir plutôt qu'explorer</li>
                <li>Velázquez craint que Cortés ne lui vole la gloire et les richesses</li>
            </ul>
            <strong>Les risques de désobéir :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés devient un hors-la-loi, Velázquez peut envoyer des troupes pour l'arrêter</li>
                <li>Si la conquête échoue, Cortés sera pendu pour rébellion</li>
                <li>Même en cas de succès, il devra négocier directement avec le roi Charles Quint</li>
            </ul>
            <strong>Le calcul de Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Il est déjà trop endetté pour reculer : obéir = ruine totale</li>
                <li>S'il réussit la conquête, il peut se présenter au roi avec un empire conquis</li>
                <li>Le roi pardonnera sa désobéissance s'il apporte or et territoires</li>
            </ul>
        `,
        choices: [
            {
                text: "OBÉIR à Velázquez. Je ne peux pas me permettre de devenir un hors-la-loi. Je trouverai une autre opportunité plus tard.",
                effects: {},
                historical: false,
                gameOver: true,
                gameOverText: "Tu obéis et renonces à l'expédition. Criblé de dettes, tu perds tout. Quelqu'un d'autre conquiert le Mexique et devient riche. Tu finis ta vie comme petit colon à Cuba, rongé par les regrets."
            },
            {
                text: "PARTIR EN SECRET immédiatement avec les 11 navires. Tant pis pour Velázquez, je négocie directement avec le roi ensuite.",
                effects: { pouvoir: 15, richesses: -5, loyaute: -5 },
                historical: true,
                feedback: "C'est exactement ce qu'a fait Cortés le 18 février 1519. Il est parti de nuit sans autorisation. Cette désobéissance l'a forcé à réussir absolument."
            },
            {
                text: "NÉGOCIER un compromis avec Velázquez. Je lui promets une part plus importante du butin s'il me laisse partir.",
                effects: { richesses: -10, pouvoir: -5 },
                historical: false,
                gameOver: true,
                gameOverText: "Velázquez refuse de négocier. Pendant que tu perds du temps, il fait arrêter tes lieutenants et confisque tes bateaux. Tu es emprisonné pour dettes."
            },
            {
                text: "PARTIR avec FORCE : je mobilise mes hommes armés et je prends les navires de force si Velázquez tente de m'arrêter.",
                effects: { pouvoir: 10, loyaute: -10, humanisme: -10 },
                historical: false,
                feedback: "Trop agressif. Cortés est parti discrètement, pas en déclenchant une guerre à Cuba."
            }
        ]
    },

    // Étape 4 : Premiers contacts - Tabasco
    {
        title: "Premiers contacts - Tabasco",
        subtitle: "Côte du Mexique, mars 1519",
        image: "images/combats_azteques_et_espgnols.png",
        narrative: "Après deux semaines en mer, tu débarques près de Tabasco. Les Mayas (peuple local) te regardent avec méfiance. Tes interprètes essaient de communiquer : tu viens en paix. Mais les Mayas se souviennent d'une expédition espagnole violente l'année dernière. Ils refusent de parler. Le lendemain, des milliers de guerriers mayas attaquent ton campement. Tes canons font du bruit, tes chevaux terrifient les Mayas qui n'en ont jamais vu. Ils reculent, effrayés. Tu as gagné. Maintenant, que fais-tu ?",
        essential: "Les armes européennes (canons, arquebuses, épées en acier) et les chevaux ont créé un choc terrible chez les peuples d'Amérique. Mais les alliances avec les ennemis des Aztèques ont été encore plus importantes que les armes.",
        moreInfo: `
            <strong>Supériorité technologique espagnole :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Arquebuses :</strong> Bruyantes, fumée, terreur psychologique, mais lentes à recharger (1 coup/minute)</li>
                <li><strong>Canons :</strong> Dévastateurs à courte portée, bruit assourdissant qui panique</li>
                <li><strong>Armures d'acier :</strong> Protègent contre flèches et armes d'obsidienne (pierre volcanique)</li>
                <li><strong>Épées d'acier :</strong> Tranchantes, durables, vs armes en bois et obsidienne (fragiles)</li>
                <li><strong>Arbalètes :</strong> Puissance de pénétration supérieure aux arcs</li>
            </ul>
            <strong>Le choc des chevaux :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Aucun cheval en Amérique depuis 10 000 ans (extinction de la mégafaune)</li>
                <li>Les Mayas et Aztèques n'avaient jamais vu de grands mammifères domestiques</li>
                <li>Ils pensaient que cavalier + cheval = une seule créature mythologique</li>
                <li>Cortés utilisait les chevaux pour des charges terrifiantes en terrain ouvert</li>
            </ul>
            <strong>Armes aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Macuahuitl :</strong> Épée en bois avec lames d'obsidienne (tranchante mais fragile)</li>
                <li><strong>Atlatl :</strong> Propulseur de javelots, grande portée</li>
                <li><strong>Arcs et flèches :</strong> Efficaces mais ne percent pas l'acier</li>
                <li><strong>Armures de coton matelassé :</strong> Légères, protègent des flèches mais pas des épées d'acier</li>
            </ul>
            <strong>Le facteur psychologique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Le bruit des armes à feu terrorisait (tonnerre = colère divine dans la culture maya)</li>
                <li>Les Espagnols n'hésitaient pas à tuer massivement (guerre totale vs guerre rituelle aztèque)</li>
                <li>Les chiens de guerre espagnols (molosses) étaient dressés pour attaquer</li>
            </ul>
        `,
        choices: [
            {
                text: "MASSACRE pour terrifier. Je tue tous les guerriers capturés publiquement pour que la terreur se répande. Qu'ils sachent que résister = mort.",
                effects: { pouvoir: 10, richesses: 5, humanisme: -20, loyaute: -10 },
                historical: false,
                feedback: "Trop brutal même pour l'époque. Cortés utilisait la terreur mais de manière plus calculée."
            },
            {
                text: "DÉMONSTRATION DE FORCE puis alliance. Je fais une parade militaire : chevaux, canons, arquebuses. Puis je propose la paix et des échanges.",
                effects: { pouvoir: 15, humanisme: 10, loyaute: 5 },
                historical: true,
                feedback: "C'est ce qu'a fait Cortés. Après la bataille, il a négocié la paix. Les chefs mayas lui ont offert des cadeaux, dont Malinche, qui deviendra son interprète."
            },
            {
                text: "ALLIANCE IMMÉDIATE sans violence. Je propose commerce et protection contre leurs ennemis. La diplomatie plutôt que la force.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false,
                feedback: "Impossible après qu'ils t'aient attaqué. Il fallait d'abord prouver ta force."
            },
            {
                text: "PILLAGE ET FUITE. Je prends l'or, les vivres, et je pars vite avant que d'autres guerriers n'arrivent.",
                effects: { richesses: 10, pouvoir: -15, loyaute: -10 },
                historical: false,
                feedback: "Mauvaise stratégie. Sans alliance locale, tu n'auras ni guides, ni interprètes, ni informations."
            }
        ]
    }
];

// Continuer avec les autres étapes...
// (Pour l'instant je crée seulement les 4 premières pour tester)
