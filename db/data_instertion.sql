INSERT INTO service_types (name) VALUES
('lien'),
('video'),
('cash'),
('personne');

INSERT INTO cantons (name) VALUES
('Fribourg'),
('Valais'),
('Vaud');

INSERT INTO organization_types (name) VALUES
('Association'),
('SA'),
('Caritatif');

INSERT INTO organizations (name, latitude, longitude, address, organization_type_id, canton_id) VALUES
('Coeur à coeur', 46.2, 48.4, 'Chemin de Fribourg 2, 1700 Fribourg', 1, 1),
('La chaine du bonheur', 49.2, 44.4, 'Chemin de la fôret 4, 1700 Fribourg', 3, 1),
('Idea', 46.2, 48.4, 'Chemin de Fribourg 50, 1700 Fribourg', 1, 2);

INSERT INTO services (name, description, organization_id, service_type_id) VALUES
('Aide monétaire xyz', 'Petite aide mensuelle cash', 3, 3),
('Aide personne xyz', 'Petite aide pour faire le ménage', 2, 4);

INSERT INTO languages (name) VALUES
('français'),
('anglais'),
('allemand'),
('italiens');

INSERT INTO question_category (label, lang_id) VALUES
('Besoin d’informations', 1),
('Besoin de développer mes compétences', 1),
('Besoin de soutien', 1),
('Besoin de prendre soin de ma santé', 1);

INSERT INTO questions (question, question_set, generation, parent_question_id, category_id, lang_id) VALUES
('Actuellement j’ai besoin d’informations sur **le diagnostic précis ou sur la maladie**', NULL, NULL, NULL, 1 , 1),
('Actuellement j’ai besoin d’informations sur **les connaissances scientifiques actuelles qui concernent cette maladie**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations **sur la procédure de diagnostic**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations sur **l’accompagnement d’une personne avec démence**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations **sur les traitements possibles** pour sa maladie et **sur comment choisir**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations **sur les médicaments** que prend ma|mon proche, et **sur la manière de les prendre**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations **sur les services et les organisations qui peuvent me décharger dans l’accompagnement ou les soins à ma|mon proche et sur comment obtenir ces décharges**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin de plus d’informations **sur les services et les organisations qui peuvent me soutenir en tant que proche aidant∙e et sur comment obtenir ces soutiens**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin d’informations **sur les lieux de vie à long terme pour personnes avec démence**', NULL, NULL, NULL , 1 , 1),
('Actuellement j’ai besoin de savoir **reconnaître les problèmes de mémoire de ma|mon proche et ce qui peut les aggraver, pour anticiper et gérer les situations qui peuvent la|le mettre en difficulté**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche à gérer seul∙e ses activités quotidiennes**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin de savoir **reconnaître les situations de crise** (changements soudains chez ma|mon proche malade qui peuvent indiquer un problème sérieux), **et savoir comment les gérer en impliquant les services de santé**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin de savoir **défendre les intérêts de ma|mon proche malade face au réseau de prise en charge**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche liées à sa maladie** (comportements ou émotions, communication, occupations) **et de pouvoir les expliquer à mon entourage**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin d’**apprendre à aider tout en prenant soin de moi**', NULL, NULL, NULL , 2, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec les pertes dues à la maladie de ma|mon proche et le processus de deuil associé**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec mon rôle de proche aidant∙e**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour trouver rapidement des solutions pour me sentir moins épuisé∙e**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour me sentir plus valorisé∙e dans mon rôle de proche aidant∙e**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**échanges et de partages avec des personnes vivant une situation similaire**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour obtenir plus de présence et de soutien – émotionnel ou pratique – de mon entourage**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour réduire les conflits ou les tensions avec mon entourage liés à la maladie de ma|mon proche**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin de **pouvoir confier ma|mon proche à une autre personne ou à une institution pour avoir du temps pour moi**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin de **trouver une solution au cas où je ne pourrais momentanément plus m’occuper de mon proche malade**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin de **solutions pour réduire ou arrêter rapidement l’accompagnement car je suis épuisé∙e**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin qu’**une personne me décharge des soins à donner à ma|mon proche malade**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin qu’**une personne me décharge de tâches pratiques**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour veiller à la sécurité de ma|mon proche malade**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide financière**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**aide pour équilibrer mon budget en tenant compte de mes contraintes**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin de **conseils pour gérer les questions légales liées à la maladie de ma|mon proche**', NULL, NULL, NULL , 3, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé physique**', NULL, NULL, NULL , 4, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé mentale**', NULL, NULL, NULL , 4, 1),
    ('le nom et la phase de sa maladie', NULL, NULL, 1, 1 , 1),
	('la signification des termes médicaux', NULL, NULL, 1, 1 , 1),
	('les causes, les symptômes et l’évolution de sa maladie', NULL, NULL, 1, 1 , 1),
	('où trouver ce type d’information', NULL, NULL, 2, 1 , 1),
	('les connaissances sur les causes et l’évolution', NULL, NULL, 2, 1 , 1),
	('les résultats sur l’efficacité des traitements', NULL, NULL, 2, 1 , 1),
	('qui et quand consulter', NULL, NULL, 3, 1 , 1),
	('comment se déroulent les examens', NULL, NULL, 3, 1 , 1),
	('que veulent dire les résultats', NULL, NULL, 3, 1 , 1),
	('quels comportements adopter', NULL, NULL, 4, 1 , 1),
	('quels facteurs peuvent aggraver les symptômes', NULL, NULL, 4, 1 , 1),
	('quand consulter un∙e professionnel∙le et qui consulter', NULL, NULL, 4, 1 , 1),
	('les médicaments', NULL, NULL, 5, 1 , 1),
	('l’entraînement cognitif', NULL, NULL, 5, 1 , 1),
	('le soutien psychosocial', NULL, NULL, 5, 1 , 1),
	('comment choisir les traitements', NULL, NULL, 5, 1 , 1),
	('les effets positifs et les effets secondaires possibles', NULL, NULL, 6, 1 , 1),
	('quand et combien de temps prendre les médicaments', NULL, NULL, 6, 1 , 1),
	('comment aider ma|mon proche à prendre ses médicaments', NULL, NULL, 6, 1 , 1),
	('qui d’autre que moi pourrait l’aider à prendre ses médicaments', NULL, NULL, 6, 1 , 1),
	('les aides au ménage ou aux soins', NULL, NULL, 7, 1 , 1),
	('les services de transport', NULL, NULL, 7, 1 , 1),
	('les lieux d’accueil de jour ou de nuit', NULL, NULL, 7, 1 , 1),
	('les repas à domicile', NULL, NULL, 7, 1 , 1),
	('le matériel tel que pilulier ou protections en cas d’incontinence', NULL, NULL, 7, 1 , 1),
	('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', NULL, NULL, 7, 1 , 1),
	('contenu et coûts de l’offre, quelle garantie de qualité', NULL, NULL, 7, 1 , 1),
	('écoute et soutien', NULL, NULL, 8, 1 , 1),
	('formation pour gérer la maladie au quotidien', NULL, NULL, 8, 1 , 1),
	('médiation en cas de conflits avec l’entourage', NULL, NULL, 8, 1 , 1),
	('soutien pour prendre des décisions ou du recul, mieux vivre les pertes', NULL, NULL, 8, 1 , 1),
	('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', NULL, NULL, 8, 1 , 1),
	('contenu et coûts de l’offre, quelle garantie de qualité', NULL, NULL, 8, 1 , 1),
	('**EMS** spécialisés ou non dans l’hébergement de personnes avec démence', NULL, NULL, 9, 1 , 1),
	('**Lieux de vie** comme appartement ou colocation protégés', NULL, NULL, 9, 1 , 1),
	('reconnaître et anticiper les situations de tensions dans les interactions, de stress ou d’échec', NULL, NULL, 10, 2 , 1),
	('reconnaître lorsqu’un problème physique (par exemple douleur ou fièvre) augmente les difficultés de ma|mon proche', NULL, NULL, 10, 2 , 1),
	('savoir comment adapter la situation ou réagir lorsque ma|mon proche est en difficulté', NULL, NULL, 10, 2 , 1),
	('reconnaître quand elle|il a besoin d’aide par exemple pour se préparer un repas, choisir ses vêtements, s’habiller, se brosser les dents, aller aux WC', NULL, NULL, 11, 2 , 1),
	('savoir comment faire pour l’aider de manière respectueuse et efficace, tout en lui laissant autant d’autonomie que possible', NULL, NULL, 11, 2 , 1),
	('reconnaître une crise et savoir comment réagir', NULL, NULL, 12, 2 , 1),
	('savoir quand contacter un∙e professionnel∙le de santé et lequel', NULL, NULL, 12, 2 , 1),
	('savoir comment demander de l’aide', NULL, NULL, 12, 2 , 1),
	('obtenir une procuration pour la prise de décision médicale', NULL, NULL, 13, 2 , 1),
	('savoir ce qui est important pour ma|mon proche dans ce domaine', NULL, NULL, 13, 2 , 1),
	('pouvoir m’impliquer dans les décisions qui concernent ma|mon proche malade et faire entendre mon avis', NULL, NULL, 13, 2 , 1),
	('concernant les comportement difficiles comme l’agressivité, l’agitation, les refus d’être aidé∙e, la perte d’intérêt, les moments de confusion', NULL, NULL, 14, 2 , 1),
	('concernant les émotions difficiles comme les changements brusques d’humeur, les moments d’angoisse ou de désespoir', NULL, NULL, 14, 2 , 1),
	('concernant les tensions dues aux difficultés à se comprendre', NULL, NULL, 14, 2 , 1),
	('concernant les occupations qui fassent plaisir sans mettre en échec ou en stress', NULL, NULL, 14, 2 , 1),
	('pouvoir gérer mes émotions négatives ou douloureuses liées aux difficultés de ma|mon proche', NULL, NULL, 15, 2 , 1),
	('pouvoir reconnaître mes besoins et mes limites, en trouvant des moyens pour les respecter', NULL, NULL, 15, 2 , 1),
	('savoir rechercher de l’aide autour de moi et pouvoir l’accepter', NULL, NULL, 15, 2 , 1),
	('savoir me préparer aux changements', NULL, NULL, 15, 2 , 1),
	('pouvoir m’accorder des temps de pause pour me ressourcer', NULL, NULL, 15, 2 , 1),
	('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend ce que je ressens en voyant que ma|mon proche perd ses capacités, me semble étranger∙ère, est dépendant∙e de moi…', NULL, NULL, 16, 3 , 1),
	('être guidé∙e pour comprendre ce qui est difficile pour moi', NULL, NULL, 16, 3 , 1),
	('recevoir des conseils pour vivre au mieux ce processus de deuil', NULL, NULL, 16, 3 , 1),
	('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend que je peux me sentir par exemple prisonnier∙ère, isolé∙e, ou non reconnu∙e dans mon rôle de proche aidant∙e', NULL, NULL, 17, 3 , 1),
	('être guidé∙e pour comprendre ce qui me fait souffrir', NULL, NULL, 17, 3 , 1),
	('recevoir des conseils sur comment faire pour souffrir moins', NULL, NULL, 17, 3 , 1),
	('pour me sentir moins surchargé∙e, en train de perdre le contrôle de ma vie ou à bout de nerfs', NULL, NULL, 18, 3 , 1),
	('pour être moins tiraillé∙e entre mes diverses responsabilités', NULL, NULL, 18, 3 , 1),
	('pour que mes compétences dans l’aide apportée soient plus reconnues', NULL, NULL, 19, 3 , 1),
	('pour que ce que je fais pour elle|lui soit plus apprécié ou que je sois plus encouragée', NULL, NULL, 19, 3 , 1),
	('pour pouvoir reconnaître les signes de valorisation et de reconnaissance lorsque mon entourage me les donne', NULL, NULL, 19, 3 , 1),
	('pouvoir parler de ma situation avec d’autres proches aidant∙e∙s', NULL, NULL, 20, 3 , 1),
	('pouvoir faire partie d’un groupe de personnes vivant des situations similaires', NULL, NULL, 20, 3 , 1),
	('pouvoir faire profiter d’autres proches aidant∙e∙s de mes expériences et compétences', NULL, NULL, 20, 3 , 1),
	('savoir qui dans mon entourage pourrait m’offrir de la présence', NULL, NULL, 21, 3 , 1),
	('savoir qui dans mon entourage pourrait m’offrir de l’écoute et de la compréhension', NULL, NULL, 21, 3 , 1),
	('savoir qui dans mon entourage pourrait m’offrir de l’aide pratique', NULL, NULL, 21, 3 , 1),
	('pouvoir demander la présence ou le soutien dont j’ai besoin à une personne de mon entourage', NULL, NULL, 21, 3 , 1),
	('pouvoir remercier pour la présence ou le soutien apporté', NULL, NULL, 21, 3 , 1),
	('comprendre les sources de conflits ou de tensions', NULL, NULL, 22, 3 , 1),
	('pouvoir parler avec mon entourage de manière constructive de la maladie et de ses effets', NULL, NULL, 22, 3 , 1),
	('pouvoir expliquer comment s’y prendre face aux difficultés de ma|mon proche malade', NULL, NULL, 22, 3 , 1),
	('pouvoir parler avec mon entourage de manière constructive de ce que je fais comme proche aidant∙e', NULL, NULL, 22, 3 , 1),
	('pouvoir dire ouvertement à mon entourage mes besoins de soutien', NULL, NULL, 22, 3 , 1),
	('pour quelques heures', NULL, NULL, 23, 3 , 1),
	('pour un ou plusieurs jours chaque semaine', NULL, NULL, 23, 3 , 1),
	('pour une ou plusieurs semaines', NULL, NULL, 23, 3 , 1),
	('savoir qui contacter et comment procéder', NULL, NULL, 24, 3 , 1),
	('pouvoir choisir où et comment mon proche malade sera pris en charge', NULL, NULL, 24, 3 , 1),
	('comment procéder', NULL, NULL, 25, 3 , 1),
	('ce que ceci impliquerait financièrement ou pratiquement', NULL, NULL, 25, 3 , 1),
	('pouvoir décider selon ce qui est important pour moi, comme la proximité ou le type d’institution', NULL, NULL, 25, 3 , 1),
	('pour des soins physiquement difficiles ou que je trouve désagréables', NULL, NULL, 26, 3 , 1),
	('pour l’hygiène de ma|mon proche', NULL, NULL, 26, 3 , 1),
	('pour la prise de ses médicaments', NULL, NULL, 26, 3 , 1),
	('la gestion et la coordination de la prise en charge de ma|mon proche malade', NULL, NULL, 27, 3 , 1),
	('le ménage, les courses, la lessive, ou le repassage', NULL, NULL, 27, 3 , 1),
	('les repas', NULL, NULL, 27, 3 , 1),
	('le jardin, de l’entretien de la maison ou des animaux domestiques', NULL, NULL, 27, 3 , 1),
	('le transport de ma|mon proche malade', NULL, NULL, 27, 3 , 1),
	('les affaires administratives ou les finances de ma|mon proche malade', NULL, NULL, 27, 3 , 1),
	('éviter qu‘elle|il quitte son domicile et se perde', NULL, NULL, 28, 3 , 1),
	('adapter son domicile pour éviter qu’elle|il tombe, se mette en danger ou cause des dégâts', NULL, NULL, 28, 3 , 1),
	('veiller à ce que qu’elle|il mange et boive assez et de manière équilibrée', NULL, NULL, 28, 3 , 1),
	('pouvoir bénéficier d’un dédommagement financier', NULL, NULL, 29, 3 , 1),
	('pouvoir bénéficier de services à un prix adapté à mes ressources', NULL, NULL, 29, 3 , 1),
	('pouvoir bénéficier d’un remboursement satisfaisant des prestations', NULL, NULL, 29, 3 , 1),
	('pour adapter mon budget à ma situation actuelle, par exemple à la réduction de mon taux de travail ou aux dépenses liées à la maladie', NULL, NULL, 30, 3 , 1),
	('pour savoir comment gérer les dépenses imprévues créées par ma|mon proche malade par exemple lorsqu’elle ou il perd de l’argent ou cause des dégâts', NULL, NULL, 30, 3 , 1),
	('pour gérer les contrats signés par ma|mon proche', NULL, NULL, 31, 3 , 1),
	('pour protéger ma|mon proche si elle|il ne connaît plus la valeur de l’argent et dépense trop', NULL, NULL, 31, 3 , 1),
	('pour connaître les droits et obligations de ma|mon proche concernant le retrait de son permis de conduire', NULL, NULL, 31, 3 , 1),
	('pour être désigné∙e représentant∙e (administratif, thérapeutique…)', NULL, NULL, 31, 3 , 1),
	('pour connaître les droits et obligations de ma|mon proche et de ses proches après l’entrée en EMS', NULL, NULL, 31, 3 , 1),
	('pouvoir faire les examens nécessaires concernant mes problèmes de santé physique', NULL, NULL, 32, 4 , 1),
	('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', NULL, NULL, 32, 4 , 1),
	('pouvoir faire les évaluations nécessaires concernant mes problèmes de santé mentale tels que dépression, envie de me faire du mal, épuisement, angoisses envahissantes ou irritabilité extrême', NULL, NULL, 33, 4 , 1),
	('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', NULL, NULL, 33, 4 , 1);


INSERT INTO resources (name, url) VALUES
('test1', 'https://www.postgresql.org/docs/14/dml-insert.html'),
('test2', 'https://www.postgresql.org/docs/current/sql-altertable.html'),
('test3', 'https://www.w3schools.com/sql/sql_ref_foreign_key.asp');


INSERT INTO pathology (name) VALUES
('demence'),
('pathology2'),
('pathology3');

INSERT INTO answers (label, lang_id) VALUES
('essentiel', 1),
('important', 1),
('un peu important', 1),
('pas du tout important', 1),
('besoin déjà rempli', 1),
('pas concercé.e', 1),
('oui', 1),
('non', 1);