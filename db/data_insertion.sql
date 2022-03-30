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
('fr'),
('en'),
('de'),
('it');

INSERT INTO question_category (label, lang_id, question_category_color_set) VALUES
('Besoin d’informations', 1, 'red'),
('Besoin de développer mes compétences', 1, 'yellow'),
('Besoin de soutien', 1, 'green'),
('Besoin de prendre soin de ma santé', 1, 'blue'),
('Besoin d’informations sur la maladie de ma|mon proche', 1, NULL),
('Besoin d’informations sur le traitement de ma|mon proche', 1, NULL),
('Besoin d’informations sur les offres de soutien à disposition', 1, NULL),
('Besoin de développer mes compétences pour mieux aider ma|mon proche malade', 1, NULL),
('Besoin de développer mes compétences pour aider sans m’épuiser', 1, NULL),
('Besoin de soutien émotionnel et psychologique pour mes émotions difficiles', 1, NULL),
('Besoin de soutien émotionnel et psychologique pour mieux assumer le rôle d’aidant∙e', 1, NULL),
('Besoin de soutien pour avoir plus d’aide ou de contact avec la famille et des ami∙e∙s', 1, NULL),
('Besoin de répit, de temps pour soi-même ou d’être déchargé∙e d’une partie du soutien à ma|mon proche malade', 1, NULL),
('Besoin de soutien pratique', 1, NULL),
('Besoin de soutien pour des aspects financiers ou juridiques', 1, NULL),
('Ma santé physique', 1, NULL),
('Ma santé mentale', 1, NULL),
('Bedürfnis nach informationen', 3, 'red'),
('Bedürfnis, meine Fähigkeiten weiter zu entwickeln', 3, 'yellow'),
('Bedürfnis nach Unterstützung', 3, 'green'),
('Bedürfnis, mich um meine Gesundheit kümmern', 3, 'blue'),
('Bedürfnis nach Informationen über die Krankheit meines|r Angehörigen', 3, NULL),
('Bedürfnis nach Informationen über die Behandlung meines|r Angehörigen', 3, NULL),
('Bedürfnis nach Informationen zu vorhandenen Unterstützungsangeboten', 3, NULL),
('Bedürfnis, meine Fähigkeiten weiterzuentwickeln, um meinem|r erkrankten Angehörigen besser zu helfen', 3, NULL),
('Bedürfnis, meine Fähigkeiten weiterzuentwickeln, um helfen zu können, ohne zu erschöpfen', 3, NULL),
('Bedürfnis nach emotionaler und psychologischer Unterstützung für meine schwierigen Emotionen', 3, NULL),
('Bedürfnis nach emotionaler und psychologischer Unterstützung: die Rolle als betreuende∙r Angehörige∙r besser ausüben können', 3, NULL),
('Bedürfnis nach Unterstützung, um mehr Hilfe von oder Kontakt mit Familie und Freunden zu haben', 3, NULL),
('Bedürfnis für eine Verschnaufpause, Zeit für sich selber oder für Entlastung in Bezug auf die Unterstützung meines|r erkrankten Angehörigen', 3, NULL),
('Bedürfnis nach Unterstützung in Bezug auf praktische Aspekte', 3, NULL),
('Bedürfnis nach Unterstützung für finanzielle oder rechtliche Aspekte', 3, NULL),
('Meine körperliche Gesundheit', 3, NULL),
('Meine psychische Gesundheit', 3, NULL);


INSERT INTO resources (name, url) VALUES
('test1', 'https://www.postgresql.org/docs/14/dml-insert.html'),
('test2', 'https://www.postgresql.org/docs/current/sql-altertable.html'),
('test3', 'https://www.w3schools.com/sql/sql_ref_foreign_key.asp');


INSERT INTO pathology (name) VALUES
('demence'),
('pathology2'),
('pathology3');

INSERT INTO questions (question, question_set, generation, parent_question_id, category_id, sub_category_id, lang_id) VALUES
('Actuellement j’ai besoin d’informations sur **le diagnostic précis ou sur la maladie**', 1, NULL, NULL, 1, 5 , 1),
('Actuellement j’ai besoin d’informations sur **les connaissances scientifiques actuelles qui concernent cette maladie**', 2, NULL, NULL , 1, 5 , 1),
('Actuellement j’ai besoin d’informations **sur la procédure de diagnostic**', 3, NULL, NULL , 1, 5 , 1),
('Actuellement j’ai besoin d’informations sur **l’accompagnement d’une personne avec démence**', 4, NULL, NULL , 1, 5 , 1),
('Actuellement j’ai besoin d’informations **sur les traitements possibles** pour sa maladie et **sur comment choisir**', 5, NULL, NULL , 1, 6 , 1),
('Actuellement j’ai besoin d’informations **sur les médicaments** que prend ma|mon proche, et **sur la manière de les prendre**', 6, NULL, NULL , 1, 6 , 1),
('Actuellement j’ai besoin d’informations **sur les services et les organisations qui peuvent me décharger dans l’accompagnement ou les soins à ma|mon proche et sur comment obtenir ces décharges**', 7, NULL, NULL , 1, 7 , 1),
('Actuellement j’ai besoin de plus d’informations **sur les services et les organisations qui peuvent me soutenir en tant que proche aidant∙e et sur comment obtenir ces soutiens**', 8, NULL, NULL , 1, 7 , 1),
('Actuellement j’ai besoin d’informations **sur les lieux de vie à long terme pour personnes avec démence**', 9, NULL, NULL , 1, 7 , 1),
('Actuellement j’ai besoin de savoir **reconnaître les problèmes de mémoire de ma|mon proche et ce qui peut les aggraver, pour anticiper et gérer les situations qui peuvent la|le mettre en difficulté**', 10, NULL, NULL , 2, 8, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche à gérer seul∙e ses activités quotidiennes**', 11, NULL, NULL , 2, 8, 1),
('Actuellement j’ai besoin de savoir **reconnaître les situations de crise** (changements soudains chez ma|mon proche malade qui peuvent indiquer un problème sérieux), **et savoir comment les gérer en impliquant les services de santé**', 12, NULL, NULL , 2, 8, 1),
('Actuellement j’ai besoin de savoir **défendre les intérêts de ma|mon proche malade face au réseau de prise en charge**', 13, NULL, NULL , 2, 8, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche liées à sa maladie** (comportements ou émotions, communication, occupations) **et de pouvoir les expliquer à mon entourage**', 14, NULL, NULL , 2, 8, 1),
('Actuellement j’ai besoin d’**apprendre à aider tout en prenant soin de moi**', 15, NULL, NULL , 2, 9, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec les pertes dues à la maladie de ma|mon proche et le processus de deuil associé**', 16, NULL, NULL , 3, 10, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec mon rôle de proche aidant∙e**', 17, NULL, NULL , 3, 10, 1),
('Actuellement j’ai besoin d’**aide pour trouver rapidement des solutions pour me sentir moins épuisé∙e**', 18, NULL, NULL , 3, 11, 1),
('Actuellement j’ai besoin d’**aide pour me sentir plus valorisé∙e dans mon rôle de proche aidant∙e**', 19, NULL, NULL , 3, 11, 1),
('Actuellement j’ai besoin d’**échanges et de partages avec des personnes vivant une situation similaire**', 20, NULL, NULL , 3, 11, 1),
('Actuellement j’ai besoin d’**aide pour obtenir plus de présence et de soutien – émotionnel ou pratique – de mon entourage**', 21, NULL, NULL , 3, 12, 1),
('Actuellement j’ai besoin d’**aide pour réduire les conflits ou les tensions avec mon entourage liés à la maladie de ma|mon proche**', 22, NULL, NULL , 3, 12, 1),
('Actuellement j’ai besoin de **pouvoir confier ma|mon proche à une autre personne ou à une institution pour avoir du temps pour moi**', 23, NULL, NULL , 3, 13, 1),
('Actuellement j’ai besoin de **trouver une solution au cas où je ne pourrais momentanément plus m’occuper de mon proche malade**', 24, NULL, NULL , 3, 13, 1),
('Actuellement j’ai besoin de **solutions pour réduire ou arrêter rapidement l’accompagnement car je suis épuisé∙e**', 25, NULL, NULL , 3, 13, 1),
('Actuellement j’ai besoin qu’**une personne me décharge des soins à donner à ma|mon proche malade**', 26, NULL, NULL , 3, 13, 1),
('Actuellement j’ai besoin qu’**une personne me décharge de tâches pratiques**', 27, NULL, NULL , 3, 14, 1),
('Actuellement j’ai besoin d’**aide pour veiller à la sécurité de ma|mon proche malade**', 28, NULL, NULL , 3, 14, 1),
('Actuellement j’ai besoin d’**aide financière**', 29, NULL, NULL , 3, 15, 1),
('Actuellement j’ai besoin d’**aide pour équilibrer mon budget en tenant compte de mes contraintes**', 30, NULL, NULL , 3, 15, 1),
('Actuellement j’ai besoin de **conseils pour gérer les questions légales liées à la maladie de ma|mon proche**', 31, NULL, NULL , 3, 15, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé physique**', 32, NULL, NULL , 4, 16, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé mentale**', 33, NULL, NULL , 4, 17, 1),
('le nom et la phase de sa maladie', NULL, NULL, 1, 1, null, 1),
('la signification des termes médicaux', NULL, NULL, 1, 1, null , 1),
('les causes, les symptômes et l’évolution de sa maladie', NULL, NULL, 1, 1, null , 1),
('où trouver ce type d’information', NULL, NULL, 2, 1, null , 1),
('les connaissances sur les causes et l’évolution', NULL, NULL, 2, 1, null , 1),
('les résultats sur l’efficacité des traitements', NULL, NULL, 2, 1, null , 1),
('qui et quand consulter', NULL, NULL, 3, 1, null , 1),
('comment se déroulent les examens', NULL, NULL, 3, 1, null , 1),
('que veulent dire les résultats', NULL, NULL, 3, 1, null , 1),
('quels comportements adopter', NULL, NULL, 4, 1, null , 1),
('quels facteurs peuvent aggraver les symptômes', NULL, NULL, 4, 1, null , 1),
('quand consulter un∙e professionnel∙le et qui consulter', NULL, NULL, 4, 1, null , 1),
('les médicaments', NULL, NULL, 5, 1, null , 1),
('l’entraînement cognitif', NULL, NULL, 5, 1, null , 1),
('le soutien psychosocial', NULL, NULL, 5, 1, null , 1),
('comment choisir les traitements', NULL, NULL, 5, 1, null , 1),
('les effets positifs et les effets secondaires possibles', NULL, NULL, 6, 1, null , 1),
('quand et combien de temps prendre les médicaments', NULL, NULL, 6, 1, null , 1),
('comment aider ma|mon proche à prendre ses médicaments', NULL, NULL, 6, 1, null , 1),
('qui d’autre que moi pourrait l’aider à prendre ses médicaments', NULL, NULL, 6, 1, null , 1),
('les aides au ménage ou aux soins', NULL, NULL, 7, 1, null , 1),
('les services de transport', NULL, NULL, 7, 1, null , 1),
('les lieux d’accueil de jour ou de nuit', NULL, NULL, 7, 1, null , 1),
('les repas à domicile', NULL, NULL, 7, 1, null , 1),
('le matériel tel que pilulier ou protections en cas d’incontinence', NULL, NULL, 7, 1, null , 1),
('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', NULL, NULL, 7, 1, null , 1),
('contenu et coûts de l’offre, quelle garantie de qualité', NULL, NULL, 7, 1, null , 1),
('écoute et soutien', NULL, NULL, 8, 1, null , 1),
('formation pour gérer la maladie au quotidien', NULL, NULL, 8, 1, null , 1),
('médiation en cas de conflits avec l’entourage', NULL, NULL, 8, 1, null , 1),
('soutien pour prendre des décisions ou du recul, mieux vivre les pertes', NULL, NULL, 8, 1, null , 1),
('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', NULL, NULL, 8, 1, null , 1),
('contenu et coûts de l’offre, quelle garantie de qualité', NULL, NULL, 8, 1, null , 1),
('**EMS** spécialisés ou non dans l’hébergement de personnes avec démence', NULL, NULL, 9, 1, null , 1),
('**Lieux de vie** comme appartement ou colocation protégés', NULL, NULL, 9, 1, null , 1),
('reconnaître et anticiper les situations de tensions dans les interactions, de stress ou d’échec', NULL, NULL, 10, 2, null , 1),
('reconnaître lorsqu’un problème physique (par exemple douleur ou fièvre) augmente les difficultés de ma|mon proche', NULL, NULL, 10, 2, null , 1),
('savoir comment adapter la situation ou réagir lorsque ma|mon proche est en difficulté', NULL, NULL, 10, 2, null , 1),
('reconnaître quand elle|il a besoin d’aide par exemple pour se préparer un repas, choisir ses vêtements, s’habiller, se brosser les dents, aller aux WC', NULL, NULL, 11, 2, null , 1),
('savoir comment faire pour l’aider de manière respectueuse et efficace, tout en lui laissant autant d’autonomie que possible', NULL, NULL, 11, 2, null , 1),
('reconnaître une crise et savoir comment réagir', NULL, NULL, 12, 2, null , 1),
('savoir quand contacter un∙e professionnel∙le de santé et lequel', NULL, NULL, 12, 2, null , 1),
('savoir comment demander de l’aide', NULL, NULL, 12, 2, null , 1),
('obtenir une procuration pour la prise de décision médicale', NULL, NULL, 13, 2, null , 1),
('savoir ce qui est important pour ma|mon proche dans ce domaine', NULL, NULL, 13, 2, null , 1),
('pouvoir m’impliquer dans les décisions qui concernent ma|mon proche malade et faire entendre mon avis', NULL, NULL, 13, 2, null , 1),
('concernant les comportement difficiles comme l’agressivité, l’agitation, les refus d’être aidé∙e, la perte d’intérêt, les moments de confusion', NULL, NULL, 14, 2, null , 1),
('concernant les émotions difficiles comme les changements brusques d’humeur, les moments d’angoisse ou de désespoir', NULL, NULL, 14, 2, null , 1),
('concernant les tensions dues aux difficultés à se comprendre', NULL, NULL, 14, 2, null , 1),
('concernant les occupations qui fassent plaisir sans mettre en échec ou en stress', NULL, NULL, 14, 2, null , 1),
('pouvoir gérer mes émotions négatives ou douloureuses liées aux difficultés de ma|mon proche', NULL, NULL, 15, 2, null , 1),
('pouvoir reconnaître mes besoins et mes limites, en trouvant des moyens pour les respecter', NULL, NULL, 15, 2, null , 1),
('savoir rechercher de l’aide autour de moi et pouvoir l’accepter', NULL, NULL, 15, 2, null , 1),
('savoir me préparer aux changements', NULL, NULL, 15, 2, null , 1),
('pouvoir m’accorder des temps de pause pour me ressourcer', NULL, NULL, 15, 2, null , 1),
('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend ce que je ressens en voyant que ma|mon proche perd ses capacités, me semble étranger∙ère, est dépendant∙e de moi…', NULL, NULL, 16, 3, null , 1),
('être guidé∙e pour comprendre ce qui est difficile pour moi', NULL, NULL, 16, 3, null , 1),
('recevoir des conseils pour vivre au mieux ce processus de deuil', NULL, NULL, 16, 3, null, 1),
('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend que je peux me sentir par exemple prisonnier∙ère, isolé∙e, ou non reconnu∙e dans mon rôle de proche aidant∙e', NULL, NULL, 17, 3, null , 1),
('être guidé∙e pour comprendre ce qui me fait souffrir', NULL, NULL, 17, 3, null , 1),
('recevoir des conseils sur comment faire pour souffrir moins', NULL, NULL, 17, 3, null , 1),
('pour me sentir moins surchargé∙e, en train de perdre le contrôle de ma vie ou à bout de nerfs', NULL, NULL, 18, 3, null , 1),
('pour être moins tiraillé∙e entre mes diverses responsabilités', NULL, NULL, 18, 3, null , 1),
('pour que mes compétences dans l’aide apportée soient plus reconnues', NULL, NULL, 19, 3, null , 1),
('pour que ce que je fais pour elle|lui soit plus apprécié ou que je sois plus encouragée', NULL, NULL, 19, 3, null , 1),
('pour pouvoir reconnaître les signes de valorisation et de reconnaissance lorsque mon entourage me les donne', NULL, NULL, 19, 3, null , 1),
('pouvoir parler de ma situation avec d’autres proches aidant∙e∙s', NULL, NULL, 20, 3, null , 1),
('pouvoir faire partie d’un groupe de personnes vivant des situations similaires', NULL, NULL, 20, 3, null , 1),
('pouvoir faire profiter d’autres proches aidant∙e∙s de mes expériences et compétences', NULL, NULL, 20, 3, null , 1),
('savoir qui dans mon entourage pourrait m’offrir de la présence', NULL, NULL, 21, 3, null , 1),
('savoir qui dans mon entourage pourrait m’offrir de l’écoute et de la compréhension', NULL, NULL, 21, 3, null , 1),
('savoir qui dans mon entourage pourrait m’offrir de l’aide pratique', NULL, NULL, 21, 3, null , 1),
('pouvoir demander la présence ou le soutien dont j’ai besoin à une personne de mon entourage', NULL, NULL, 21, 3, null , 1),
('pouvoir remercier pour la présence ou le soutien apporté', NULL, NULL, 21, 3, null , 1),
('comprendre les sources de conflits ou de tensions', NULL, NULL, 22, 3, null , 1),
('pouvoir parler avec mon entourage de manière constructive de la maladie et de ses effets', NULL, NULL, 22, 3, null , 1),
('pouvoir expliquer comment s’y prendre face aux difficultés de ma|mon proche malade', NULL, NULL, 22, 3, null , 1),
('pouvoir parler avec mon entourage de manière constructive de ce que je fais comme proche aidant∙e', NULL, NULL, 22, 3, null , 1),
('pouvoir dire ouvertement à mon entourage mes besoins de soutien', NULL, NULL, 22, 3, null , 1),
('pour quelques heures', NULL, NULL, 23, 3, null , 1),
('pour un ou plusieurs jours chaque semaine', NULL, NULL, 23, 3, null , 1),
('pour une ou plusieurs semaines', NULL, NULL, 23, 3, null , 1),
('savoir qui contacter et comment procéder', NULL, NULL, 24, 3, null , 1),
('pouvoir choisir où et comment mon proche malade sera pris en charge', NULL, NULL, 24, 3, null , 1),
('comment procéder', NULL, NULL, 25, 3, null , 1),
('ce que ceci impliquerait financièrement ou pratiquement', NULL, NULL, 25, 3, null , 1),
('pouvoir décider selon ce qui est important pour moi, comme la proximité ou le type d’institution', NULL, NULL, 25, 3, null , 1),
('pour des soins physiquement difficiles ou que je trouve désagréables', NULL, NULL, 26, 3, null , 1),
('pour l’hygiène de ma|mon proche', NULL, NULL, 26, 3, null , 1),
('pour la prise de ses médicaments', NULL, NULL, 26, 3, null , 1),
('la gestion et la coordination de la prise en charge de ma|mon proche malade', NULL, NULL, 27, 3, null , 1),
('le ménage, les courses, la lessive, ou le repassage', NULL, NULL, 27, 3, null , 1),
('les repas', NULL, NULL, 27, 3, null , 1),
('le jardin, de l’entretien de la maison ou des animaux domestiques', NULL, NULL, 27, 3, null , 1),
('le transport de ma|mon proche malade', NULL, NULL, 27, 3, null , 1),
('les affaires administratives ou les finances de ma|mon proche malade', NULL, NULL, 27, 3, null , 1),
('éviter qu‘elle|il quitte son domicile et se perde', NULL, NULL, 28, 3, null , 1),
('adapter son domicile pour éviter qu’elle|il tombe, se mette en danger ou cause des dégâts', NULL, NULL, 28, 3, null , 1),
('veiller à ce que qu’elle|il mange et boive assez et de manière équilibrée', NULL, NULL, 28, 3, null , 1),
('pouvoir bénéficier d’un dédommagement financier', NULL, NULL, 29, 3, null , 1),
('pouvoir bénéficier de services à un prix adapté à mes ressources', NULL, NULL, 29, 3, null , 1),
('pouvoir bénéficier d’un remboursement satisfaisant des prestations', NULL, NULL, 29, 3, null , 1),
('pour adapter mon budget à ma situation actuelle, par exemple à la réduction de mon taux de travail ou aux dépenses liées à la maladie', NULL, NULL, 30, 3, null , 1),
('pour savoir comment gérer les dépenses imprévues créées par ma|mon proche malade par exemple lorsqu’elle ou il perd de l’argent ou cause des dégâts', NULL, NULL, 30, 3, null , 1),
('pour gérer les contrats signés par ma|mon proche', NULL, NULL, 31, 3, null , 1),
('pour protéger ma|mon proche si elle|il ne connaît plus la valeur de l’argent et dépense trop', NULL, NULL, 31, 3, null , 1),
('pour connaître les droits et obligations de ma|mon proche concernant le retrait de son permis de conduire', NULL, NULL, 31, 3, null , 1),
('pour être désigné∙e représentant∙e (administratif, thérapeutique…)', NULL, NULL, 31, 3, null , 1),
('pour connaître les droits et obligations de ma|mon proche et de ses proches après l’entrée en EMS', NULL, NULL, 31, 3, null , 1),
('pouvoir faire les examens nécessaires concernant mes problèmes de santé physique', NULL, NULL, 32, 4, null , 1),
('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', NULL, NULL, 32, 4, null , 1),
('pouvoir faire les évaluations nécessaires concernant mes problèmes de santé mentale tels que dépression, envie de me faire du mal, épuisement, angoisses envahissantes ou irritabilité extrême', NULL, NULL, 33, 4, null , 1),
('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', NULL, NULL, 33, 4, null , 1),
('Im Moment brauche ich Informationen über die genaue Diagnose oder die Krankheit', 1, NULL, NULL , 18, 22 , 3),
('Im Moment brauche ich Informationen über **die aktuellen wissenschaftlichen Erkenntnisse über die Krankheit**', 2, NULL, NULL , 18, 22 , 3),
('Im Moment brauche ich Informationen über **das Diagnoseverfahren**', 3, NULL, NULL , 18, 22 , 3),
('Im Moment brauche ich Informationen über **die Betreuung einer Person mit Demenz**', 4, NULL, NULL , 18, 22 , 3),
('Im Moment brauche ich Informationen über **die Behandlungsmöglichkeiten** der Krankheit meiner angehörigen Person und dazu **wie man diese auswählt**', 5, NULL, NULL , 18, 23 , 3),
('Im Moment brauche ich Informationen **über die Medikamente**, die meine angehörige Person einnimmt und dazu, **wie sie diese einnehmen soll**', 6, NULL, NULL , 18, 23 , 3),
('Im Moment brauche ich Informationen über Dienste und Organisationen, die mich von der Betreuung oder Pflege meiner angehörigen Person entlasten können und darüber, wie ich diese Entlastung erhalten kann', 7, NULL, NULL , 18, 24 , 3),
('Im Moment brauche ich mehr Informationen über Dienste und Organisationen, die mich als betreuende∙r Angehörige∙r unterstützen können, und wie ich diese Unterstützung erhalten kann', 8, NULL, NULL , 18, 24 , 3),
('Im Moment brauche ich Informationen über Lebensorte für Menschen mit Demenz für eine Langzeitbetreuung', 9, NULL, NULL , 18, 24 , 3),
('Im Moment muss ich wissen, wie Gedächtnisprobleme bei meiner angehörigen Person erkannt werden können. Ich muss wissen, was diese verschlimmern kann, um Situationen, die ihr|ihm Schwierigkeiten bereiten, vorbeugen und bewältigen zu können.*', 10, NULL, NULL , 19, 25, 3),
('Im Moment muss ich wissen, wie die Schwierigkeiten meines|r Angehörigen bei täglichen Aktivitäten erkannt, vorausgesehen und bewältigt werden können', 11, NULL, NULL , 19, 25, 3),
('Im Moment muss ich wissen, wie Krisensituationen erkannt (plötzliche Veränderungen bei meiner erkrankten angehörigen Person, die auf ein ernsthaftes Problem hinweisen können) und bewältigt werden können mit Unterstützung von Gesundheitsdiensten', 12, NULL, NULL , 19, 25, 3),
('Im Moment muss ich wissen, wie ich für die Interessen meines|r erkrankten Angehörigen einstehen kann im Versorgungsnetz', 13, NULL, NULL , 19, 25, 3),
('Im Moment muss ich wissen, wie Schwierigkeiten meiner angehörigen Person im Zusammenhang mit der Krankheit erkannt, vorausgesehen und bewältigt werden können (Verhaltensauffälligkeiten oder Emotionen, Kommunikation, Beschäftigung) und wie diese dem Umfeld erklärt werden können', 14, NULL, NULL , 19, 25, 3),
('Im Moment möchte ich lernen, wie ich helfen kann und gleichzeitig zu mir selber Sorge tragen kann', 15, NULL, NULL , 19, 26, 3),
('Im Moment brauche ich jemand der zuhört, Verständnis und Beratung für die schwierigen Emotionen, die ich im Zusammenhang mit den krankheitsbedingten Verlusten meines|r Angehörigen und dem damit verbundenen Trauerprozess empfinde', 16, NULL, NULL , 20, 27, 3),
('Im Moment brauche ich jemand der zuhört, Verständnis und Beratung für die schwierigen Emotionen, die ich in meiner Rolle als betreuende∙r Angehörige∙r empfinde', 17, NULL, NULL , 20, 27, 3),
('Im Moment brauche Hilfe, um schnell Lösungen zu finden, damit ich mich weniger erschöpft fühle', 18, NULL, NULL , 20, 28, 3),
('Im Moment brauche ich Hilfe, um mich in meiner Rolle als betreuende∙r Angehörige∙r mehr wertgeschätzt zu fühlen', 19, NULL, NULL , 20, 28, 3),
('Im Moment brauche ich einen Austausch mit Personen, die eine ähnliche Situation erleben', 20, NULL, NULL , 20, 28, 3),
('Im Moment brauche ich Hilfe, damit mein Umfeld mehr präsent ist und mich emotional oder praktisch unterstützt', 21, NULL, NULL , 20, 29, 3),
('Im Moment brauche ich Hilfe, um Konflikte oder Spannungen, die im Zusammenhang stehen mit der Krankheit meiner angehörigen Person, in meinem Umfeld zu reduzieren', 22, NULL, NULL , 20, 29, 3),
('Im Moment brauche ich eine Möglichkeit, meine angehörige Person einer anderen Person oder einer Institution anvertrauen zu können, um Zeit für mich zu haben', 23, NULL, NULL , 20, 30, 3),
('Im Moment brauche ich eine Lösung für den Fall, wenn ich mich vorübergehend nicht mehr um meine∙n erkrankte∙n Angehörige∙n kümmern kann', 24, NULL, NULL , 20, 30, 3),
('Im Moment brauche ich Lösungen, um die Betreuung schnell zu reduzieren oder zu beenden, da ich erschöpft bin', 25, NULL, NULL , 20, 30, 3),
('Im Moment brauche ich jemanden, der die Pflege meines|r erkrankten Angehörigen übernimmt', 26, NULL, NULL , 20, 30, 3),
('Im Moment brauche ich jemandem, der praktische Aufgaben übernimmt', 27, NULL, NULL , 20, 31, 3),
('Im Moment brauche ich Hilfe, um die Sicherheit meines|r erkrankten Angehörigen zu gewährleisten', 28, NULL, NULL , 20, 31, 3),
('Im Moment brauche ich **finanzielle Unterstützung**', 29, NULL, NULL , 20, 32, 3),
('Im Moment brauche ich Hilfe, um meinen Finanzhaushalt im Gleichgewicht zu halten, im Zusammenhang mit den aktuellen Einschränkungen', 30, NULL, NULL , 20, 32, 3),
('Im Moment brauche ich Beratung, um Rechtsfragen im Zusammenhang mit der Krankheit meines|r Angehörigen zu klären', 31, NULL, NULL , 20, 32, 3),
('Im Moment brauche ich **eine Betreuung in Bezug auf meine körperlichen Gesundheitsprobleme**', 32, NULL, NULL , 21, 33, 3),
('Im Moment brauche ich **eine Betreuung in Bezug auf meine psychischen Probleme**', 33, NULL, NULL , 21, 34, 3),
('den Namen und das Stadium der Krankheit', NULL, NULL, 1, 18, null, 3),
('die Bedeutung von medizinischen Begriffen', NULL, NULL, 1, 18, null , 3),
('Ursachen, Symptome und Verlauf der Krankheit', NULL, NULL, 1, 18, null , 3),
('wo diese Art von Informationen zu finden sind', NULL, NULL, 2, 18, null , 3),
('Kenntnisse über die Ursachen und den Verlauf', NULL, NULL, 2, 18, null , 3),
('Ergebnisse über die Wirksamkeit von Behandlungen', NULL, NULL, 2, 18, null , 3),
('wen und wann konsultieren', NULL, NULL, 3, 18, null , 3),
('wie werden Untersuchungen durchgeführt', NULL, NULL, 3, 18, null , 3),
('was bedeuten die Ergebnisse', NULL, NULL, 3, 18, null , 3),
('wie soll man sich verhalten', NULL, NULL, 4, 18, null , 3),
('welche Faktoren können die Symptome verschlimmern', NULL, NULL, 4, 18, null , 3),
('wann sollte welche Fachperson konsultiert werden', NULL, NULL, 4, 18, null , 3),
('Medikamente', NULL, NULL, 5, 18, null , 3),
('kognitives Training', NULL, NULL, 5, 18, null , 3),
('psychosoziale Unterstützung', NULL, NULL, 5, 18, null , 3),
('Behandlungsmöglichkeiten auswählen', NULL, NULL, 5, 18, null , 3),
('positive Wirkung und mögliche Nebenwirkungen', NULL, NULL, 6, 18, null , 3),
('wann und wie lange sollen die Medikamente eingenommen werden', NULL, NULL, 6, 18, null , 3),
('wie kann ich meiner angehörigen Person bei der Einnahme helfen', NULL, NULL, 6, 18, null , 3),
('wer ausser mir könnte ihm|ihr bei der Einnahme der Medikamente helfen', NULL, NULL, 6, 18, null , 3),
('Haushaltshilfe oder Pflegedienste', NULL, NULL, 7, 18, null , 3),
('Transportdienste', NULL, NULL, 7, 18, null , 3),
('Tagesheime oder Nachtbetreuung', NULL, NULL, 7, 18, null , 3),
('Mahlzeitendienst', NULL, NULL, 7, 18, null , 3),
('Hilfsmittel, wie Medikamentendispenser oder Inkontinenzmaterial', NULL, NULL, 7, 18, null , 3),
('an wen kann man sich wenden, wie ist das Vorgehen und welche Bedingungen müssen erfüllt sein', NULL, NULL, 7, 18, null , 3),
('Inhalt und Kosten der Angebote, wie wird die Qualität gewährleistet', NULL, NULL, 7, 18, null , 3),
('Zuhören und Unterstützung', NULL, NULL, 8, 18, null , 3),
('Schulung im Umgang mit der Krankheit im Alltag', NULL, NULL, 8, 18, null , 3),
('Vermittlung bei Konflikten mit meinem Umfeld', NULL, NULL, 8, 18, null , 3),
('Unterstützung bei Entscheidungen, Abstand nehmen oder Bewältigung von Verlusten', NULL, NULL, 8, 18, null , 3),
('an wen kann man sich wenden, wie ist das Vorgehen und welche Bedingungen müssen erfüllt sein', NULL, NULL, 8, 18, null , 3),
('Inhalt und Kosten der Angebote, wie wird die Qualität gewährleistet', NULL, NULL, 8, 18, null , 3),
('auf Demenz spezialisierte oder nicht spezialisierte Pflegeheime', NULL, NULL, 9, 18, null , 3),
('Lebensorte, wie Alterswohnungen oder Alterswohngemeinschaften', NULL, NULL, 9, 18, null , 3),
('Spannungen bei Interaktionen, Stress oder Misserfolge erkennen und vermeiden', NULL, NULL, 10, 19, null , 3),
('erkennen, wenn körperliche Gesundheitsprobleme (z. B. Schmerzen oder Fieber) die Schwierigkeiten meines|r Angehörigen verschlimmern', NULL, NULL, 10, 19, null , 3),
('wissen, wie man Situationen anpassen oder reagieren kann, wenn mein∙e Angehörige∙r in Schwierigkeiten ist', NULL, NULL, 10, 19, null , 3),
('erkennen, wann er|sie Hilfe braucht, z. B. beim Zubereiten von Mahlzeiten, Kleider auswählen, an- oder ausziehen, Zähneputzen, Toilettengang', NULL, NULL, 11, 19, null , 3),
('wissen, wie ich ihn|sie respektvoll und effizient unterstützen kann und ihm|ihr dabei möglichst viel Autonomie belassen kann', NULL, NULL, 11, 19, null , 3),
('eine Krise erkennen und wissen wie man reagieren kann', NULL, NULL, 12, 19, null , 3),
('wissen, wann und welche Fachperson kontaktiert werden soll', NULL, NULL, 12, 19, null , 3),
('wissen, wie man Hilfe anfordern kann', NULL, NULL, 12, 19, null , 3),
('eine Vollmacht für medizinische Entscheidung einholen', NULL, NULL, 13, 19, null , 3),
('wissen, was für meine∙n Angehörige∙n wichtig ist in diesem Bereich', NULL, NULL, 13, 19, null , 3),
('sich bei Entscheidungen beteiligen können, die meine∙n erkrankte∙n Angehörige∙n betreffen und sich Gehör verschaffen', NULL, NULL, 13, 19, null , 3),
('bei schwierigen Verhaltensweisen wie Aggressivität, Unruhe, ablehnendes Verhalten gegenüber Hilfestellungen, Verlust von Interessen oder Verwirrtheit', NULL, NULL, 14, 19, null , 3),
('bei schwierigen Emotionen wie plötzliche Veränderungen der Stimmung, Angst oder Verzweiflung', NULL, NULL, 14, 19, null , 3),
('bei Spannungen aufgrund von Verständnisproblemen', NULL, NULL, 14, 19, null , 3),
('zu Aktivitäten/Beschäftigung, die der angehörigen Person Freude bereiten und keinen Stress oder Gefühle von Misserfolg verursachen', NULL, NULL, 14, 19, null , 3),
('bewältigen von negativen oder schmerzhaften Emotionen im Zusammenhang mit den Schwierigkeiten meiner angehörigen Person', NULL, NULL, 15, 19, null , 3),
('eigene Bedürfnisse und Grenzen erkennen und Wege finden, wie diese respektiert werden können', NULL, NULL, 15, 19, null , 3),
('wissen, wie ich in meinem Umfeld Hilfe finden und diese annehmen kann', NULL, NULL, 15, 19, null , 3),
('wissen, wie ich mich auf Veränderungen vorbereiten kann', NULL, NULL, 15, 19, null , 3),
('mir Zeit für Pausen einräumen, um neue Energie zu tanken', NULL, NULL, 15, 19, null , 3),
('eine Person, dir mir wertfrei und im Vertrauen zuhört, die versteht, wie ich mich fühle, wenn meine angehörige Person Fähigkeiten verliert, sie mir fremd vorkommt und sie von mir abhängig ist …', NULL, NULL, 16, 20, null , 3),
('Unterstützung, um zu verstehen, was für mich schwierig ist', NULL, NULL, 16, 20, null , 3),
('Beratung dazu, wie man den Trauerprozess am besten bewältigen kann', NULL, NULL, 16, 20, null, 3),
('eine Person, dir mir wertfrei und im Vertrauen zuhört, die versteht, wie ich mich fühlen kann, wenn ich mich zum Beispiel gefangen, isoliert oder nicht anerkannt fühle in meiner Rolle als betreuende∙r Angehörige∙r', NULL, NULL, 17, 20, null , 3),
('Unterstützung, um zu verstehen, was mich belastet', NULL, NULL, 17, 20, null , 3),
('Beratung dazu, wie ich es machen kann, um weniger zu leiden', NULL, NULL, 17, 20, null , 3),
('um mich weniger überlastet zu fühlen, weniger das Gefühl zu haben die Kontrolle über mein Leben zu verlieren oder mit den Nerven am Ende zu sein', NULL, NULL, 18, 20, null , 3),
('um weniger hin- und hergerissen zu sein zwischen meinen verschiedenen Verpflichtungen', NULL, NULL, 18, 20, null , 3),
('damit meine Fähigkeiten bezüglich der Unterstützung, die ich leiste, mehr anerkannt werden', NULL, NULL, 19, 20, null , 3),
('damit das, was ich für sie|ihn tue, mehr geschätzt wird oder damit ich mehr ermutigt werde', NULL, NULL, 19, 20, null , 3),
('damit ich erkennen kann, wenn mir mein Umfeld Zeichen von Wertschätzung und Anerkennung entgegenbringt', NULL, NULL, 19, 20, null , 3),
('mit anderen betreuenden Angehörigen über meine Situation sprechen', NULL, NULL, 20, 20, null , 3),
('Teil einer Gruppe sein mit Personen in ähnlichen Situationen', NULL, NULL, 20, 20, null , 3),
('meine Erfahrungen und Fähigkeiten anderen betreuenden Angehörigen weitergeben', NULL, NULL, 20, 20, null , 3),
('wissen, wer aus meinem Umfeld präsent sein könnte', NULL, NULL, 21, 20, null , 3),
('wissen, wer aus meinem Umfeld ein offenes Ohr und Verständnis bieten könnte', NULL, NULL, 21, 20, null , 3),
('wissen, wer aus meinem Umfeld praktische Unterstützung bieten könnte', NULL, NULL, 21, 20, null , 3),
('jemanden aus meinem Umfeld, um die notwendige Präsenz oder Unterstützung bitten zu können', NULL, NULL, 21, 20, null , 3),
('mich für die Präsenz oder die Unterstützung bedanken können', NULL, NULL, 21, 20, null , 3),
('Ursachen für Konflikte oder Spannungen verstehen', NULL, NULL, 22, 20, null , 3),
('mit meinem Umfeld konstruktiv über die Krankheit und ihre Auswirkungen sprechen können', NULL, NULL, 22, 20, null , 3),
('erklären können, wie man mit den Schwierigkeiten meines|r Angehörigen umgehen kann', NULL, NULL, 22, 20, null , 3),
('mit meinem Umfeld konstruktiv darüber sprechen können, was ich als betreuende∙r Angehörige∙r mache', NULL, NULL, 22, 20, null , 3),
('mit meinem Umfeld offen über meine Bedürfnisse nach Unterstützung sprechen können', NULL, NULL, 22, 20, null , 3),
('für ein paar Stunden', NULL, NULL, 23, 20, null , 3),
('für einen oder mehrere Tage jede Woche', NULL, NULL, 23, 20, null , 3),
('für eine oder mehrere Wochen', NULL, NULL, 23, 20, null , 3),
('wissen, an wen man sich wenden und wie man vorgehen kann', NULL, NULL, 24, 20, null , 3),
('auswählen können, wo und wie meine angehörige Person betreut wird', NULL, NULL, 24, 20, null , 3),
('wie kann man vorgehen', NULL, NULL, 25, 20, null , 3),
('was würde dies finanziell oder praktisch bedeuten', NULL, NULL, 25, 20, null , 3),
('entscheiden können, was für mich wichtig ist, wie die Nähe zur Institution oder die Art der Institution', NULL, NULL, 25, 20, null , 3),
('für die Pflege, die körperlich schwierig ist oder ich als unangenehm empfinde', NULL, NULL, 26, 20, null , 3),
('über die Hygiene meines|r Angehörigen', NULL, NULL, 26, 20, null , 3),
('über die Einnahme seiner|ihrer Medikamente', NULL, NULL, 26, 20, null , 3),
('Organisation und Koordination der Betreuung meiner angehörigen Person', NULL, NULL, 27, 20, null , 3),
('Haushalt, Einkaufen, Wäsche waschen oder Bügeln', NULL, NULL, 27, 20, null , 3),
('Mahlzeiten', NULL, NULL, 27, 20, null , 3),
('Gartenarbeit, Instandhaltung der Wohnung/des Hauses oder Haustiere', NULL, NULL, 27, 20, null , 3),
('Transport meines|r erkrankten Angehörigen', NULL, NULL, 27, 20, null , 3),
('administrative oder finanzielle Angelegenheiten meines|r erkrankten Angehörigen', NULL, NULL, 27, 20, null , 3),
('verhindern, dass er|sie das Haus verlässt und sich verirrt', NULL, NULL, 28, 20, null , 3),
('das Haus so einrichten, dass er|sie nicht stürzt, sich nicht in Gefahr bringt oder Schaden verursacht', NULL, NULL, 28, 20, null , 3),
('sicherstellen, dass er|sie ausreichend und ausgewogen isst und trinkt', NULL, NULL, 28, 20, null , 3),
('eine finanzielle Entschädigung erhalten können', NULL, NULL, 29, 20, null , 3),
('an meine finanziellen Ressourcen angepasste Dienstleistungen', NULL, NULL, 29, 20, null , 3),
('Ausreichend Rückvergütung erhalten für Leistungen', NULL, NULL, 29, 20, null , 3),
('mein Budget an meine finanzielle Situation anpassen, z. B. bei einer Reduktion der Arbeitszeit oder krankheitsbedingten Ausgaben', NULL, NULL, 30, 20, null , 3),
('wissen, wie man mit unerwarteten Ausgaben umgehen kann, die durch meine erkrankte angehörige Person versursacht sind, z. B. wenn er|sie Geld verliert oder Schäden verursacht', NULL, NULL, 30, 20, null , 3),
('Umgang mit Verträgen, die von meinem|r Angehörigen unterschrieben wurden', NULL, NULL, 31, 20, null , 3),
('Schutz meiner angehörigen Person, wenn sie den Wert des Geldes nicht mehr kennt und zu viel ausgibt', NULL, NULL, 31, 20, null , 3),
('Rechte und Pflichten meines|r Angehörigen in Bezug auf den Führerscheinentzug', NULL, NULL, 31, 20, null , 3),
('gesetzliche∙r Vertreter∙in werden (administrativ, therapeutisch...)', NULL, NULL, 31, 20, null , 3),
('Rechte und Pflichten meiner angehörigen Person und der Verwandten beim Eintritt in ein Pflegeheim kennen', NULL, NULL, 31, 20, null , 3),
('Durchführen von notwendigen Untersuchungen in Zusammenhang mit meinen körperlichen Gesundheitsproblemen', NULL, NULL, 32, 21, null , 3),
('eine medizinische Behandlung und die notwendige Nachsorge erhalten', NULL, NULL, 32, 21, null , 3),
('Durchführung von notwendigen Evaluationen in Bezug auf meine psychischen Probleme, wie Depressionen, selbstverletzendes Verhalten, Erschöpfung, überwältigende Angstzustände oder extreme Reizbarkeit', NULL, NULL, 33, 21, null , 3),
('eine medizinische Behandlung und die notwendige Nachsorge erhalten', NULL, NULL, 33, 21, null , 3);


INSERT INTO resources (name, url) VALUES
('test1', 'https://www.postgresql.org/docs/14/dml-insert.html'),
('test2', 'https://www.postgresql.org/docs/current/sql-altertable.html'),
('test3', 'https://www.w3schools.com/sql/sql_ref_foreign_key.asp');


INSERT INTO pathology (name) VALUES
('demence'),
('pathology2'),
('pathology3');

INSERT INTO answers (label, lang_id, technical_key) VALUES
('essentiel', 1, 'essential'),
('important', 1, 'important'),
('un peu important', 1, 'less_important'),
('pas du tout important', 1, 'not_important'),
('besoin déjà rempli', 1, 'already_filled'),
('pas concerné.e', 1, 'not_concerned'),
('oui', 1, 'yes'),
('non', 1, 'no'),
('essential', 3, 'essential'),
('wichtig', 3, 'important'),
('ein wenig wichtig', 3, 'less_important'),
('überhaupt nicht wichtig', 3, 'not_important'),
('Bedürfnis bereits erfüllt', 3, 'already_filled'),
('nicht betroffen', 3, 'not_concerned'),
('ja', 3, 'yes'),
('nein', 3, 'no');

INSERT INTO resource_question (question_id, resource_id)
    VALUES (1, 1),
           (1, 2);

