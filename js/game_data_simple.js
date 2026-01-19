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
    },

    // Étape 5 : L'alliance avec Tlaxcala
    {
        title: "L'alliance avec Tlaxcala",
        subtitle: "Tlaxcala, septembre 1519",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Après plusieurs mois de marche, tu arrives à Tlaxcala. Ton interprète Malinche t'explique : les Tlaxcaltèques sont les ennemis des Aztèques depuis très longtemps. Les Aztèques les empêchent de faire du commerce. Pas de sel, pas de coton. Les Tlaxcaltèques t'attaquent d'abord, mais tes armes sont trop puissantes. Finalement, leurs chefs te proposent une alliance : ensemble contre l'empereur Moctezuma. C'est une opportunité incroyable ! Mais à quelles conditions ?",
        essential: "Les divisions entre les peuples mexicains ont été très importantes pour la conquête. Le système aztèque était oppressif : ils obligeaient les peuples vaincus à payer des tributs. Beaucoup de peuples détestaient les Aztèques. Les Tlaxcaltèques vont fournir 100 000 guerriers à Cortés.",
        moreInfo: `
            <strong>Le système des tributs aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les Aztèques forçaient les peuples conquis à payer des tributs : or, nourriture, tissus</li>
                <li>Ils demandaient aussi des prisonniers pour les sacrifices humains</li>
                <li>Les "guerres fleuries" : batailles pour capturer des prisonniers</li>
                <li>Jusqu'à 20 000 sacrifices lors de grandes cérémonies</li>
            </ul>
            <strong>Tlaxcala : l'ennemi des Aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>République indépendante depuis 100 ans, entourée par l'empire aztèque</li>
                <li>Blocus total : pas de sel, coton, cacao</li>
                <li>Guerres constantes avec les Aztèques</li>
                <li>Population : environ 200 000 habitants</li>
            </ul>
            <strong>Pourquoi l'alliance est importante :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Sans Tlaxcala, Cortés n'aurait jamais pu conquérir les Aztèques</li>
                <li>100 000 guerriers tlaxcaltèques ont assiégé la capitale aztèque</li>
                <li>Ils connaissaient le terrain et les tactiques aztèques</li>
            </ul>
        `,
        choices: [
            {
                text: "ALLIANCE RESPECTUEUSE. Je traite les caciques tlaxcaltèques en égaux, promets liberté et partage équitable du butin aztèque.",
                effects: { pouvoir: 20, humanisme: 15, loyaute: 10 },
                historical: true,
                feedback: "Cortés a négocié une alliance respectueuse avec Tlaxcala. Il leur a promis la liberté et le partage du butin. Tlaxcala a gardé des privilèges même après la conquête."
            },
            {
                text: "ALLIANCE avec CONVERSION FORCÉE. J'accepte l'alliance mais j'exige qu'ils détruisent leurs temples et se convertissent immédiatement au catholicisme.",
                effects: { pouvoir: 10, humanisme: -15, loyaute: -10 },
                historical: false
            },
            {
                text: "REFUSER L'ALLIANCE. Je ne fais pas confiance à ces 'barbares'. Je peux conquérir seul avec mes 550 Espagnols.",
                effects: { pouvoir: -30, loyaute: -20 },
                historical: false,
                gameOver: true,
                gameOverText: "Sans les Tlaxcaltèques, tu es isolé. Les Aztèques t'encerclent avec 50 000 guerriers. Ta petite troupe est anéantie."
            },
            {
                text: "VASSALISER PAR LA FORCE. J'accepte l'alliance mais je place une garnison espagnole à Tlaxcala pour contrôler. Ils sont mes sujets, pas mes alliés.",
                effects: { pouvoir: 5, humanisme: -10, loyaute: -15 },
                historical: false
            }
        ]
    },

    // Étape 6 : Le massacre de Cholula
    {
        title: "Le massacre de Cholula",
        subtitle: "Cholula, octobre 1519",
        image: "images/combats_azteques_et_espgnols.png",
        narrative: "Tu arrives à Cholula, une grande ville religieuse alliée des Aztèques. L'accueil est froid. Tes alliés tlaxcaltèques sont nerveux : Cholula est leur vieille ennemie. Malinche te réveille en pleine nuit : une femme lui a dit qu'un piège se prépare. Demain, quand tu traverseras la ville, des milliers de guerriers aztèques cachés vont t'attaquer. Est-ce vrai ou est-ce une manipulation des Tlaxcaltèques qui veulent détruire leur ennemie ?",
        essential: "Le massacre de Cholula (octobre 1519) est controversé : piège réel ou prétexte ? Cortés a fait tuer entre 3 000 et 6 000 personnes désarmées. Stratégie de terreur pour effrayer les autres villes, ou crime de guerre ?",
        moreInfo: `
            <strong>Cholula : ville sainte :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Deuxième plus grande ville après Tenochtitlan (environ 100 000 habitants)</li>
                <li>Centre religieux important, grande pyramide</li>
                <li>Alliée des Aztèques, donc suspecte</li>
                <li>Ennemie traditionnelle de Tlaxcala</li>
            </ul>
            <strong>Le débat historique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Version espagnole : complot réel organisé par Moctezuma</li>
                <li>Version critique : prétexte inventé par les Tlaxcaltèques</li>
                <li>Aucune preuve archéologique de troupes aztèques</li>
            </ul>
            <strong>Le massacre du 18 octobre 1519 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés rassemble les nobles désarmés sur la place</li>
                <li>Accusation de trahison</li>
                <li>Massacre avec armes à feu et cavalerie</li>
                <li>3 000 à 6 000 morts</li>
            </ul>
            <strong>Conséquences :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Toutes les villes sur la route se soumettent sans combattre</li>
                <li>Message de terreur envoyé à Moctezuma</li>
            </ul>
        `,
        choices: [
            {
                text: "MASSACRE PRÉVENTIF. Je rassemble les nobles cholultèques et je les fais exécuter. Puis mes hommes et les Tlaxcaltèques pillent la ville. Mieux vaut prévenir que guérir.",
                effects: { pouvoir: 20, richesses: 15, humanisme: -30, loyaute: -5 },
                historical: true,
                feedback: "C'est ce qu'a fait Cortés le 18 octobre 1519. Le massacre a terrifié toute la région. Mais ce fut l'un des crimes les plus sanglants de la conquête."
            },
            {
                text: "ENQUÊTE PRUDENTE. J'envoie des éclaireurs vérifier s'il y a vraiment des troupes cachées. Si c'est vrai, j'agis. Sinon, je continue pacifiquement.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false
            },
            {
                text: "QUITTER LA VILLE IMMÉDIATEMENT. Trop dangereux. Je contourne Cholula et je continue vers Tenochtitlan.",
                effects: { pouvoir: -15, humanisme: 10, loyaute: -10 },
                historical: false
            },
            {
                text: "PUNITION CIBLÉE. J'arrête uniquement les chefs suspectés, les interroge, puis exécute seulement les coupables avérés.",
                effects: { pouvoir: 10, humanisme: 5, richesses: 5 },
                historical: false
            }
        ]
    },

    // Étape 7 : Entrée dans Tenochtitlan
    {
        title: "Entrée dans Tenochtitlan",
        subtitle: "Tenochtitlan, novembre 1519",
        image: "images/tenochtitlan.avif",
        narrative: "8 novembre 1519. Tu approches de Tenochtitlan. Le spectacle est incroyable : une immense ville construite sur un lac ! Des pyramides, des palais, des jardins flottants. 200 000 habitants, peut-être plus. C'est plus grand que n'importe quelle ville européenne ! L'empereur Moctezuma t'accueille en personne, vêtu de plumes magnifiques. Il t'installe dans un palais. Hospitalité parfaite, cadeaux somptueux. Mais tu es seulement 400 Espagnols au milieu de millions d'Aztèques. Une seule route pour fuir. Un piège ?",
        essential: "L'accueil de Moctezuma est une grande énigme. Pourquoi n'a-t-il pas écrasé Cortés quand il le pouvait ? Hésitation, calcul diplomatique, ou croyance aux prophéties ? Les historiens débattent encore.",
        moreInfo: `
            <strong>Tenochtitlan : capitale aztèque :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>200 000 à 400 000 habitants</li>
                <li>Plus grande que toute ville européenne (sauf Paris)</li>
                <li>Construite sur le lac, avec 3 chaussées</li>
                <li>Système hydraulique sophistiqué : aqueducs, canaux</li>
                <li>Jardins flottants (chinampas) très productifs</li>
            </ul>
            <strong>Le dilemme de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Option guerre : écraser les Espagnols (possible militairement)</li>
                <li>Risque : révolte de Tlaxcala et autres ennemis</li>
                <li>Option diplomatie : accueillir, observer, négocier</li>
                <li>Calcul : contrôler 500 hommes dans sa ville</li>
            </ul>
            <strong>La question des prophéties :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Légende : Moctezuma croyait que Cortés = dieu Quetzalcóatl</li>
                <li>Historiens modernes sceptiques : reconstruction après coup</li>
            </ul>
        `,
        choices: [
            {
                text: "CAPTURER MOCTEZUMA IMMÉDIATEMENT. Entrer dans son palais avec 30 hommes armés et le prendre en otage. Contrôler l'empereur = contrôler l'empire.",
                effects: { pouvoir: 25, humanisme: -20, loyaute: -10 },
                historical: false
            },
            {
                text: "ACCEPTER L'HOSPITALITÉ et observer. Étudier la ville, ses défenses, rencontrer les nobles, comprendre les divisions politiques. Puis agir.",
                effects: { pouvoir: 10, humanisme: 10, richesses: 5 },
                historical: true,
                feedback: "Cortés a d'abord observé pendant une semaine (8-14 novembre 1519). Il a visité la ville, rencontré les nobles, cherché les failles. Puis il a trouvé un prétexte pour capturer Moctezuma."
            },
            {
                text: "EXIGER un TRIBUT IMMÉDIAT. Je demande à Moctezuma de me livrer tout l'or de Tenochtitlan en échange de la paix.",
                effects: { richesses: 10, pouvoir: -15, humanisme: -10 },
                historical: false
            },
            {
                text: "PROPOSER une ALLIANCE ÉGALITAIRE. Cortés et Moctezuma co-gouvernent, commerce entre Espagne et Mexique, paix mutuelle.",
                effects: { humanisme: 20, pouvoir: -25 },
                historical: false,
                gameOver: true,
                gameOverText: "Moctezuma refuse cette proposition irréaliste. Tu n'as aucun pouvoir sans otage. Tes soldats t'abandonnent. Tu es capturé et sacrifié."
            }
        ]
    },

    // Étape 8 : La Noche Triste
    {
        title: "La Noche Triste",
        subtitle: "Tenochtitlan, juin 1520",
        image: "images/noche_triste.jpg",
        narrative: "Le désastre. Pendant ton absence (tu es parti combattre d'autres Espagnols), ton lieutenant Pedro de Alvarado a paniqué. Pendant une fête religieuse, il a ordonné un massacre : 600 nobles désarmés tués. Toute la ville explose de rage contre toi. Moctezuma est tué. Les Aztèques détruisent les ponts. Tu es piégé. Il faut fuir de nuit (30 juin 1520). Tes hommes refusent d'abandonner l'or. Ils le chargent sur eux. La 'Noche Triste' (Nuit Triste) commence : une nuit de cauchemar.",
        essential: "La 'Noche Triste' est la plus grande défaite de Cortés. La violence d'Alvarado a déclenché une révolte massive. Cortés perd 600 Espagnols et des milliers d'alliés. La fuite est chaotique et sanglante.",
        moreInfo: `
            <strong>Le massacre de mai 1520 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés absent (combat contre d'autres Espagnols)</li>
                <li>80 hommes restés sous le commandement d'Alvarado</li>
                <li>Fête religieuse : 600 nobles dansent désarmés</li>
                <li>Alvarado ordonne l'attaque, massacre systématique</li>
            </ul>
            <strong>La révolte :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Toute la ville se soulève</li>
                <li>Les ponts sont détruits</li>
                <li>Moctezuma tué (pierre ou assassinat ?)</li>
                <li>Nouvel empereur : Cuitláhuac organise la résistance</li>
            </ul>
            <strong>La fuite de nuit (30 juin 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Soldats chargés d'or (jusqu'à 40 kg chacun)</li>
                <li>Attaques de partout (terre et canots)</li>
                <li>Les hommes alourdis se noient dans le lac</li>
                <li>Massacre pendant 8 heures</li>
            </ul>
            <strong>Bilan :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>600 Espagnols morts sur 1 300</li>
                <li>4 000 à 8 000 alliés tués</li>
                <li>Tout l'or perdu au fond du lac</li>
                <li>Tous les canons perdus</li>
            </ul>
        `,
        choices: [
            {
                text: "FUITE PRÉCIPITÉE avec l'or. Chaque homme emporte le maximum d'or possible. Tant pis si ça nous ralentit, on ne renonce pas au butin !",
                effects: { richesses: 10, pouvoir: -20, loyaute: -20, humanisme: -10 },
                historical: true,
                feedback: "C'est ce qui s'est passé. Les hommes alourdis par l'or se sont noyés. 600 Espagnols et 4 000 alliés sont morts. Ceux qui ont survécu sont ceux qui ont abandonné l'or."
            },
            {
                text: "FUITE ORGANISÉE, abandon de l'or. Je fais jeter tout l'or avant de partir. Priorité à la survie, on reviendra le chercher plus tard.",
                effects: { loyaute: 20, pouvoir: 10, richesses: -20 },
                historical: false
            },
            {
                text: "TENTATIVE DE NÉGOCIATION. J'envoie des émissaires proposer la paix et notre départ pacifique en échange de laisser l'or.",
                effects: { humanisme: 10, pouvoir: -15 },
                historical: false
            },
            {
                text: "COMBAT JUSQU'À LA MORT. Nous ne fuyons pas. Nous nous défendons dans le palais jusqu'à la dernière cartouche.",
                effects: {},
                historical: false,
                gameOver: true,
                gameOverText: "Héroïque mais suicidaire. Assiégés, affamés, sans renforts, vous résistez 10 jours. Puis les Aztèques incendient le palais. Vous êtes tous capturés et sacrifiés."
            }
        ]
    },

    // Étape 9 : Le siège de Tenochtitlan
    {
        title: "Le siège de Tenochtitlan",
        subtitle: "Tenochtitlan, mai-août 1521",
        image: "images/sige_de_tenochtitlan.png",
        narrative: "Un an plus tard. Tu es revenu. Avec des renforts de Cuba et surtout 200 000 guerriers alliés (Tlaxcala et autres ennemis des Aztèques). Tu as construit 13 petits bateaux pour contrôler le lac. Mais surtout, un allié invisible t'aide : la variole (maladie). L'épidémie a tué des milliers d'Aztèques. Le nouvel empereur Cuauhtémoc, jeune et déterminé, résiste. Commence le siège le plus brutal : 75 jours d'enfer (mai-août 1521). Famine, combats de rue, destruction totale.",
        essential: "La variole a été l'arme la plus meurtrière. Importée involontairement par les Européens, elle a tué 90% des Aztèques malades (aucune immunité). Le siège a duré 75 jours : famine terrible, combats acharnés, destruction quasi-totale de la ville.",
        moreInfo: `
            <strong>La variole : catastrophe biologique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Arrivée en 1520 avec un soldat</li>
                <li>Les Amérindiens n'avaient aucune immunité</li>
                <li>Taux de mortalité : 80-90% des malades</li>
                <li>En 50 ans, population du Mexique : 25M → 3M</li>
            </ul>
            <strong>Préparatifs du siège :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>13 bateaux construits pour contrôler le lac</li>
                <li>200 000 guerriers alliés indigènes</li>
                <li>900 Espagnols (renforts de Cuba)</li>
            </ul>
            <strong>Stratégie :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Blocus : pas de ravitaillement</li>
                <li>Coupe de l'eau potable</li>
                <li>Destruction systématique de chaque bâtiment</li>
                <li>Famine organisée</li>
            </ul>
            <strong>Résistance de Cuauhtémoc :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>25 ans, dernier empereur</li>
                <li>Refuse toute reddition</li>
                <li>Combat rue par rue</li>
                <li>"Mieux vaut mourir que vivre en esclavage"</li>
            </ul>
            <strong>Horreurs du siège :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Famine : les gens mangent herbes, insectes</li>
                <li>Cadavres partout, impossible d'enterrer</li>
                <li>Eau salée du lac (eau potable coupée)</li>
                <li>90% de la ville détruite</li>
            </ul>
        `,
        choices: [
            {
                text: "SIÈGE TOTAL avec famine. Je bloque tout : eau, nourriture. La ville se rendra quand la famine sera insupportable.",
                effects: { pouvoir: 25, humanisme: -30, richesses: 10 },
                historical: true,
                feedback: "C'est la stratégie de Cortés. Le siège a duré 75 jours (mai-août 1521). La famine et la soif ont forcé les Aztèques à se rendre. Environ 100 000 morts."
            },
            {
                text: "PROPOSER une REDDITION HONORABLE. J'envoie des émissaires à Cuauhtémoc : s'il se rend, je respecte sa vie et celle de son peuple.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false
            },
            {
                text: "ASSAUT IMMÉDIAT massif. J'attaque avec toute mon armée d'un coup. Finissons-en rapidement, même au prix de lourdes pertes.",
                effects: { pouvoir: -10, loyaute: -20, humanisme: -10 },
                historical: false
            },
            {
                text: "COUPER eau et vivres, puis attendre. Je ne détruis pas la ville, je veux la préserver intacte pour la contrôler ensuite.",
                effects: { pouvoir: 15, humanisme: -15, richesses: -10 },
                historical: false
            }
        ]
    },

    // Étape 10 : Capture de Cuauhtémoc
    {
        title: "Capture de Cuauhtémoc",
        subtitle: "Tenochtitlan, août 1521",
        image: "images/guerrier_jaguar.png",
        narrative: "13 août 1521. Le siège se termine. Cuauhtémoc essaie de fuir en bateau avec les derniers nobles. Tes bateaux le capturent. Le dernier empereur aztèque te fait face : jeune (25 ans), fier, épuisé. Il te tend son poignard : 'Tue-moi maintenant, j'ai fait tout ce qu'un chef doit faire.' Mais tes hommes crient qu'il connaît l'emplacement du trésor royal. Des tonnes d'or cachées quelque part. Cuauhtémoc refuse de parler. L'empire aztèque est tombé. Que fais-tu du dernier empereur ?",
        essential: "La chute de Tenochtitlan marque la fin de l'empire aztèque (13 août 1521). Cuauhtémoc a été capturé vivant. Cortés l'a d'abord bien traité, puis l'a fait torturer pour l'or, sans résultat. Il l'a gardé prisonnier 4 ans avant de l'exécuter.",
        moreInfo: `
            <strong>La capture (13 août 1521) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Dernier jour du siège</li>
                <li>Cuauhtémoc fuit en bateau</li>
                <li>Capturé, amené devant Cortés</li>
                <li>Demande à être tué honorablement</li>
            </ul>
            <strong>La torture pour l'or :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les Espagnols cherchent le trésor royal</li>
                <li>Cuauhtémoc torturé (pieds brûlés)</li>
                <li>Il ne révèle rien (courage ou pas de trésor ?)</li>
                <li>Même des Espagnols protestent contre la torture</li>
            </ul>
            <strong>Le destin de Cuauhtémoc :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Gardé prisonnier comme otage (1521-1525)</li>
                <li>Utilisé par Cortés pour contrôler le peuple</li>
                <li>En 1525, emmené en expédition au Honduras</li>
                <li>Accusé de complot, pendu le 28 février 1525</li>
                <li>Devenu héros national mexicain</li>
            </ul>
            <strong>Bilan de la conquête :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Durée totale : 2 ans et 5 mois</li>
                <li>Tenochtitlan détruite à 90%</li>
                <li>L'empire devient la Nouvelle-Espagne</li>
                <li>Cortés devient gouverneur et immensément riche</li>
                <li>Début de 300 ans de domination coloniale</li>
            </ul>
        `,
        choices: [
            {
                text: "EXÉCUTER immédiatement Cuauhtémoc. Il est trop dangereux de garder un symbole de résistance vivant. Qu'il meure en guerrier.",
                effects: { pouvoir: 10, humanisme: -15, richesses: -10 },
                historical: false
            },
            {
                text: "TORTURER Cuauhtémoc pour trouver le trésor royal. L'or est la raison de cette expédition. Il doit parler.",
                effects: { richesses: 5, humanisme: -25, pouvoir: -5 },
                historical: true,
                feedback: "Cortés a fait torturer Cuauhtémoc (pieds brûlés). Cuauhtémoc n'a rien révélé, soit par courage, soit parce qu'il n'y avait rien. Cette torture a choqué même des conquistadors."
            },
            {
                text: "TRAITER Cuauhtémoc en prisonnier honorable. Je le garde prisonnier mais dans de bonnes conditions. Il pourrait être utile politiquement.",
                effects: { humanisme: 20, pouvoir: 15, richesses: -5 },
                historical: false
            },
            {
                text: "INSTALLER Cuauhtémoc comme gouverneur fantoche. Je contrôle l'empire à travers lui, les Aztèques obéissent à leur empereur.",
                effects: { pouvoir: 20, humanisme: 5, richesses: 10 },
                historical: false
            }
        ]
    }
];

// ============================================
// PARCOURS MOCTEZUMA - VERSION SIMPLIFIÉE
// ============================================

const moctezumaStepsDataSimple = [
    // Étape 0 : Consolidation du pouvoir
    {
        title: "Consolidation du pouvoir",
        subtitle: "Tenochtitlan, 1502-1517",
        image: "images/tenochtitlan.avif",
        narrative: "Tu es Moctezuma, empereur de l'empire aztèque. En 1502, à 34 ans, tu as succédé à ton oncle. Ton empire est immense : 5 à 6 millions de personnes, des centaines de villes. Tenochtitlan, ta capitale, compte 200 000 habitants. Mais l'empire a des problèmes. Les peuples vaincus détestent payer les tributs (impôts forcés). Tlaxcala résiste depuis 100 ans. Comment renforcer ton pouvoir ?",
        essential: "L'empire aztèque en 1502 était très grand mais fragile. Le système des tributs créait beaucoup de colère. Les villes indépendantes comme Tlaxcala étaient des menaces. Le pouvoir de l'empereur dépendait de sa capacité à gagner des guerres.",
        moreInfo: `
            <strong>L'empire aztèque en 1502 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Territoire : environ 200 000 km²</li>
                <li>Population : 5 à 6 millions de personnes</li>
                <li>Tenochtitlan : 200 000 à 400 000 habitants, plus grande ville d'Amérique</li>
                <li>Alliance de 3 villes : Tenochtitlan, Texcoco, Tlacopan</li>
            </ul>
            <strong>Le système des tributs :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les villes conquises devaient payer : or, cacao, plumes, coton, nourriture</li>
                <li>Elles devaient aussi donner des prisonniers pour les sacrifices</li>
                <li>Les villes gardaient leurs chefs locaux</li>
                <li>Beaucoup de révoltes quand les tributs étaient trop lourds</li>
            </ul>
            <strong>Les guerres fleuries :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Batailles rituelles avec Tlaxcala, Cholula</li>
                <li>But : capturer des prisonniers pour les sacrifices</li>
                <li>Permettaient d'entraîner les guerriers</li>
                <li>Mais affaiblissaient l'empire</li>
            </ul>
        `,
        choices: [
            {
                text: "RÉFORMER le système tributaire : réduire les tributs des cités fidèles, augmenter la pression sur les rebelles. Politique de la carotte et du bâton.",
                effects: { pouvoir: 10, humanisme: 10, loyaute: 5, richesses: -5 },
                historical: false
            },
            {
                text: "RENFORCER le contrôle militaire : placer des garnisons aztèques dans les cités tributaires, réprimer durement toute rébellion.",
                effects: { pouvoir: 15, loyaute: -10, humanisme: -10 },
                historical: false
            },
            {
                text: "MAINTENIR le statu quo : le système fonctionne depuis un siècle. Ne pas changer ce qui marche. Concentrer les efforts sur le faste de Tenochtitlan.",
                effects: { pouvoir: 5, richesses: 10, loyaute: -5 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Il a gardé le système tel quel et investi dans la beauté de Tenochtitlan. Cette rigidité contribuera à sa perte."
            },
            {
                text: "NÉGOCIER la paix avec Tlaxcala : mettre fin aux guerres fleuries, intégrer Tlaxcala comme allié égal dans l'empire.",
                effects: { humanisme: 20, pouvoir: -15, loyaute: -10 },
                historical: false
            }
        ]
    },

    // Étape 1 : Les présages inquiétants
    {
        title: "Les présages inquiétants",
        subtitle: "Tenochtitlan, 1517-1518",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Depuis deux ans, des choses étranges se passent. En 1515, une comète est apparue dans le ciel. En 1516, le temple du dieu de la guerre a mystérieusement brûlé. Des pêcheurs ont capturé un oiseau bizarre avec un miroir sur la tête. En regardant dedans, tu as vu des guerriers inconnus. Tes prêtres sont très inquiets. Certains parlent du retour de Quetzalcóatl, le dieu serpent à plumes qui avait promis de revenir. Que faire face à ces signes étranges ?",
        essential: "Les chroniques aztèques parlent de huit présages qui auraient annoncé la chute de l'empire. Les historiens modernes pensent que ces 'présages' ont probablement été inventés après la conquête pour expliquer la catastrophe.",
        moreInfo: `
            <strong>Les huit présages rapportés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>1. Une comète apparaît (vers 1515)</li>
                <li>2. Le temple brûle mystérieusement (1516)</li>
                <li>3. La foudre frappe un temple sans tonnerre</li>
                <li>4. Une comète à trois têtes</li>
                <li>5. Le lac bout et détruit des maisons</li>
                <li>6. On entend des pleurs de femme la nuit</li>
                <li>7. Oiseau étrange avec miroir montrant des guerriers</li>
                <li>8. Hommes difformes qui apparaissent puis disparaissent</li>
            </ul>
            <strong>Le débat historique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Version traditionnelle : les présages ont vraiment eu lieu</li>
                <li>Historiens modernes : reconstruction après coup</li>
                <li>Les sources sont écrites APRÈS la conquête (années 1540-1570)</li>
                <li>Phénomène classique : attribuer des signes divins aux catastrophes</li>
            </ul>
            <strong>Le mythe de Quetzalcóatl :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Dieu serpent à plumes, associé au vent et à la sagesse</li>
                <li>Légende : il aurait quitté l'empire vers l'est en promettant de revenir</li>
                <li>Année 1519 = année du roseau, associée à ce dieu</li>
                <li>Cortés était-il pris pour ce dieu ? Débat entre historiens</li>
            </ul>
        `,
        choices: [
            {
                text: "ORGANISER des sacrifices massifs pour apaiser les dieux. Si Quetzalcóatl revient, il doit trouver un empire pieux et prospère.",
                effects: { pouvoir: 5, humanisme: -15, loyaute: 5 },
                historical: false
            },
            {
                text: "CONSULTER les sages et devins de l'empire. Envoyer des émissaires dans toutes les provinces pour interpréter ces signes.",
                effects: { pouvoir: 5, humanisme: 5 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Il a consulté prêtres et devins, cherché des explications. Certains présages l'ont inquiété, mais il n'était pas paralysé."
            },
            {
                text: "IGNORER ces superstitions. Je suis empereur d'un empire puissant, pas un devin superstitieux. Concentrons-nous sur les problèmes réels.",
                effects: { pouvoir: 10, humanisme: 5, loyaute: -5 },
                historical: false
            },
            {
                text: "PRÉPARER l'empire à une grande épreuve. Renforcer les défenses, stocker des vivres, rappeler les guerriers. Si un danger vient, nous serons prêts.",
                effects: { pouvoir: 15, loyaute: 10, richesses: -10 },
                historical: false
            }
        ]
    },

    // Étape 2 : Premières nouvelles des étrangers
    {
        title: "Premières nouvelles des étrangers",
        subtitle: "Tenochtitlan, printemps 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "Des messagers arrivent de la côte, terrifiés. Ils parlent de 'montagnes flottantes' sur l'océan. Des guerriers à la peau pâle, vêtus de métal brillant. Ils ont des 'cerfs géants' qui les portent. Leurs armes crachent le feu et le tonnerre. Les messagers montrent des dessins : des hommes étranges avec des barbes. Ce ne sont pas des dieux - ils mangent, boivent, saignent. Mais d'où viennent-ils ? Que veulent-ils ? Tes conseillers sont divisés. Que décides-tu ?",
        essential: "En février-mars 1519, Moctezuma a reçu les premiers rapports sur Cortés. Ses espions ont décrit les bateaux, les armes, les chevaux. Moctezuma a envoyé des émissaires avec des cadeaux - tentative diplomatique qui sera vue par Cortés comme un signe de faiblesse.",
        moreInfo: `
            <strong>Les expéditions avant Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>1517 : Expédition de Córdoba au Yucatán</li>
                <li>1518 : Expédition de Grijalva, premiers contacts</li>
                <li>Les Aztèques savaient depuis 2 ans que des étrangers exploraient les côtes</li>
            </ul>
            <strong>Les rapports des espions :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Description : hommes blancs barbus, vêtements de métal, armes étranges</li>
                <li>Les chevaux terrifiaient : jamais vus en Amérique</li>
                <li>Canons et arquebuses : "bâtons qui crachent le feu"</li>
                <li>Les chiens de guerre étaient aussi inconnus</li>
            </ul>
            <strong>Les interprétations :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Hypothèse divine : Quetzalcóatl revient (mais pas unanime)</li>
                <li>Hypothèse humaine : explorateurs d'un royaume lointain</li>
                <li>Hypothèse militaire : envahisseurs (peu nombreux donc pas menaçants ?)</li>
            </ul>
            <strong>Les premiers cadeaux de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Mars 1519 : émissaires avec masques, bijoux en or, plumes</li>
                <li>Message : "Bienvenue, mais ne venez pas à Tenochtitlan"</li>
                <li>Erreur : montrer l'or attise la cupidité de Cortés</li>
                <li>Les cadeaux sont vus comme des tributs = soumission</li>
            </ul>
        `,
        choices: [
            {
                text: "ENVOYER des émissaires avec des cadeaux somptueux (or, plumes de quetzal, masques sacrés). Montrons notre richesse et notre volonté de paix.",
                effects: { humanisme: 15, pouvoir: -10, richesses: -10 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma en mars 1519. Grosse erreur : les cadeaux en or ont donné encore plus envie à Cortés de venir. De plus, les Espagnols ont vu ça comme une soumission."
            },
            {
                text: "ATTAQUER IMMÉDIATEMENT sur la côte. Envoyer 20 000 guerriers écraser ces intrus avant qu'ils ne pénètrent dans l'empire.",
                effects: { pouvoir: 20, humanisme: -10, loyaute: 10 },
                historical: false
            },
            {
                text: "ESPIONNER ET OBSERVER. Envoyer des espions déguisés en marchands pour comprendre qui ils sont vraiment, sans les provoquer.",
                effects: { pouvoir: 10, humanisme: 5 },
                historical: false
            },
            {
                text: "LES IGNORER. Ce sont des explorateurs égarés, probablement peu nombreux. Ils repartiront d'eux-mêmes. Ne pas leur donner d'importance.",
                effects: { pouvoir: -15, humanisme: 5 },
                historical: false
            }
        ]
    },

    // Étape 3 : Le dilemme - guerre ou diplomatie
    {
        title: "Le dilemme : guerre ou diplomatie ?",
        subtitle: "Tenochtitlan, mars-septembre 1519",
        image: "images/Route_cortès_vers_Tenochtitlan.png",
        narrative: "Les nouvelles s'enchaînent. Les étrangers ont débarqué à Tabasco, vaincu les Mayas. Ils marchent vers l'intérieur. Pire : Tlaxcala, ton ennemi de toujours, s'est allié avec eux ! 100 000 guerriers tlaxcaltèques accompagnent maintenant les Espagnols. Le massacre de Cholula te glace : 3 000 morts en quelques heures. Ils approchent de ta capitale. Tes généraux veulent la guerre : 'Nous avons 200 000 guerriers, ils sont 500 !' Mais tes prêtres hésitent. Tu dois décider maintenant.",
        essential: "Entre mars et novembre 1519, Moctezuma a hésité entre guerre et diplomatie. Son erreur fut l'indécision : ni guerre totale (pourtant possible), ni diplomatie ferme. Cette hésitation a permis à Cortés d'atteindre Tenochtitlan.",
        moreInfo: `
            <strong>La marche de Cortés (mars-novembre 1519) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Mars : Débarquement et bataille de Tabasco</li>
                <li>Avril-août : Alliance avec Tlaxcala</li>
                <li>Octobre : Massacre de Cholula (3 000 morts)</li>
                <li>Novembre : Arrivée à Tenochtitlan</li>
            </ul>
            <strong>Les options militaires :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Guerre en rase campagne : 50 000+ guerriers contre Cortés</li>
                <li>Avantages : supériorité numérique écrasante</li>
                <li>Risques : armes espagnoles + chevaux + Tlaxcaltèques</li>
                <li>Problème : si Moctezuma perd, son autorité s'effondre</li>
            </ul>
            <strong>Les options diplomatiques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Accueillir et observer : garder Cortés proche pour le contrôler</li>
                <li>Avantages : éviter la guerre, comprendre leurs intentions</li>
                <li>Risques : les faire entrer = piège potentiel</li>
                <li>Calcul : contrôler 500 hommes dans sa ville</li>
            </ul>
            <strong>Le facteur Tlaxcala :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>L'alliance change tout : ce n'est plus 500 vs 200 000</li>
                <li>C'est 500 Espagnols + 100 000 Tlaxcaltèques</li>
                <li>Guerre = risque de guerre civile</li>
                <li>D'autres villes pourraient se révolter</li>
            </ul>
        `,
        choices: [
            {
                text: "GUERRE TOTALE. Mobiliser toutes les forces de l'empire. 50 000 guerriers attaquent Cortés avant qu'il n'atteigne Tenochtitlan. Écrasons-les !",
                effects: { pouvoir: 25, loyaute: 20, humanisme: -15 },
                historical: false
            },
            {
                text: "DIPLOMATIE ACTIVE. Les accueillir à Tenochtitlan, les impressionner par notre grandeur, négocier un départ pacifique contre tribut.",
                effects: { humanisme: 15, pouvoir: -10, richesses: -10 },
                historical: true,
                feedback: "C'est la stratégie de Moctezuma. Grosse erreur : accueillir Cortés lui a permis de prendre le contrôle. Moctezuma pensait pouvoir contrôler 500 hommes - il s'est trompé."
            },
            {
                text: "PIÈGE DIPLOMATIQUE. Les inviter à Tenochtitlan, puis les capturer ou les éliminer discrètement dans la ville. Stratégie du cheval de Troie inversé.",
                effects: { pouvoir: 20, humanisme: -20 },
                historical: false
            },
            {
                text: "BLOCUS ET NÉGOCIATION. Bloquer les chaussées, empêcher l'accès à Tenochtitlan. Négocier un accord depuis une position de force, sans les laisser entrer.",
                effects: { pouvoir: 15, humanisme: 10, loyaute: 10 },
                historical: false
            }
        ]
    },

    // Étape 4 : L'accueil à Tenochtitlan
    {
        title: "L'accueil à Tenochtitlan",
        subtitle: "Tenochtitlan, 8 novembre 1519",
        image: "images/malinche.jpg",
        narrative: "8 novembre 1519. Tu avances sur la chaussée, porté sur ton palanquin d'or, vêtu de tes plus belles plumes. Face à toi, Cortés et ses hommes. Leurs armures brillent. Derrière eux, des milliers de guerriers tlaxcaltèques - tes ennemis dans ta propre capitale ! Tu descends de ton palanquin. Cortés avance. Par interprète, il parle de son roi lointain, de paix. Ses yeux scrutent ta ville. Tu décides de l'installer au palais. Mais comment le recevoir ?",
        essential: "La rencontre du 8 novembre 1519 est un grand mystère. Moctezuma a-t-il vraiment pris Cortés pour un dieu ? S'est-il soumis volontairement ? Ou était-ce une stratégie mal comprise par les Espagnols ?",
        moreInfo: `
            <strong>La rencontre du 8 novembre 1519 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Lieu : chaussée d'Iztapalapa, entrée sud de Tenochtitlan</li>
                <li>Moctezuma descend de son palanquin (geste inhabituel)</li>
                <li>Échange de cadeaux : colliers, parures de plumes</li>
                <li>Installation au palais d'Axayácatl</li>
            </ul>
            <strong>Les interprétations :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Version espagnole : Moctezuma se soumet</li>
                <li>Version critique : protocole mal compris</li>
                <li>Problème de traduction : tout passe par Malinche</li>
                <li>Peut-être politesses traduites en soumission</li>
            </ul>
            <strong>Le calcul de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Garder les Espagnols proches = les surveiller</li>
                <li>Dans le palais = otages potentiels</li>
                <li>Démonstration de richesse pour impressionner</li>
                <li>Mais : sous-estimation de l'audace de Cortés</li>
            </ul>
        `,
        choices: [
            {
                text: "ACCUEIL SOMPTUEUX mais distant. Je reste empereur, ils restent visiteurs. Hospitalité parfaite mais protocole strict. Aucun signe de soumission.",
                effects: { pouvoir: 15, humanisme: 10, richesses: -5 },
                historical: false
            },
            {
                text: "ACCUEIL HUMBLE et religieux. Si ce sont des envoyés divins, je dois montrer respect et déférence. Les traiter comme des êtres supérieurs.",
                effects: { humanisme: 10, pouvoir: -20, loyaute: -15 },
                historical: false
            },
            {
                text: "ACCUEIL DIPLOMATIQUE ambigu. Politesse, cadeaux, mais aussi démonstration de force militaire. Leur montrer que nous pouvons les écraser si nécessaire.",
                effects: { pouvoir: 10, humanisme: 5, loyaute: 10 },
                historical: true,
                feedback: "Proche de ce qu'a fait Moctezuma : accueil fastueux mais ambiguïté permanente. Malheureusement, cette ambiguïté a été vue par Cortés comme hésitation et faiblesse."
            },
            {
                text: "PIÈGE IMMÉDIAT. Dès qu'ils entrent dans le palais, mes guerriers les capturent. Finissons-en maintenant.",
                effects: { pouvoir: 20, humanisme: -20, loyaute: 10 },
                historical: false
            }
        ]
    },

    // Étape 5 : La captivité
    {
        title: "La captivité",
        subtitle: "Tenochtitlan, novembre 1519 - mai 1520",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Une semaine après leur arrivée, Cortés entre dans tes appartements avec 30 soldats armés. Sans prévenir. Il t'accuse : tes gouverneurs auraient attaqué des Espagnols sur la côte. Il exige que tu viennes habiter au palais avec lui. C'est une prise d'otage. Si tu refuses, il menace. Si tu acceptes, tu perds ton autorité. Tes gardes attendent un signe. Un mot et ils attaquent. Mais Cortés a déjà la main sur son épée. Le palais pourrait devenir un champ de bataille. Que fais-tu ?",
        essential: "Le 14 novembre 1519, Cortés a pris Moctezuma en otage dans son propre palais - l'un des coups les plus audacieux de l'Histoire. Moctezuma a accepté de venir 'volontairement', peut-être pour éviter un massacre, peut-être paralysé par l'indécision.",
        moreInfo: `
            <strong>La prise d'otage (14 novembre 1519) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Six jours après l'arrivée de Cortés</li>
                <li>Prétexte : attaque d'Espagnols par des gouverneurs aztèques</li>
                <li>Cortés entre avec 30 hommes armés</li>
                <li>Exige que Moctezuma vienne vivre au palais espagnol</li>
            </ul>
            <strong>Pourquoi Moctezuma a-t-il accepté ?</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Peur d'un massacre dans le palais</li>
                <li>Paralysé par l'indécision</li>
                <li>Calcul : gagner du temps, préparer une riposte</li>
                <li>Croyait pouvoir contrôler la situation</li>
            </ul>
            <strong>La vie en captivité :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Formellement empereur, mais sous surveillance</li>
                <li>Continue à gouverner... sous la dictée de Cortés</li>
                <li>Cortés exige un tribut en or</li>
                <li>Humiliation : enchaîné quand Cortés craint une révolte</li>
            </ul>
            <strong>La réaction du peuple :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Stupéfaction : l'empereur est prisonnier</li>
                <li>Perte de respect : Moctezuma semble faible</li>
                <li>Montée de l'opposition</li>
                <li>Cuitláhuac devient leader de la résistance</li>
            </ul>
        `,
        choices: [
            {
                text: "ACCEPTER d'aller au palais d'Axayácatl 'volontairement'. Éviter le massacre, gagner du temps pour préparer une riposte.",
                effects: { pouvoir: -25, humanisme: 10, loyaute: -20 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Grosse erreur : il a perdu toute crédibilité. Un empereur qui se laisse capturer sans combattre n'est plus vraiment un empereur."
            },
            {
                text: "REFUSER et ordonner l'ATTAQUE. Un mot et mes gardes massacrent ces 30 Espagnols insolents. Je mourrai peut-être, mais en empereur.",
                effects: { pouvoir: 20, humanisme: -15, loyaute: 15 },
                historical: false
            },
            {
                text: "NÉGOCIER un compromis. J'accepte d'habiter près du palais espagnol, mais dans mes propres appartements. Je reste visible pour mon peuple.",
                effects: { pouvoir: -10, humanisme: 10, loyaute: -10 },
                historical: false
            },
            {
                text: "FEINDRE d'accepter, puis s'échapper cette nuit. Rejoindre mes généraux, organiser l'attaque de la ville contre les Espagnols.",
                effects: { pouvoir: 15, humanisme: -10, loyaute: 10 },
                historical: false
            }
        ]
    },

    // Étape 6 : Le massacre du Templo Mayor
    {
        title: "Le massacre du Templo Mayor",
        subtitle: "Tenochtitlan, mai 1520",
        image: "images/guerrier_jaguar.png",
        narrative: "Cortés est parti combattre d'autres Espagnols. Il a laissé 80 hommes sous le commandement de Pedro de Alvarado. Tu es toujours prisonnier. C'est la fête de Toxcatl, la plus importante de l'année. 600 nobles dansent dans le temple, désarmés, vêtus de leurs plus belles parures. Soudain, les portes se ferment. Les Espagnols attaquent. Arquebuses, épées. Tes nobles tombent, massacrés. 600 morts en quelques minutes. Toute la ville explose de rage. Des milliers d'Aztèques assiègent le palais. Ils te demandent d'ordonner l'attaque. Que fais-tu ?",
        essential: "Le massacre du Templo Mayor (mai 1520) fut le point de non-retour. L'attaque contre des nobles désarmés pendant une fête a déclenché une révolte massive. Moctezuma, prisonnier, a perdu toute légitimité.",
        moreInfo: `
            <strong>Le massacre (mai 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés absent (combat d'autres Espagnols)</li>
                <li>80 Espagnols sous Alvarado</li>
                <li>Fête de Toxcatl : 600 nobles dansent désarmés</li>
                <li>Alvarado ordonne l'attaque, massacre systématique</li>
            </ul>
            <strong>Les raisons (débattues) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Version d'Alvarado : prévenir un complot</li>
                <li>Version aztèque : cupidité (bijoux en or) + panique</li>
                <li>Historiens : probablement panique d'Alvarado</li>
            </ul>
            <strong>La révolte immédiate :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Toute la ville se soulève</li>
                <li>Les Espagnols assiégés dans le palais</li>
                <li>Moctezuma vu comme traître</li>
                <li>Cuitláhuac organise l'attaque</li>
            </ul>
        `,
        choices: [
            {
                text: "APPELER mon peuple au CALME. Je suis encore leur empereur. Qu'ils arrêtent l'attaque, je négocie avec les Espagnols.",
                effects: { pouvoir: -20, humanisme: 10, loyaute: -30 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Catastrophe : son peuple l'a hué, traité de traître. Selon certaines sources, il aurait été lapidé par ses propres sujets."
            },
            {
                text: "APPELER à l'ATTAQUE TOTALE. Que mon peuple détruise le palais, qu'ils tuent tous les Espagnols, même si je meurs avec eux. Vengeance !",
                effects: { pouvoir: 20, humanisme: -10, loyaute: 25 },
                historical: false
            },
            {
                text: "TENTER de m'ÉCHAPPER dans le chaos. Rejoindre mon frère Cuitláhuac, reprendre le commandement militaire de la résistance.",
                effects: { pouvoir: 15, humanisme: -5, loyaute: 20 },
                historical: false
            },
            {
                text: "RESTER SILENCIEUX. Je ne suis plus empereur, je suis un otage. Je refuse de jouer leur jeu. Mon silence est ma dernière dignité.",
                effects: { pouvoir: -15, humanisme: 5, loyaute: -20 },
                historical: false
            }
        ]
    },

    // Étape 7 : La mort de Moctezuma
    {
        title: "La mort de Moctezuma",
        subtitle: "Tenochtitlan, 29 juin 1520",
        image: "images/noche_triste.jpg",
        narrative: "Cortés est revenu avec des renforts. La ville est assiégée depuis un mois. Ton peuple a coupé l'eau et la nourriture. Les Espagnols sont piégés. Cortés te demande une dernière fois de parler à ton peuple, de leur ordonner de laisser partir les Espagnols. Tu montes sur le toit du palais. En bas, des milliers d'Aztèques. Certains pleurent. D'autres crient : 'Traître !' Ton frère Cuitláhuac est parmi eux. Tu ouvres la bouche. Soudain, des pierres volent. Une te frappe à la tête. Tu tombes. Trois jours plus tard, le 29 juin 1520, tu meurs.",
        essential: "La mort de Moctezuma le 29 juin 1520 reste mystérieuse. Version espagnole : tué par son propre peuple. Version aztèque : assassiné par les Espagnols. Sa mort symbolise l'effondrement de l'empire aztèque.",
        moreInfo: `
            <strong>Les circonstances (29 juin 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés revenu avec 1 300 hommes</li>
                <li>Ville révoltée, Espagnols assiégés depuis un mois</li>
                <li>Cortés demande à Moctezuma de calmer le peuple</li>
                <li>Moctezuma monte sur le toit, parle à la foule</li>
            </ul>
            <strong>Version espagnole :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Des pierres lancées par la foule</li>
                <li>Une pierre frappe Moctezuma à la tête</li>
                <li>Il refuse les soins, arrache ses bandages</li>
                <li>Meurt trois jours plus tard, déprimé</li>
            </ul>
            <strong>Version aztèque :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les Espagnols ont tué Moctezuma</li>
                <li>Poignardé ou étranglé</li>
                <li>L'histoire des pierres = invention pour masquer le meurtre</li>
                <li>Corps jeté dans un canal</li>
            </ul>
            <strong>L'héritage de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Dernier empereur d'un empire intact</li>
                <li>Vu comme un échec : hésitation fatale</li>
                <li>Mais situation impossible : aucun dirigeant n'avait affronté ça</li>
                <li>Ses successeurs résisteront héroïquement mais en vain</li>
            </ul>
        `,
        choices: [
            {
                text: "PARLER à mon peuple une dernière fois. Leur demander de laisser partir les Espagnols. Éviter un bain de sang, même si je suis discrédité.",
                effects: { humanisme: 15, pouvoir: -25, loyaute: -30 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Selon les sources espagnoles, il a été lapidé par son propre peuple. Mort tragique d'un empereur qui a cherché jusqu'au bout à éviter la guerre totale."
            },
            {
                text: "REFUSER de parler. Je ne serai pas l'instrument de Cortés. Qu'ils me tuent s'ils veulent, mais je ne trahirai plus mon peuple.",
                effects: { pouvoir: -15, humanisme: 10, loyaute: -10 },
                historical: false
            },
            {
                text: "APPELER mon peuple à ATTAQUER. Que les dieux me pardonnent, mais ces barbares doivent mourir. Détruisez le palais, tuez-les tous, même si je meurs.",
                effects: { pouvoir: 20, humanisme: -15, loyaute: 25 },
                historical: false
            },
            {
                text: "ACCEPTER ma mort avec dignité. Je sais que je vais mourir. Mon règne est terminé. Que les dieux accueillent mon esprit.",
                effects: { pouvoir: -20, humanisme: 20, loyaute: -15 },
                historical: false
            }
        ]
    }
];
