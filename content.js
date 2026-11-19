// ================================================================
//  CONTENU DE GO BIA GO
//  - Chaque module contient des leçons (lessons).
//  - Chaque leçon : des fiches (slides) puis des questions (qs).
//  - Dans une question, LA BONNE RÉPONSE EST TOUJOURS LA PREMIÈRE de "o".
//    L'appli mélange les réponses toute seule.
//  - Contenu rédigé pour le prototype : à faire relire par un instructeur BIA.
// ================================================================

const MODULES = [
// ---------------------------------------------------------------- MÉTÉO
{id:'meteo', n:1, title:"Météorologie", short:"Météo", icon:'⛅', c:'#1CB0F6', d:'#1899D6', badge:{id:'meteo', e:'⛅', t:'Météorologue'},
 lessons:[
 {id:'atm', title:"L'atmosphère", icon:'🌍', sub:'Composition, couches, atmosphère type',
  slides:[
   {e:'🌍', t:"L'air qu'on respire", b:"<p>L'atmosphère est l'enveloppe de gaz qui entoure la Terre. Elle contient environ <b>78 % d'azote</b> et <b>21 % d'oxygène</b>. Le reste : argon, gaz carbonique… et un peu de <b>vapeur d'eau</b>, indispensable à la formation des nuages.</p>"},
   {e:'🏔️', t:"Des couches empilées", b:"<p>La couche du bas s'appelle la <b>troposphère</b>. C'est là que se passe presque toute la météo : nuages, pluie, orages. Son plafond, la <b>tropopause</b>, est vers <b>11 km</b> d'altitude chez nous (plus haut à l'équateur, plus bas aux pôles).</p><p>Au-dessus : la stratosphère, puis la mésosphère et la thermosphère.</p>"},
   {e:'🌡️', t:"L'atmosphère type (ISA)", b:"<p>Pour comparer les avions et régler les instruments, on utilise une atmosphère « modèle » :</p><ul><li>au niveau de la mer : <b>15 °C</b> et <b>1013,25 hPa</b></li><li>la température baisse de <b>6,5 °C tous les 1 000 m</b></li><li>près du sol, la pression baisse d'environ <b>1 hPa tous les 8,5 m</b> (28 ft)</li></ul><div class='tip'>💡 Astuce : à 2 000 m en atmosphère type, il fait 15 − 13 = 2 °C.</div>"}
  ],
  qs:[
   {q:"Quel est le gaz le plus abondant dans l'air ?", o:["L'azote","L'oxygène","Le gaz carbonique","La vapeur d'eau"], e:"L'air contient environ 78 % d'azote et 21 % d'oxygène."},
   {q:"Dans quelle couche se produisent la plupart des phénomènes météo ?", o:["La troposphère","La stratosphère","La mésosphère","La thermosphère"], e:"La troposphère contient presque toute la vapeur d'eau : c'est là que naissent nuages et précipitations."},
   {q:"Au niveau de la mer, l'atmosphère type (ISA) donne :", o:["15 °C et 1013,25 hPa","0 °C et 1000 hPa","20 °C et 1013,25 hPa","15 °C et 1000 hPa"], e:"Les valeurs de référence ISA au niveau de la mer sont 15 °C et 1013,25 hPa."},
   {q:"En atmosphère type, la température diminue avec l'altitude de :", o:["6,5 °C par 1 000 m","1 °C par 1 000 m","10 °C par 100 m","Elle ne diminue pas"], e:"Le gradient de l'atmosphère type est de −6,5 °C par 1 000 m (soit environ −2 °C par 1 000 ft)."},
   {q:"En atmosphère type, quelle température fait-il à 2 000 m ?", o:["2 °C","15 °C","8,5 °C","−13 °C"], e:"15 °C − (2 × 6,5 °C) = 15 − 13 = 2 °C."},
   {q:"Près du sol, la pression diminue d'environ 1 hPa tous les :", o:["8,5 m (28 ft)","85 m","1 m","850 m"], e:"Dans les basses couches, on retient 1 hPa ≈ 8,5 m ≈ 28 ft."},
   {q:"À quelle altitude se trouve en moyenne la tropopause sous nos latitudes ?", o:["Environ 11 km","Environ 2 km","Environ 50 km","Environ 100 km"], e:"Vers 11 km aux latitudes moyennes, plus haut à l'équateur (16–17 km) et plus bas aux pôles (8 km)."}
  ]},
 {id:'nuages', title:'Nuages et brouillard', icon:'☁️', sub:'Familles de nuages, rosée, givrage',
  slides:[
   {e:'☁️', t:"Comment naît un nuage ?", b:"<p>Quand de l'air humide se refroidit (en montant, par exemple), il finit par atteindre son <b>point de rosée</b> : la température à laquelle il est <b>saturé</b>. La vapeur d'eau se condense alors en minuscules gouttelettes… et le nuage apparaît !</p>"},
   {e:'🪜', t:"Trois étages de nuages", b:"<ul><li><b>Étage supérieur</b> (cirrus, cirrostratus…) : nuages fins faits de <b>cristaux de glace</b>.</li><li><b>Étage moyen</b> (altocumulus, altostratus).</li><li><b>Étage inférieur</b> (stratus, stratocumulus).</li></ul><p>Et un nuage qui traverse tous les étages : le <b>cumulonimbus</b>, le nuage d'<b>orage</b>, souvent coiffé d'une <b>enclume</b>. Les pilotes l'évitent absolument !</p>"},
   {e:'🌫️', t:"Brouillard et givrage", b:"<p>Le <b>brouillard</b>, c'est un nuage posé au sol : la visibilité tombe <b>sous 1 km</b>. Le brouillard de rayonnement se forme surtout par <b>nuit claire et vent faible</b>, quand le sol se refroidit.</p><p>Le <b>givrage</b> : des gouttelettes restées liquides sous 0 °C (<b>eau surfondue</b>) gèlent au contact de l'avion. Danger !</p>"}
  ],
  qs:[
   {q:"À quel étage appartiennent les cirrus ?", o:["L'étage supérieur","L'étage moyen","L'étage inférieur","Ce ne sont pas des nuages"], e:"Les cirrus sont des nuages élevés et fins, composés de cristaux de glace."},
   {q:"Quel est le nuage d'orage ?", o:["Le cumulonimbus","Le cirrostratus","L'altocumulus","Le stratus"], e:"Le cumulonimbus, à fort développement vertical, produit orages, grêle, rafales et turbulences."},
   {q:"Le sommet d'un cumulonimbus prend souvent la forme :", o:["D'une enclume","D'une boule","D'une lentille","D'un anneau"], e:"En butant contre la tropopause, le sommet s'étale en forme d'enclume."},
   {q:"On parle de brouillard quand la visibilité est :", o:["Inférieure à 1 km","Inférieure à 10 km","Supérieure à 5 km","Le brouillard ne concerne pas la visibilité"], e:"Brouillard : visibilité inférieure à 1 km. Au-delà, on parle de brume."},
   {q:"Le point de rosée, c'est :", o:["La température à laquelle l'air devient saturé","La température la plus basse de la nuit","La température de l'eau de pluie","L'altitude de la base des nuages"], e:"Si l'air se refroidit jusqu'à son point de rosée, la vapeur d'eau se condense."},
   {q:"Le brouillard de rayonnement se forme surtout :", o:["Par nuit claire et vent faible","En plein après-midi ensoleillé","Par vent fort","Uniquement en pleine mer"], e:"Sans nuages, le sol perd sa chaleur la nuit et refroidit l'air au contact jusqu'à saturation."},
   {q:"Le givrage sur un avion est surtout dû à :", o:["De l'eau surfondue (liquide sous 0 °C)","Un air très sec","Des températures au-dessus de 20 °C","Un vent arrière"], e:"Les gouttelettes surfondues gèlent instantanément en touchant l'avion, surtout entre 0 °C et environ −20 °C."}
  ]},
 {id:'vents', title:'Vents et fronts', icon:'🌬️', sub:'Direction du vent, anticyclones, fronts',
  slides:[
   {e:'🧭', t:"D'où vient le vent ?", b:"<p>En météo, on donne toujours la direction <b>d'où vient</b> le vent. Un « vent du 270° » ou « vent d'ouest » <b>vient de l'ouest</b>.</p><p>Sur une carte, les lignes qui relient les points de même pression s'appellent les <b>isobares</b>. Plus elles sont serrées, plus le vent est fort.</p>"},
   {e:'🌀', t:"Anticyclones et dépressions", b:"<ul><li><b>Anticyclone</b> (haute pression, H) : temps plutôt <b>beau et stable</b>. Dans l'hémisphère Nord, le vent y tourne dans le <b>sens des aiguilles d'une montre</b>.</li><li><b>Dépression</b> (basse pression, D) : temps plutôt <b>perturbé</b>. Le vent tourne dans le <b>sens inverse</b>.</li></ul>"},
   {e:'🏖️', t:"Brises et fronts", b:"<p>Au bord de la mer, le <b>jour</b> la terre chauffe plus vite : la <b>brise de mer</b> souffle de la mer vers la terre. La nuit, c'est l'inverse (brise de terre).</p><p>Un <b>front chaud</b> s'annonce par des <b>cirrus</b> puis donne une pluie continue. Un <b>front froid</b> apporte <b>averses</b> et <b>cumulonimbus</b>.</p>"}
  ],
  qs:[
   {q:"Un « vent du 270° » :", o:["Vient de l'ouest","Va vers l'ouest","Vient de l'est","Vient du nord"], e:"La direction du vent indique toujours d'où il vient : 270° = ouest."},
   {q:"Dans l'hémisphère Nord, autour d'une dépression, le vent tourne :", o:["Dans le sens inverse des aiguilles d'une montre","Dans le sens des aiguilles d'une montre","Il ne tourne pas","Ça dépend de l'heure"], e:"Hémisphère Nord : sens inverse autour des dépressions, sens horaire autour des anticyclones."},
   {q:"Un anticyclone est généralement associé à :", o:["Un temps beau et stable","Des orages violents","Une pluie continue","Une tempête"], e:"L'air descend dans un anticyclone, ce qui limite la formation des nuages."},
   {q:"La brise de mer souffle :", o:["Le jour, de la mer vers la terre","La nuit, de la terre vers la mer","Le jour, de la terre vers la mer","Toute la journée, parallèle à la côte"], e:"Le jour, la terre chauffe plus vite que la mer : l'air monte au-dessus de la terre et est remplacé par l'air marin."},
   {q:"Le passage d'un front froid apporte typiquement :", o:["Des averses et des cumulonimbus","Un ciel sans aucun nuage","Uniquement du brouillard","Une hausse brutale de température"], e:"L'air froid soulève brutalement l'air chaud : nuages à développement vertical et averses."},
   {q:"Quels nuages annoncent souvent l'arrivée d'un front chaud ?", o:["Les cirrus","Les cumulonimbus","Les stratus","Aucun nuage"], e:"L'air chaud glisse lentement au-dessus de l'air froid : les premiers signes sont des cirrus très élevés."},
   {q:"Sur une carte météo, les lignes de même pression s'appellent :", o:["Des isobares","Des isothermes","Des méridiens","Des courbes de niveau"], e:"Iso = même, bare = pression. Les isothermes relient les points de même température."}
  ]}
 ]},

// ---------------------------------------------------------------- AÉRODYNAMIQUE
{id:'aero', n:2, title:"Aérodynamique et principes du vol", short:"Aérodynamique", icon:'🪶', c:'#CE82FF', d:'#A568CC', badge:{id:'mod-aero', e:'🪶', t:'Aérodynamicien'},
 lessons:[
 {id:'forces', title:'Les forces en vol', icon:'⚖️', sub:'Portance, poids, traînée, traction',
  slides:[
   {e:'⚖️', t:"Quatre forces", b:"<p>En vol, un avion subit <b>quatre forces</b> :</p><ul><li>le <b>poids</b>, vers le bas ;</li><li>la <b>portance</b>, créée par les ailes, qui le soutient ;</li><li>la <b>traînée</b>, la résistance de l'air qui freine ;</li><li>la <b>traction</b> (ou poussée), fournie par le moteur.</li></ul><p>En <b>palier stabilisé</b> : portance = poids et traction = traînée.</p>"},
   {e:'💨', t:"Le vent relatif", b:"<p>Pour l'aile, ce qui compte, c'est l'air qui arrive sur elle : le <b>vent relatif</b>. Il est <b>parallèle à la trajectoire</b> de l'avion et de <b>sens opposé</b>.</p><p>Un avion qui vole à 200 km/h dans un air calme « ressent » un vent relatif de 200 km/h de face.</p>"},
   {e:'🧮', t:"La formule de la portance", b:"<p><b>Portance = ½ × ρ × S × V² × Cz</b></p><ul><li><b>ρ</b> : masse volumique de l'air (elle diminue avec l'altitude)</li><li><b>S</b> : surface des ailes (surface alaire)</li><li><b>V</b> : vitesse</li><li><b>Cz</b> : coefficient de portance (dépend du profil et de l'incidence)</li></ul><div class='tip'>💡 La vitesse est au carré : si elle double, la portance est multipliée par 4 !</div>"}
  ],
  qs:[
   {q:"Quelles sont les quatre forces qui s'exercent sur un avion en vol ?", o:["Portance, poids, traînée, traction","Portance, gravité, vitesse, altitude","Pression, poids, inertie, frottement","Poussée, roulis, tangage, lacet"], e:"Poids et portance s'opposent verticalement, traction et traînée horizontalement."},
   {q:"En vol en palier stabilisé (vitesse constante) :", o:["Portance = poids et traction = traînée","La portance est supérieure au poids","La traînée est supérieure à la traction","Le poids est égal à la traînée"], e:"Les forces s'équilibrent deux à deux : l'avion ne monte pas, ne descend pas et n'accélère pas."},
   {q:"Si la vitesse double (le reste ne changeant pas), la portance est multipliée par :", o:["4","2","8","Elle ne change pas"], e:"La portance dépend du carré de la vitesse : 2² = 4."},
   {q:"Quelle force s'oppose à l'avancement de l'avion ?", o:["La traînée","La portance","Le poids","La traction"], e:"La traînée est la résistance de l'air ; le moteur doit la compenser."},
   {q:"Le vent relatif est :", o:["Parallèle à la trajectoire et de sens opposé","Le vent mesuré au sol","Toujours vertical","Le vent qui vient de la droite"], e:"C'est l'écoulement de l'air tel que l'avion le perçoit en se déplaçant."},
   {q:"En altitude, l'air est moins dense. À vitesse égale, la portance :", o:["Diminue","Augmente","Ne change pas","Double"], e:"ρ (la masse volumique) diminue avec l'altitude, donc la portance aussi : il faut voler plus vite pour la compenser."},
   {q:"Dans la formule de la portance, S représente :", o:["La surface alaire","La vitesse du son","L'envergure","La masse de l'avion"], e:"S est la surface des ailes, en m²."}
  ]},
 {id:'profil', title:"L'aile et le décrochage", icon:'🛬', sub:'Profil, incidence, finesse, volets',
  slides:[
   {e:'✏️', t:"Le profil d'une aile", b:"<p>Coupée en tranche, une aile montre son <b>profil</b> :</p><ul><li><b>bord d'attaque</b> devant, <b>bord de fuite</b> derrière ;</li><li><b>extrados</b> : le dessus, en <b>dépression</b> (il « aspire ») ;</li><li><b>intrados</b> : le dessous, en <b>surpression</b> ;</li><li>la <b>corde</b> : la ligne qui relie bord d'attaque et bord de fuite.</li></ul><p>C'est surtout la dépression de l'extrados qui fait voler l'avion.</p>"},
   {e:'📐', t:"Incidence et décrochage", b:"<p>L'<b>angle d'incidence</b> est l'angle entre la <b>corde</b> du profil et le <b>vent relatif</b>. Quand il augmente, la portance augmente… jusqu'à l'<b>incidence critique</b> (souvent vers 15°).</p><p>Au-delà, l'air <b>décolle de l'extrados</b> : la portance chute brutalement, c'est le <b>décrochage</b>. Il dépend de l'incidence, pas seulement de la vitesse.</p>"},
   {e:'🪂', t:"Finesse et volets", b:"<p>La <b>finesse</b> = portance ÷ traînée. En vol plané, c'est aussi la distance parcourue ÷ la hauteur perdue. Un planeur de finesse 40 parcourt 40 km en perdant 1 000 m !</p><p>Les <b>volets</b> (hypersustentateurs) augmentent la portance à basse vitesse : on les sort au <b>décollage</b> et à l'<b>atterrissage</b>.</p>"}
  ],
  qs:[
   {q:"Comment s'appelle la face supérieure d'une aile ?", o:["L'extrados","L'intrados","Le bord de fuite","La corde"], e:"Extrados = dessus, intrados = dessous."},
   {q:"L'angle d'incidence est l'angle entre :", o:["La corde du profil et le vent relatif","L'aile et le fuselage","La trajectoire et l'horizontale","Les ailes et l'horizon (inclinaison)"], e:"L'angle aile/fuselage s'appelle le calage ; trajectoire/horizontale, c'est la pente."},
   {q:"Le décrochage se produit lorsque :", o:["L'incidence dépasse l'incidence critique","La vitesse est trop grande","Le moteur s'arrête","Les volets sont rentrés"], e:"On peut décrocher à n'importe quelle vitesse si l'incidence devient trop forte (en virage serré par exemple)."},
   {q:"Au décrochage, les filets d'air :", o:["Décollent de l'extrados","Collent mieux à l'aile","Accélèrent sur l'extrados","S'arrêtent sur l'intrados"], e:"L'écoulement devient tourbillonnaire sur l'extrados et la portance s'effondre."},
   {q:"Sur un profil porteur, l'extrados est en général :", o:["En dépression","En surpression","À la pression atmosphérique","Sans aucun écoulement"], e:"La dépression de l'extrados fournit la plus grande part de la portance."},
   {q:"Un planeur de finesse 30 qui perd 1 000 m peut parcourir environ :", o:["30 km","3 km","300 m","300 km"], e:"Distance = finesse × hauteur : 30 × 1 000 m = 30 km (sans vent)."},
   {q:"Les volets servent principalement à :", o:["Voler plus lentement au décollage et à l'atterrissage","Aller plus vite en croisière","Réduire la masse de l'avion","Monter plus haut"], e:"Ils augmentent le Cz, donc la portance à basse vitesse."}
  ]},
 {id:'commandes', title:'Commandes et aérostation', icon:'🎈', sub:'3 axes, gouvernes, Archimède',
  slides:[
   {e:'🔄', t:"Trois axes de rotation", b:"<ul><li><b>Roulis</b> (axe longitudinal, du nez à la queue) : commandé par les <b>ailerons</b>, avec le manche à gauche ou à droite.</li><li><b>Tangage</b> (axe transversal) : commandé par la <b>gouverne de profondeur</b>, manche vers l'avant ou l'arrière.</li><li><b>Lacet</b> (axe vertical) : commandé par la <b>gouverne de direction</b>, avec le <b>palonnier</b> (les pieds).</li></ul>"},
   {e:'↪️', t:"Ailerons et lacet inverse", b:"<p>Manche à droite : l'aileron <b>droit se lève</b>, le gauche <b>s'abaisse</b>, l'avion s'incline à droite.</p><p>Mais l'aileron baissé crée plus de traînée : le nez part un peu du côté opposé. C'est le <b>lacet inverse</b>, que le pilote corrige au palonnier.</p><p>Le <b>compensateur</b> (trim) supprime l'effort à tenir sur le manche.</p>"},
   {e:'🎈', t:"Plus léger que l'air", b:"<p>Un ballon vole grâce à la <b>poussée d'Archimède</b> : il monte si elle est plus forte que son poids.</p><p>La <b>montgolfière</b> utilise de l'<b>air chaud</b>, moins dense que l'air ambiant. Les ballons à gaz utilisent aujourd'hui de l'<b>hélium</b> (l'hydrogène, inflammable, a été abandonné pour le transport de passagers).</p>"}
  ],
  qs:[
   {q:"Les ailerons commandent le mouvement autour de l'axe :", o:["De roulis","De tangage","De lacet","De rotation du moteur"], e:"Ailerons = roulis, profondeur = tangage, direction = lacet."},
   {q:"La gouverne de profondeur commande :", o:["Le tangage","Le roulis","Le lacet","La puissance du moteur"], e:"Manche vers l'arrière : le nez monte ; vers l'avant : il descend."},
   {q:"Le palonnier agit sur :", o:["La gouverne de direction","Les ailerons","La gouverne de profondeur","Les volets"], e:"Le pilote actionne le palonnier avec les pieds pour contrôler le lacet."},
   {q:"Le pilote incline le manche à droite :", o:["L'aileron droit se lève, le gauche s'abaisse","Les deux ailerons s'abaissent","L'aileron droit s'abaisse, le gauche se lève","Les ailerons ne bougent pas"], e:"L'aile droite perd de la portance et descend : l'avion s'incline à droite."},
   {q:"Le lacet inverse est dû :", o:["À la traînée plus forte de l'aileron abaissé","Au vent de travers","Au couple de l'hélice uniquement","À la gouverne de profondeur"], e:"L'aile qui monte freine davantage, le nez part du côté opposé au virage."},
   {q:"Une montgolfière s'élève car :", o:["L'air chaud est moins dense que l'air ambiant","Elle est poussée par un moteur","Elle contient toujours de l'hélium","Ses ailes créent de la portance"], e:"C'est la poussée d'Archimède : un volume d'air chaud est plus léger que le même volume d'air froid."},
   {q:"Le compensateur (trim) sert à :", o:["Annuler l'effort à tenir sur le manche","Freiner l'avion au sol","Régler la fréquence radio","Augmenter la puissance du moteur"], e:"Une fois l'avion stabilisé, le trim permet de lâcher le manche sans que l'assiette change."}
  ]}
 ]},

// ---------------------------------------------------------------- AÉRONEFS
{id:'aeronefs', n:3, title:"Étude des aéronefs et engins spatiaux", short:"Aéronefs", icon:'🛩️', c:'#00C2A8', d:'#009C87', badge:{id:'mod-aeronefs', e:'🔧', t:'Mécano'},
 lessons:[
 {id:'structure', title:"La structure de l'avion", icon:'🛩️', sub:'Fuselage, voilure, train, matériaux',
  slides:[
   {e:'🛩️', t:"Les grandes parties", b:"<ul><li>le <b>fuselage</b> : le corps de l'avion, qui accueille équipage et passagers ;</li><li>la <b>voilure</b> : les ailes ;</li><li>les <b>empennages</b> : les surfaces stabilisatrices à l'arrière (horizontal et vertical) ;</li><li>le <b>train d'atterrissage</b> ;</li><li>le <b>groupe motopropulseur</b> : moteur et hélice.</li></ul>"},
   {e:'🛞', t:"Ailes et train", b:"<p>L'aile peut être <b>haute</b> (au-dessus du fuselage), <b>basse</b> (en dessous) ou médiane.</p><p>Le <b>train tricycle</b> a une roulette de <b>nez</b> et deux roues principales. Le <b>train classique</b> a une roulette de <b>queue</b>, comme beaucoup d'avions anciens.</p>"},
   {e:'🔩', t:"Ce qu'il y a dedans", b:"<p>Dans l'aile, les <b>longerons</b> courent dans le sens de l'envergure et supportent les efforts ; les <b>nervures</b> donnent sa forme au profil.</p><p>Matériaux : surtout des <b>alliages d'aluminium</b>, de plus en plus de <b>composites</b> (fibres de carbone ou de verre), et du bois et de la toile sur les avions anciens ou légers.</p>"}
  ],
  qs:[
   {q:"L'empennage désigne :", o:["Les surfaces stabilisatrices à l'arrière de l'avion","Les ailes","Le train d'atterrissage","Le moteur et l'hélice"], e:"On y trouve le plan horizontal (avec la profondeur) et la dérive (avec la direction)."},
   {q:"Un train tricycle comporte :", o:["Une roulette de nez et deux roues principales","Une roulette de queue et deux roues principales","Trois roues sous chaque aile","Un patin et deux roues"], e:"Le train avec roulette de queue s'appelle train classique."},
   {q:"Une aile fixée sur le dessus du fuselage est dite :", o:["Haute","Basse","Médiane","En flèche"], e:"Aile haute (dessus), basse (dessous), médiane (au milieu). La flèche, c'est l'angle de l'aile vers l'arrière."},
   {q:"Le matériau le plus utilisé dans la structure des avions classiques est :", o:["L'alliage d'aluminium","L'acier inoxydable","Le plomb","Le cuivre"], e:"Léger et résistant, l'aluminium allié domine, même si les composites progressent."},
   {q:"Les longerons d'une aile :", o:["Supportent les efforts dans le sens de l'envergure","Donnent la forme du profil","Servent de réservoir d'huile","Sont les gouvernes mobiles"], e:"Ce sont les « poutres » de l'aile. Les nervures, elles, donnent la forme du profil."},
   {q:"La partie de l'avion qui accueille l'équipage et les passagers est :", o:["Le fuselage","La voilure","La dérive","Le carénage de roue"], e:"Le fuselage relie aussi la voilure, les empennages et le train."},
   {q:"Les nervures d'une aile servent à :", o:["Donner sa forme au profil","Stocker le carburant","Commander le roulis","Freiner l'avion"], e:"Elles sont disposées dans le sens de la corde, comme les côtes d'un squelette."}
  ]},
 {id:'moteurs', title:'Moteurs et hélices', icon:'⚙️', sub:'4 temps, magnétos, réacteurs',
  slides:[
   {e:'⚙️', t:"Le moteur à pistons", b:"<p>La plupart des avions légers ont un moteur à pistons à <b>4 temps</b> :</p><ol><li><b>Admission</b> du mélange air-essence</li><li><b>Compression</b></li><li><b>Combustion-détente</b> (le temps moteur)</li><li><b>Échappement</b></li></ol><p>Un cycle complet = <b>2 tours</b> de vilebrequin.</p>"},
   {e:'⚡', t:"Allumage et carburateur", b:"<p>L'étincelle vient de <b>deux magnétos</b> indépendantes : si l'une tombe en panne, le moteur continue de tourner. C'est une <b>sécurité</b>.</p><p>Dans le carburateur, l'air se refroidit fortement : du <b>givrage carburateur</b> peut apparaître même par 15 ou 20 °C dehors. Le remède : le <b>réchauffage carburateur</b>.</p>"},
   {e:'🔥', t:"Les moteurs à turbine", b:"<p>Le <b>turboréacteur</b> : entrée d'air → <b>compresseur</b> → <b>chambre de combustion</b> → <b>turbine</b> (qui entraîne le compresseur) → <b>tuyère</b>. Il avance par <b>action-réaction</b> (3e loi de Newton).</p><p>Le <b>turbopropulseur</b> : une turbine à gaz qui fait tourner une <b>hélice</b>.</p>"}
  ],
  qs:[
   {q:"Dans quel ordre se succèdent les 4 temps d'un moteur à pistons ?", o:["Admission, compression, combustion-détente, échappement","Compression, admission, échappement, combustion","Admission, combustion, compression, échappement","Échappement, admission, combustion, compression"], e:"On aspire, on comprime, on brûle, on évacue."},
   {q:"Un cycle complet d'un moteur 4 temps correspond à :", o:["2 tours de vilebrequin","1 tour de vilebrequin","4 tours de vilebrequin","Un demi-tour de vilebrequin"], e:"Chaque temps = un demi-tour, donc 4 temps = 2 tours."},
   {q:"Pourquoi les moteurs d'avion ont-ils deux magnétos ?", o:["Pour la sécurité : deux allumages indépendants","Pour doubler la vitesse de l'avion","Pour alimenter la radio","Pour démarrer plus vite"], e:"Chaque cylindre a deux bougies, alimentées par deux magnétos différentes."},
   {q:"Face au givrage carburateur, le pilote utilise :", o:["Le réchauffage carburateur","Les magnétos","Les volets","Le compensateur"], e:"Le réchauffage envoie de l'air chaud dans le carburateur pour faire fondre la glace."},
   {q:"Dans un turboréacteur, l'air traverse dans l'ordre :", o:["Compresseur, chambre de combustion, turbine, tuyère","Turbine, compresseur, tuyère, chambre de combustion","Tuyère, turbine, compresseur, chambre de combustion","Chambre de combustion, compresseur, tuyère, turbine"], e:"La turbine récupère une partie de l'énergie pour entraîner le compresseur, la tuyère accélère les gaz."},
   {q:"Un réacteur fait avancer l'avion grâce au principe :", o:["D'action-réaction","D'Archimède","Des vases communicants","De l'effet de sol"], e:"Il éjecte des gaz vers l'arrière à grande vitesse ; en réaction, l'avion est poussé vers l'avant."},
   {q:"Un turbopropulseur, c'est :", o:["Une turbine à gaz qui entraîne une hélice","Un moteur à pistons électrique","Une fusée à poudre","Un réacteur sans compresseur"], e:"On le trouve sur les avions régionaux comme l'ATR 72."}
  ]},
 {id:'instruments', title:"Instruments et espace", icon:'🧭', sub:'Anémomètre, altimètre, fusées',
  slides:[
   {e:'🧭', t:"Les instruments « anémobarométriques »", b:"<ul><li><b>Anémomètre</b> : la vitesse, grâce au <b>tube de Pitot</b> (pression totale) et à la <b>prise statique</b>.</li><li><b>Altimètre</b> : une capsule sensible à la pression statique.</li><li><b>Variomètre</b> : la <b>vitesse verticale</b> (montée ou descente).</li></ul>"},
   {e:'📏', t:"Caler son altimètre", b:"<ul><li>Calé au <b>QNH</b> : il indique l'<b>altitude</b> (au-dessus du niveau de la mer).</li><li>Calé au <b>QFE</b> : il indique la <b>hauteur</b> au-dessus du terrain.</li><li>Calé sur <b>1013,25 hPa</b> : il indique un <b>niveau de vol</b> (FL).</li></ul><p>L'<b>horizon artificiel</b> et le <b>conservateur de cap</b> fonctionnent avec des <b>gyroscopes</b>.</p>"},
   {e:'🚀', t:"Fusées et satellites", b:"<p>Un <b>moteur-fusée</b> emporte son carburant <b>et son comburant</b> (l'oxydant) : il peut donc fonctionner dans le <b>vide</b> spatial.</p><p>Pour rester en orbite basse, il faut environ <b>7,9 km/s</b>. La Station spatiale internationale tourne autour de la Terre à environ <b>400 km</b> d'altitude.</p>"}
  ],
  qs:[
   {q:"Pour mesurer la vitesse, l'anémomètre utilise :", o:["Le tube de Pitot et la prise statique","Un gyroscope","Le compas magnétique","Le GPS uniquement"], e:"Il compare la pression totale (Pitot) et la pression statique : la différence donne la vitesse."},
   {q:"Un altimètre calé au QNH indique :", o:["L'altitude (au-dessus du niveau de la mer)","La hauteur au-dessus de la piste","Le niveau de vol","La vitesse verticale"], e:"QNH → altitude, QFE → hauteur, 1013 → niveau de vol."},
   {q:"Un altimètre calé sur 1013,25 hPa indique :", o:["Un niveau de vol","L'altitude exacte","La hauteur au-dessus du sol","La température extérieure"], e:"Tous les avions utilisent le même calage en croisière : leurs niveaux sont comparables."},
   {q:"Le variomètre indique :", o:["La vitesse verticale","La vitesse horizontale","Le cap","L'inclinaison"], e:"Il dit si l'avion monte ou descend, et à quel rythme (en ft/min ou m/s)."},
   {q:"L'horizon artificiel fonctionne grâce à :", o:["Un gyroscope","Un tube de Pitot","Une capsule anéroïde","Un aimant"], e:"Le gyroscope garde une direction fixe dans l'espace et sert de référence."},
   {q:"Un moteur-fusée peut fonctionner dans le vide car :", o:["Il emporte son propre comburant","Il utilise l'oxygène de l'air","Il est équipé d'hélices","Il n'a pas besoin de carburant"], e:"Pas d'air dans l'espace : la fusée embarque un oxydant (par exemple de l'oxygène liquide)."},
   {q:"La Station spatiale internationale orbite à environ :", o:["400 km d'altitude","40 km d'altitude","4 000 km d'altitude","36 000 km d'altitude"], e:"C'est une orbite basse ; 36 000 km, c'est l'orbite géostationnaire."}
  ]}
 ]},

// ---------------------------------------------------------------- NAVIGATION
{id:'nav', n:4, title:"Navigation, réglementation, sécurité", short:"Navigation", icon:'🗺️', c:'#FF9600', d:'#D97F00', badge:{id:'mod-nav', e:'🧭', t:'Navigateur'},
 lessons:[
 {id:'reperes', title:'Se repérer', icon:'🌐', sub:'Latitude, unités, cap et route',
  slides:[
   {e:'🌐', t:"Latitude et longitude", b:"<p>La <b>latitude</b> se mesure vers le <b>nord ou le sud</b> à partir de l'<b>équateur</b> (de 0 à 90°).</p><p>La <b>longitude</b> se mesure vers l'<b>est ou l'ouest</b> à partir du méridien de <b>Greenwich</b> (de 0 à 180°).</p>"},
   {e:'📏', t:"Les unités de l'aviation", b:"<ul><li><b>Mille nautique</b> (NM) = <b>1 852 m</b>, soit une minute d'angle de latitude.</li><li><b>Nœud</b> (kt) = 1 NM par heure.</li><li><b>Pied</b> (ft) = 0,3048 m, utilisé pour les altitudes.</li></ul><div class='tip'>💡 À 120 kt pendant 30 minutes, on parcourt 60 NM.</div>"},
   {e:'🧭', t:"Cap, route et dérive", b:"<p>Le <b>cap</b> est la direction du nez de l'avion. La <b>route</b> est sa trajectoire au-dessus du sol. Le vent fait « glisser » l'avion : l'angle entre cap et route s'appelle la <b>dérive</b>.</p><p>Le nord du compas (magnétique) n'est pas le nord géographique : l'écart est la <b>déclinaison magnétique</b>.</p><p>Le plus court chemin entre deux points du globe est l'<b>orthodromie</b> ; la route à cap constant est la <b>loxodromie</b>.</p>"}
  ],
  qs:[
   {q:"Un mille nautique (NM) vaut :", o:["1 852 m","1 609 m","1 000 m","1 500 m"], e:"1 NM = 1 852 m. Le mille terrestre (1 609 m) n'est pas utilisé en aviation."},
   {q:"Un nœud (kt), c'est :", o:["1 mille nautique par heure","1 km/h","1 m/s","1 mille terrestre par heure"], e:"100 kt ≈ 185 km/h."},
   {q:"La latitude d'un lieu se mesure :", o:["Vers le nord ou le sud à partir de l'équateur","Vers l'est ou l'ouest à partir de Greenwich","À partir du pôle Nord uniquement","En kilomètres depuis Paris"], e:"La longitude, elle, se mesure à partir du méridien de Greenwich."},
   {q:"Un avion vole à 120 kt pendant 30 minutes. Quelle distance parcourt-il ?", o:["60 NM","120 NM","30 NM","240 NM"], e:"120 NM en une heure, donc 60 NM en une demi-heure."},
   {q:"L'écart entre le nord géographique et le nord magnétique s'appelle :", o:["La déclinaison magnétique","La dérive","La latitude","L'incidence"], e:"Elle varie selon le lieu et lentement dans le temps ; elle est indiquée sur les cartes."},
   {q:"L'angle entre le cap et la route, causé par le vent, s'appelle :", o:["La dérive","La déclinaison","L'assiette","Le calage"], e:"Pour suivre sa route, le pilote corrige son cap du côté d'où vient le vent."},
   {q:"Le chemin le plus court entre deux points du globe est :", o:["L'orthodromie","La loxodromie","Un parallèle","Une ligne à cap constant"], e:"L'orthodromie suit un « grand cercle ». La loxodromie garde un cap constant mais est plus longue."}
  ]},
 {id:'regles', title:'Les règles de l\'air', icon:'📋', sub:'VFR, priorités, transpondeur',
  slides:[
   {e:'👀', t:"VFR et IFR", b:"<p><b>VFR</b> (vol à vue) : le pilote se dirige en regardant dehors. Il faut de bonnes conditions météo.</p><p><b>IFR</b> (vol aux instruments) : le pilote peut voler dans les nuages en suivant ses instruments et les consignes du contrôle aérien.</p><p>Les avions français sont immatriculés <b>F-xxxx</b>.</p>"},
   {e:'↔️', t:"Qui passe en premier ?", b:"<ul><li>Deux avions <b>convergent</b> : celui qui voit l'autre <b>à sa droite</b> lui cède le passage.</li><li><b>Face à face</b> : chacun s'écarte <b>vers sa droite</b>.</li><li>On <b>dépasse par la droite</b>.</li><li>Le moins manœuvrant est prioritaire : l'avion à moteur cède le passage aux <b>planeurs</b>, les planeurs aux <b>ballons</b>.</li></ul>"},
   {e:'📟', t:"Les codes transpondeur", b:"<p>Le transpondeur envoie un code au radar :</p><ul><li><b>7700</b> : détresse</li><li><b>7600</b> : panne radio</li><li><b>7500</b> : intervention illicite (détournement)</li><li><b>7000</b> : vol VFR standard en Europe</li></ul>"}
  ],
  qs:[
   {q:"VFR signifie :", o:["Vol à vue","Vol aux instruments","Vol de nuit","Vol à voile"], e:"Visual Flight Rules. IFR = Instrument Flight Rules."},
   {q:"Deux avions convergent à la même altitude. Qui doit céder le passage ?", o:["Celui qui voit l'autre à sa droite","Celui qui voit l'autre à sa gauche","Le plus lent","Le plus haut"], e:"Comme sur la route : priorité à droite."},
   {q:"Deux avions arrivent face à face. Chacun doit :", o:["S'écarter vers sa droite","S'écarter vers sa gauche","Monter","Descendre"], e:"En s'écartant tous les deux à droite, ils se croisent en sécurité."},
   {q:"Les aéronefs immatriculés en France commencent par :", o:["F","FR","N","G"], e:"N = États-Unis, G = Royaume-Uni, D = Allemagne."},
   {q:"Quel code transpondeur signale une détresse ?", o:["7700","7600","7500","7000"], e:"7700 = détresse, 7600 = panne radio, 7500 = intervention illicite."},
   {q:"Le code transpondeur 7600 signifie :", o:["Panne radio","Détresse","Intervention illicite","Vol VFR standard"], e:"Le contrôleur sait alors que le pilote ne peut plus communiquer par radio."},
   {q:"Entre un avion à moteur et un planeur, qui est prioritaire ?", o:["Le planeur","L'avion à moteur","Le plus rapide","Le plus lourd"], e:"Le moins manœuvrant est prioritaire : un planeur ne peut pas remettre les gaz."}
  ]},
 {id:'securite', title:'Sécurité et facteurs humains', icon:'🩺', sub:'Hypoxie, sillage, prévol',
  slides:[
   {e:'🫁', t:"Le corps en altitude", b:"<p>En altitude, l'air contient moins d'oxygène utilisable : c'est l'<b>hypoxie</b>. Elle est <b>insidieuse</b> : on peut se sentir bien, voire euphorique, alors que le jugement se dégrade.</p><p>Voler enrhumé est déconseillé : <b>oreilles et sinus</b> peuvent faire très mal, surtout en <b>descente</b>.</p>"},
   {e:'😵‍💫', t:"Les pièges des sens", b:"<p>Sans repères visuels (dans un nuage), l'<b>oreille interne</b> peut tromper le pilote : il croit voler droit alors qu'il tourne. C'est la <b>désorientation spatiale</b>, d'où l'importance des instruments.</p><p>Le <b>monoxyde de carbone</b> (CO), parfois émis par un chauffage défectueux, est <b>inodore</b> et très dangereux.</p>"},
   {e:'✅', t:"Les bons réflexes", b:"<ul><li>Faire la <b>visite prévol</b> avant chaque vol, avec la <b>check-list</b>.</li><li>Se méfier de la <b>turbulence de sillage</b> : les tourbillons en bout d'aile d'un gros avion persistent derrière lui.</li><li>Ne jamais voler après avoir bu de l'<b>alcool</b>, et vérifier la météo et le carburant.</li></ul>"}
  ],
  qs:[
   {q:"L'hypoxie, c'est :", o:["Un manque d'oxygène dans l'organisme","Un excès d'oxygène","Le mal des transports","Une baisse de la température du corps"], e:"Elle apparaît avec l'altitude, car la pression de l'oxygène dans l'air diminue."},
   {q:"Pourquoi l'hypoxie est-elle particulièrement dangereuse ?", o:["Elle est insidieuse : on ne la ressent pas toujours","Elle est toujours très douloureuse","Elle ne touche que les passagers","Elle n'arrive qu'au sol"], e:"Le pilote peut se sentir bien, voire euphorique, alors que ses capacités baissent."},
   {q:"La turbulence de sillage est causée par :", o:["Les tourbillons en bout d'aile d'un avion qui précède","Le vent sur le relief","Les orages","La chaleur du soleil"], e:"Derrière un gros avion, il faut laisser du temps et de la distance."},
   {q:"Le monoxyde de carbone en cabine :", o:["Est inodore et dangereux","A une forte odeur d'essence","Est sans danger","Rend la vue plus perçante"], e:"Il peut provenir d'un chauffage cabine qui utilise la chaleur de l'échappement."},
   {q:"Voler enrhumé expose surtout à :", o:["Des douleurs aux oreilles et aux sinus, surtout en descente","Aucun risque particulier","Une meilleure vision","Un risque seulement au décollage"], e:"Les variations de pression ne peuvent plus s'équilibrer correctement."},
   {q:"La désorientation spatiale se produit surtout :", o:["Sans repères visuels extérieurs (dans les nuages)","Par grand beau temps","Au sol, moteur arrêté","Uniquement la nuit sur un aérodrome éclairé"], e:"L'oreille interne seule ne suffit pas : il faut faire confiance aux instruments."},
   {q:"Avant chaque vol, le pilote doit effectuer :", o:["Une visite prévol avec la check-list","Une vidange du moteur","Un changement des pneus","Rien de particulier"], e:"La prévol permet de vérifier carburant, huile, gouvernes, pneus… avant de décoller."}
  ]}
 ]},

// ---------------------------------------------------------------- HISTOIRE
{id:'histoire', n:5, title:"Histoire de l'aéronautique et du spatial", short:"Histoire", icon:'🚀', c:'#FF86D0', d:'#D96BB0', badge:{id:'mod-histoire', e:'📜', t:'Historien'},
 lessons:[
 {id:'pionniers', title:'Les pionniers', icon:'🎈', sub:'De 1783 à 1913',
  slides:[
   {e:'🎈', t:"Les premiers envols", b:"<p>Le <b>21 novembre 1783</b>, <b>Pilâtre de Rozier</b> et le <b>marquis d'Arlandes</b> réalisent le premier vol humain, à bord d'une <b>montgolfière</b> des frères Montgolfier, au-dessus de Paris.</p><p>À la fin du XIXe siècle, l'Allemand <b>Otto Lilienthal</b> multiplie les vols en planeur.</p>"},
   {e:'🦇', t:"Les premiers avions", b:"<ul><li><b>1890</b> : <b>Clément Ader</b> décolle sur quelques dizaines de mètres avec l'<b>Éole</b>.</li><li><b>17 décembre 1903</b> : les <b>frères Wright</b> réalisent le premier vol motorisé contrôlé avec le <b>Flyer</b>, aux États-Unis.</li><li><b>1906</b> : <b>Santos-Dumont</b> vole à Paris sur le 14-bis.</li></ul>"},
   {e:'🌊', t:"Franchir les mers", b:"<ul><li><b>1909</b> : <b>Louis Blériot</b> traverse la <b>Manche</b>.</li><li><b>1910</b> : <b>Henri Fabre</b> fait décoller le premier <b>hydravion</b>.</li><li><b>1913</b> : <b>Roland Garros</b> traverse la <b>Méditerranée</b>.</li></ul>"}
  ],
  qs:[
   {q:"Qui a réalisé le premier vol humain, en montgolfière, en 1783 ?", o:["Pilâtre de Rozier et le marquis d'Arlandes","Les frères Wright","Louis Blériot","Clément Ader"], e:"Le 21 novembre 1783, au-dessus de Paris."},
   {q:"Comment s'appelait l'appareil de Clément Ader en 1890 ?", o:["L'Éole","Le Flyer","Le 14-bis","Le Spirit of St. Louis"], e:"Un appareil à ailes de chauve-souris, propulsé par un moteur à vapeur."},
   {q:"En quelle année les frères Wright réalisent-ils leur premier vol motorisé contrôlé ?", o:["1903","1890","1909","1927"], e:"Le 17 décembre 1903, avec le Flyer."},
   {q:"En quelle année Louis Blériot traverse-t-il la Manche ?", o:["1909","1903","1919","1927"], e:"Le 25 juillet 1909, à bord du Blériot XI."},
   {q:"Qui réalise la première traversée de la Méditerranée en avion, en 1913 ?", o:["Roland Garros","Jean Mermoz","Charles Lindbergh","Antoine de Saint-Exupéry"], e:"Il relie la côte française à la Tunisie."},
   {q:"Qui fait décoller le premier hydravion en 1910 ?", o:["Henri Fabre","Alberto Santos-Dumont","Georges Guynemer","Pierre-Georges Latécoère"], e:"Henri Fabre décolle de l'étang de Berre, près de Marseille."},
   {q:"Quel pionnier allemand est célèbre pour ses vols en planeur à la fin du XIXe siècle ?", o:["Otto Lilienthal","Ferdinand von Zeppelin","Hugo Junkers","Willy Messerschmitt"], e:"Ses expériences ont beaucoup inspiré les frères Wright."}
  ]},
 {id:'agedor', title:"L'âge d'or", icon:'🛫', sub:'Aéropostale, Atlantique, Concorde',
  slides:[
   {e:'✉️', t:"L'Aéropostale", b:"<p>Dans les années 1920, les lignes <b>Latécoère</b> puis l'<b>Aéropostale</b> transportent le courrier de la France vers l'<b>Afrique</b> et l'<b>Amérique du Sud</b>.</p><p>Ses pilotes sont légendaires : <b>Jean Mermoz</b>, <b>Henri Guillaumet</b> et <b>Antoine de Saint-Exupéry</b>, auteur de <i>Vol de nuit</i> et du <i>Petit Prince</i>.</p>"},
   {e:'🌊', t:"La traversée de l'Atlantique", b:"<p>En <b>1927</b>, <b>Charles Lindbergh</b> relie <b>New York à Paris</b> seul et sans escale, à bord du <b>Spirit of St. Louis</b>.</p><p>Quelques jours plus tôt, les Français <b>Nungesser et Coli</b> avaient disparu en tentant la traversée inverse sur l'<b>Oiseau blanc</b>.</p>"},
   {e:'💥', t:"Plus vite que le son", b:"<p>En <b>1947</b>, l'Américain <b>Chuck Yeager</b> franchit le premier le <b>mur du son</b>.</p><p>En <b>1969</b>, <b>Concorde</b>, avion de ligne supersonique franco-britannique, fait son premier vol. Il transportera des passagers jusqu'en 2003.</p>"}
  ],
  qs:[
   {q:"Qui réussit la première traversée de l'Atlantique en solitaire et sans escale, en 1927 ?", o:["Charles Lindbergh","Louis Blériot","Jean Mermoz","Amelia Earhart"], e:"Il relie New York à Paris en environ 33 heures et demie."},
   {q:"Comment s'appelait l'avion de Lindbergh ?", o:["Spirit of St. Louis","L'Oiseau blanc","Le Flyer","L'Éole"], e:"L'Oiseau blanc était l'avion de Nungesser et Coli."},
   {q:"Les lignes de l'Aéropostale reliaient la France à :", o:["L'Afrique et l'Amérique du Sud","L'Asie","L'Amérique du Nord","L'Australie"], e:"De Toulouse à Dakar, puis à travers l'Atlantique Sud jusqu'en Argentine."},
   {q:"Quel pilote de l'Aéropostale a écrit Vol de nuit et Le Petit Prince ?", o:["Antoine de Saint-Exupéry","Jean Mermoz","Henri Guillaumet","Clément Ader"], e:"Saint-Exupéry s'inspirait de sa vie de pilote."},
   {q:"Qui a franchi le premier le mur du son, en 1947 ?", o:["Chuck Yeager","Neil Armstrong","Charles Lindbergh","Youri Gagarine"], e:"À bord de l'avion-fusée Bell X-1."},
   {q:"En quelle année Concorde a-t-il effectué son premier vol ?", o:["1969","1949","1989","2003"], e:"2003 est l'année de son retrait du service."},
   {q:"À bord de quel avion Nungesser et Coli ont-ils disparu en 1927 ?", o:["L'Oiseau blanc","Le Spirit of St. Louis","Le Point d'Interrogation","Concorde"], e:"Ils tentaient de relier Paris à New York."}
  ]},
 {id:'espace', title:'La conquête spatiale', icon:'🌕', sub:'Spoutnik, Gagarine, Apollo, Ariane',
  slides:[
   {e:'🛰️', t:"Les débuts", b:"<p>Le <b>4 octobre 1957</b>, l'URSS lance <b>Spoutnik 1</b>, le premier satellite artificiel.</p><p>Le <b>12 avril 1961</b>, <b>Youri Gagarine</b> devient le premier homme dans l'espace. En <b>1963</b>, <b>Valentina Terechkova</b> est la première femme.</p>"},
   {e:'🌕', t:"Sur la Lune", b:"<p>En <b>juillet 1969</b>, la mission américaine <b>Apollo 11</b> se pose sur la Lune. <b>Neil Armstrong</b> est le premier homme à y marcher, suivi de Buzz Aldrin.</p>"},
   {e:'🇫🇷', t:"La France dans l'espace", b:"<ul><li><b>1979</b> : premier lancement de la fusée européenne <b>Ariane</b>, depuis <b>Kourou</b> en Guyane.</li><li><b>1982</b> : <b>Jean-Loup Chrétien</b>, premier Français dans l'espace.</li><li><b>1996</b> : <b>Claudie Haigneré</b>, première Française.</li><li><b>Thomas Pesquet</b> a séjourné deux fois à bord de l'<b>ISS</b>.</li></ul>"}
  ],
  qs:[
   {q:"Quel est le premier satellite artificiel, lancé en 1957 ?", o:["Spoutnik 1","Explorer 1","Apollo 11","Hubble"], e:"Lancé par l'URSS le 4 octobre 1957."},
   {q:"Qui est le premier homme dans l'espace, en 1961 ?", o:["Youri Gagarine","Neil Armstrong","Alan Shepard","Jean-Loup Chrétien"], e:"Le 12 avril 1961, à bord de Vostok 1."},
   {q:"Quelle mission a permis le premier pas sur la Lune ?", o:["Apollo 11","Apollo 13","Vostok 1","Gemini 4"], e:"En juillet 1969. Apollo 13 a dû renoncer à se poser après une avarie."},
   {q:"Qui est le premier Français à être allé dans l'espace, en 1982 ?", o:["Jean-Loup Chrétien","Thomas Pesquet","Patrick Baudry","Claudie Haigneré"], e:"Il a rejoint la station soviétique Saliout 7."},
   {q:"D'où décollent les fusées Ariane ?", o:["De Kourou, en Guyane","De Cap Canaveral","De Baïkonour","De Toulouse"], e:"Proche de l'équateur, Kourou profite de la vitesse de rotation de la Terre."},
   {q:"Qui est la première femme à être allée dans l'espace, en 1963 ?", o:["Valentina Terechkova","Claudie Haigneré","Sally Ride","Amelia Earhart"], e:"Sally Ride a été la première Américaine, en 1983."},
   {q:"À bord de quelle station Thomas Pesquet a-t-il séjourné ?", o:["La Station spatiale internationale (ISS)","Mir","Saliout 7","Skylab"], e:"En 2016-2017 (mission Proxima) puis en 2021 (mission Alpha)."}
  ]}
 ]}
];

// ================================================================
//  LEXIQUE : [terme, définition, module]
// ================================================================
const GLOSSARY = [
 ["Anticyclone","Zone de hautes pressions, généralement associée au beau temps.","meteo"],
 ["Dépression","Zone de basses pressions, souvent associée au mauvais temps.","meteo"],
 ["Isobare","Ligne reliant les points de même pression sur une carte météo.","meteo"],
 ["Point de rosée","Température à laquelle l'air devient saturé en vapeur d'eau.","meteo"],
 ["Tropopause","Limite entre la troposphère et la stratosphère, vers 11 km chez nous.","meteo"],
 ["Cumulonimbus","Nuage d'orage à fort développement vertical, souvent en forme d'enclume.","meteo"],
 ["Front froid","Masse d'air froid qui remplace l'air chaud, avec averses et orages.","meteo"],
 ["Front chaud","Masse d'air chaud qui glisse sur l'air froid, avec pluie continue.","meteo"],
 ["Givrage","Dépôt de glace sur l'avion, dû à de l'eau surfondue.","meteo"],
 ["Brouillard","Nuage au contact du sol, avec une visibilité inférieure à 1 km.","meteo"],
 ["METAR","Message d'observation météo régulier d'un aérodrome.","meteo"],
 ["TAF","Prévision météo d'un aérodrome pour les heures à venir.","meteo"],
 ["Atmosphère type (ISA)","Atmosphère de référence : 15 °C et 1013,25 hPa au niveau de la mer.","meteo"],

 ["Portance","Force aérodynamique perpendiculaire au vent relatif, qui soutient l'avion.","aero"],
 ["Traînée","Force aérodynamique qui s'oppose à l'avancement.","aero"],
 ["Vent relatif","Écoulement de l'air vu par l'avion, opposé à sa trajectoire.","aero"],
 ["Incidence","Angle entre la corde du profil et le vent relatif.","aero"],
 ["Décrochage","Chute brutale de la portance quand l'incidence dépasse l'incidence critique.","aero"],
 ["Extrados","Face supérieure de l'aile, en dépression.","aero"],
 ["Intrados","Face inférieure de l'aile, en surpression.","aero"],
 ["Bord d'attaque","Partie avant du profil, qui rencontre l'air en premier.","aero"],
 ["Bord de fuite","Partie arrière du profil, où les filets d'air se rejoignent.","aero"],
 ["Corde","Segment qui relie le bord d'attaque au bord de fuite.","aero"],
 ["Finesse","Rapport portance / traînée ; en plané, distance parcourue / hauteur perdue.","aero"],
 ["Envergure","Distance d'un bout d'aile à l'autre.","aero"],
 ["Allongement","Rapport envergure² / surface alaire : élevé sur les planeurs.","aero"],
 ["Volets","Hypersustentateurs qui augmentent la portance à basse vitesse.","aero"],
 ["Roulis","Rotation autour de l'axe longitudinal, commandée par les ailerons.","aero"],
 ["Tangage","Rotation autour de l'axe transversal, commandée par la profondeur.","aero"],
 ["Lacet","Rotation autour de l'axe vertical, commandée par la direction.","aero"],
 ["Facteur de charge","Rapport entre la portance et le poids ; il vaut 2 en virage à 60° d'inclinaison.","aero"],

 ["Fuselage","Corps de l'avion, qui accueille l'équipage et les passagers.","aeronefs"],
 ["Empennage","Ensemble des surfaces stabilisatrices à l'arrière de l'avion.","aeronefs"],
 ["Longeron","Poutre principale de l'aile, dans le sens de l'envergure.","aeronefs"],
 ["Nervure","Pièce qui donne sa forme au profil de l'aile.","aeronefs"],
 ["Train tricycle","Train d'atterrissage avec une roulette de nez et deux roues principales.","aeronefs"],
 ["Magnéto","Générateur autonome qui produit l'étincelle des bougies.","aeronefs"],
 ["Tube de Pitot","Prise de pression totale qui sert à mesurer la vitesse.","aeronefs"],
 ["Anémomètre","Instrument qui indique la vitesse de l'avion par rapport à l'air.","aeronefs"],
 ["Altimètre","Instrument qui indique l'altitude à partir de la pression.","aeronefs"],
 ["Variomètre","Instrument qui indique la vitesse verticale.","aeronefs"],
 ["Horizon artificiel","Instrument gyroscopique qui montre l'assiette et l'inclinaison.","aeronefs"],
 ["Compensateur (trim)","Petit volet réglable qui annule l'effort à tenir sur le manche.","aeronefs"],
 ["Palonnier","Pédales qui commandent la gouverne de direction.","aeronefs"],
 ["Turbopropulseur","Turbine à gaz qui entraîne une hélice.","aeronefs"],
 ["Turboréacteur","Moteur à turbine qui propulse par éjection de gaz.","aeronefs"],

 ["VFR","Règles de vol à vue.","nav"],
 ["IFR","Règles de vol aux instruments.","nav"],
 ["Cap","Direction vers laquelle pointe le nez de l'avion.","nav"],
 ["Route","Trajectoire réellement suivie par l'avion au-dessus du sol.","nav"],
 ["Dérive","Angle entre le cap et la route, causé par le vent.","nav"],
 ["Déclinaison magnétique","Écart entre le nord géographique et le nord magnétique.","nav"],
 ["Nœud","Unité de vitesse : 1 mille nautique par heure.","nav"],
 ["Mille nautique","Unité de distance de 1 852 m.","nav"],
 ["Niveau de vol","Altitude lue avec un altimètre calé sur 1013,25 hPa, en centaines de pieds.","nav"],
 ["QNH","Calage altimétrique qui fait indiquer l'altitude.","nav"],
 ["QFE","Calage altimétrique qui fait indiquer la hauteur au-dessus du terrain.","nav"],
 ["Transpondeur","Équipement qui répond aux radars en envoyant un code.","nav"],
 ["Orthodromie","Route la plus courte entre deux points du globe.","nav"],
 ["Loxodromie","Route à cap constant entre deux points.","nav"],
 ["Vent arrière","Branche du circuit d'aérodrome parallèle à la piste, en sens opposé à l'atterrissage.","nav"],
 ["Hypoxie","Manque d'oxygène dans l'organisme, lié à l'altitude.","nav"],
 ["Turbulence de sillage","Tourbillons laissés en bout d'aile par un avion qui précède.","nav"],

 ["Montgolfière","Ballon qui vole grâce à de l'air chaud.","histoire"],
 ["Aéropostale","Compagnie qui acheminait le courrier vers l'Afrique et l'Amérique du Sud dans les années 1920-1930.","histoire"],
 ["Mur du son","Vitesse du son, franchie pour la première fois en 1947.","histoire"],
 ["Satellite","Objet placé en orbite autour d'un astre.","histoire"],
 ["Orbite géostationnaire","Orbite à environ 36 000 km où un satellite semble immobile au-dessus de la Terre.","histoire"]
];
