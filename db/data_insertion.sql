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
('Bedürfnis nach informationen', 3, 'red'),
('Bedürfnis, meine Fähigkeiten weiter zu entwickeln', 3, 'yellow'),
('Bedürfnis nach Unterstützung', 3, 'green'),
('Bedürfnis, mich um meine Gesundheit kümmern', 3, 'blue');

INSERT INTO question_subcategory(label, lang_id, parent_category_id) VALUES
('Besoin d’informations sur la maladie de ma|mon proche', 1, 1),
('Besoin d’informations sur le traitement de ma|mon proche', 1, 1),
('Besoin d’informations sur les offres de soutien à disposition', 1, 1),
('Besoin de développer mes compétences pour mieux aider ma|mon proche malade', 1, 2),
('Besoin de développer mes compétences pour aider sans m’épuiser', 1, 2),
('Besoin de soutien émotionnel et psychologique pour mes émotions difficiles', 1, 3),
('Besoin de soutien émotionnel et psychologique pour mieux assumer le rôle d’aidant∙e', 1, 3),
('Besoin de soutien pour avoir plus d’aide ou de contact avec la famille et des ami∙e∙s', 1, 3),
('Besoin de répit, de temps pour soi-même ou d’être déchargé∙e d’une partie du soutien à ma|mon proche malade', 1, 3),
('Besoin de soutien pratique', 1, 3),
('Besoin de soutien pour des aspects financiers ou juridiques', 1, 3),
('Ma santé physique', 1, 4),
('Ma santé mentale', 1, 4),
('Bedürfnis nach Informationen über die Krankheit meines|r Angehörigen', 3, 5),
('Bedürfnis nach Informationen über die Behandlung meines|r Angehörigen', 3, 5),
('Bedürfnis nach Informationen zu vorhandenen Unterstützungsangeboten', 3, 5),
('Bedürfnis, meine Fähigkeiten weiterzuentwickeln, um meinem|r erkrankten Angehörigen besser zu helfen', 3, 6),
('Bedürfnis, meine Fähigkeiten weiterzuentwickeln, um helfen zu können, ohne zu erschöpfen', 3, 6),
('Bedürfnis nach emotionaler und psychologischer Unterstützung für meine schwierigen Emotionen', 3, 7),
('Bedürfnis nach emotionaler und psychologischer Unterstützung: die Rolle als betreuende∙r Angehörige∙r besser ausüben können', 3, 7),
('Bedürfnis nach Unterstützung, um mehr Hilfe von oder Kontakt mit Familie und Freunden zu haben', 3, 7),
('Bedürfnis für eine Verschnaufpause, Zeit für sich selber oder für Entlastung in Bezug auf die Unterstützung meines|r erkrankten Angehörigen', 3, 7),
('Bedürfnis nach Unterstützung in Bezug auf praktische Aspekte', 3, 7),
('Bedürfnis nach Unterstützung für finanzielle oder rechtliche Aspekte', 3, 7),
('Meine körperliche Gesundheit', 3, 8),
('Meine psychische Gesundheit', 3, 8);

INSERT INTO resources (name, url) VALUES
('MeetMyNeeds Website', 'https://www.heds-fr.ch/fr/recherche/themes/vieillissement/meetmyneeds/'),
('Annonce projet', 'https://www.youtube.com/watch?v=ERXLAyIHABk&t=2s'),
('Prototype presentation', 'https://www.youtube.com/watch?v=nGgtwY87c0o&list=PLJhJd78zc1c0WhbbHWeOycCIbl-qCC8VY&index=2');

INSERT INTO pathology (name) VALUES
('demence'),
('pathology2'),
('pathology3');

INSERT INTO questions (question, question_set, category_id, sub_category_id, lang_id) VALUES
('Actuellement j’ai besoin d’informations sur **le diagnostic précis ou sur la maladie**', 1, 1, 1 , 1),
('Actuellement j’ai besoin d’informations sur **les connaissances scientifiques actuelles qui concernent cette maladie**', 2, 1, 1 , 1),
('Actuellement j’ai besoin d’informations **sur la procédure de diagnostic**', 3, 1, 1 , 1),
('Actuellement j’ai besoin d’informations sur **l’accompagnement d’une personne avec démence**', 4, 1, 1 , 1),
('Actuellement j’ai besoin d’informations **sur les traitements possibles** pour sa maladie et **sur comment choisir**', 5, 1, 2 , 1),
('Actuellement j’ai besoin d’informations **sur les médicaments** que prend ma|mon proche, et **sur la manière de les prendre**', 6, 1, 2 , 1),
('Actuellement j’ai besoin d’informations **sur les services et les organisations qui peuvent me décharger dans l’accompagnement ou les soins à ma|mon proche et sur comment obtenir ces décharges**', 7, 1, 3 , 1),
('Actuellement j’ai besoin de plus d’informations **sur les services et les organisations qui peuvent me soutenir en tant que proche aidant∙e et sur comment obtenir ces soutiens**', 8, 1, 3 , 1),
('Actuellement j’ai besoin d’informations **sur les lieux de vie à long terme pour personnes avec démence**', 9, 1, 3 , 1),
('Actuellement j’ai besoin de savoir **reconnaître les problèmes de mémoire de ma|mon proche et ce qui peut les aggraver, pour anticiper et gérer les situations qui peuvent la|le mettre en difficulté**', 10, 2, 4, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche à gérer seul∙e ses activités quotidiennes**', 11, 2, 4, 1),
('Actuellement j’ai besoin de savoir **reconnaître les situations de crise** (changements soudains chez ma|mon proche malade qui peuvent indiquer un problème sérieux), **et savoir comment les gérer en impliquant les services de santé**', 12, 2, 4, 1),
('Actuellement j’ai besoin de savoir **défendre les intérêts de ma|mon proche malade face au réseau de prise en charge**', 13, 2, 4, 1),
('Actuellement j’ai besoin de savoir **reconnaître, anticiper et gérer les difficultés de ma|mon proche liées à sa maladie** (comportements ou émotions, communication, occupations) **et de pouvoir les expliquer à mon entourage**', 14, 2, 4, 1),
('Actuellement j’ai besoin d’**apprendre à aider tout en prenant soin de moi**', 15, 2, 5, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec les pertes dues à la maladie de ma|mon proche et le processus de deuil associé**', 16, 3, 6, 1),
('Actuellement j’ai besoin d’**écoute, de compréhension et de conseils concernant les émotions difficiles que je ressens en lien avec mon rôle de proche aidant∙e**', 17, 3, 6, 1),
('Actuellement j’ai besoin d’**aide pour trouver rapidement des solutions pour me sentir moins épuisé∙e**', 18, 3, 7, 1),
('Actuellement j’ai besoin d’**aide pour me sentir plus valorisé∙e dans mon rôle de proche aidant∙e**', 19, 3, 7, 1),
('Actuellement j’ai besoin d’**échanges et de partages avec des personnes vivant une situation similaire**', 20, 3, 7, 1),
('Actuellement j’ai besoin d’**aide pour obtenir plus de présence et de soutien – émotionnel ou pratique – de mon entourage**', 21, 3, 8, 1),
('Actuellement j’ai besoin d’**aide pour réduire les conflits ou les tensions avec mon entourage liés à la maladie de ma|mon proche**', 22, 3, 8, 1),
('Actuellement j’ai besoin de **pouvoir confier ma|mon proche à une autre personne ou à une institution pour avoir du temps pour moi**', 23, 3, 9, 1),
('Actuellement j’ai besoin de **trouver une solution au cas où je ne pourrais momentanément plus m’occuper de mon proche malade**', 24, 3, 9, 1),
('Actuellement j’ai besoin de **solutions pour réduire ou arrêter rapidement l’accompagnement car je suis épuisé∙e**', 25, 3, 9, 1),
('Actuellement j’ai besoin qu’**une personne me décharge des soins à donner à ma|mon proche malade**', 26, 3, 9, 1),
('Actuellement j’ai besoin qu’**une personne me décharge de tâches pratiques**', 27, 3, 10, 1),
('Actuellement j’ai besoin d’**aide pour veiller à la sécurité de ma|mon proche malade**', 28, 3, 10, 1),
('Actuellement j’ai besoin d’**aide financière**', 29, 3, 11, 1),
('Actuellement j’ai besoin d’**aide pour équilibrer mon budget en tenant compte de mes contraintes**', 30, 3, 11, 1),
('Actuellement j’ai besoin de **conseils pour gérer les questions légales liées à la maladie de ma|mon proche**', 31, 3, 11, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé physique**', 32, 4, 12, 1),
('Actuellement j’ai besoin d’**une prise en charge de mes problèmes de santé mentale**', 33, 4, 13, 1),
('Im Moment brauche ich Informationen über die genaue Diagnose oder die Krankheit', 1, 5, 14 , 3),
('Im Moment brauche ich Informationen über **die aktuellen wissenschaftlichen Erkenntnisse über die Krankheit**', 2, 5, 14 , 3),
('Im Moment brauche ich Informationen über **das Diagnoseverfahren**', 3, 5, 14 , 3),
('Im Moment brauche ich Informationen über **die Betreuung einer Person mit Demenz**', 4, 5, 14 , 3),
('Im Moment brauche ich Informationen über **die Behandlungsmöglichkeiten** der Krankheit meiner angehörigen Person und dazu **wie man diese auswählt**', 5, 5, 15 , 3),
('Im Moment brauche ich Informationen **über die Medikamente**, die meine angehörige Person einnimmt und dazu, **wie sie diese einnehmen soll**', 6, 5, 15 , 3),
('Im Moment brauche ich Informationen über Dienste und Organisationen, die mich von der Betreuung oder Pflege meiner angehörigen Person entlasten können und darüber, wie ich diese Entlastung erhalten kann', 7, 5, 16 , 3),
('Im Moment brauche ich mehr Informationen über Dienste und Organisationen, die mich als betreuende∙r Angehörige∙r unterstützen können, und wie ich diese Unterstützung erhalten kann', 8, 5, 16 , 3),
('Im Moment brauche ich Informationen über Lebensorte für Menschen mit Demenz für eine Langzeitbetreuung', 9, 5, 16 , 3),
('Im Moment muss ich wissen, wie Gedächtnisprobleme bei meiner angehörigen Person erkannt werden können. Ich muss wissen, was diese verschlimmern kann, um Situationen, die ihr|ihm Schwierigkeiten bereiten, vorbeugen und bewältigen zu können.*', 10, 6, 17, 3),
('Im Moment muss ich wissen, wie die Schwierigkeiten meines|r Angehörigen bei täglichen Aktivitäten erkannt, vorausgesehen und bewältigt werden können', 11, 6, 17, 3),
('Im Moment muss ich wissen, wie Krisensituationen erkannt (plötzliche Veränderungen bei meiner erkrankten angehörigen Person, die auf ein ernsthaftes Problem hinweisen können) und bewältigt werden können mit Unterstützung von Gesundheitsdiensten', 12, 6, 17, 3),
('Im Moment muss ich wissen, wie ich für die Interessen meines|r erkrankten Angehörigen einstehen kann im Versorgungsnetz', 13, 6, 17, 3),
('Im Moment muss ich wissen, wie Schwierigkeiten meiner angehörigen Person im Zusammenhang mit der Krankheit erkannt, vorausgesehen und bewältigt werden können (Verhaltensauffälligkeiten oder Emotionen, Kommunikation, Beschäftigung) und wie diese dem Umfeld erklärt werden können', 14, 6, 17, 3),
('Im Moment möchte ich lernen, wie ich helfen kann und gleichzeitig zu mir selber Sorge tragen kann', 15, 6, 18, 3),
('Im Moment brauche ich jemand der zuhört, Verständnis und Beratung für die schwierigen Emotionen, die ich im Zusammenhang mit den krankheitsbedingten Verlusten meines|r Angehörigen und dem damit verbundenen Trauerprozess empfinde', 16, 7, 19, 3),
('Im Moment brauche ich jemand der zuhört, Verständnis und Beratung für die schwierigen Emotionen, die ich in meiner Rolle als betreuende∙r Angehörige∙r empfinde', 17, 7, 19, 3),
('Im Moment brauche Hilfe, um schnell Lösungen zu finden, damit ich mich weniger erschöpft fühle', 18, 7, 20, 3),
('Im Moment brauche ich Hilfe, um mich in meiner Rolle als betreuende∙r Angehörige∙r mehr wertgeschätzt zu fühlen', 19, 7, 20, 3),
('Im Moment brauche ich einen Austausch mit Personen, die eine ähnliche Situation erleben', 20, 7, 20, 3),
('Im Moment brauche ich Hilfe, damit mein Umfeld mehr präsent ist und mich emotional oder praktisch unterstützt', 21, 7, 21, 3),
('Im Moment brauche ich Hilfe, um Konflikte oder Spannungen, die im Zusammenhang stehen mit der Krankheit meiner angehörigen Person, in meinem Umfeld zu reduzieren', 22, 7, 21, 3),
('Im Moment brauche ich eine Möglichkeit, meine angehörige Person einer anderen Person oder einer Institution anvertrauen zu können, um Zeit für mich zu haben', 23, 7, 22, 3),
('Im Moment brauche ich eine Lösung für den Fall, wenn ich mich vorübergehend nicht mehr um meine∙n erkrankte∙n Angehörige∙n kümmern kann', 24, 7, 22, 3),
('Im Moment brauche ich Lösungen, um die Betreuung schnell zu reduzieren oder zu beenden, da ich erschöpft bin', 25, 7, 22, 3),
('Im Moment brauche ich jemanden, der die Pflege meines|r erkrankten Angehörigen übernimmt', 26, 7, 22, 3),
('Im Moment brauche ich jemandem, der praktische Aufgaben übernimmt', 27, 7, 23, 3),
('Im Moment brauche ich Hilfe, um die Sicherheit meines|r erkrankten Angehörigen zu gewährleisten', 28, 7, 23, 3),
('Im Moment brauche ich **finanzielle Unterstützung**', 29, 7, 24, 3),
('Im Moment brauche ich Hilfe, um meinen Finanzhaushalt im Gleichgewicht zu halten, im Zusammenhang mit den aktuellen Einschränkungen', 30, 7, 24, 3),
('Im Moment brauche ich Beratung, um Rechtsfragen im Zusammenhang mit der Krankheit meines|r Angehörigen zu klären', 31, 7, 24, 3),
('Im Moment brauche ich **eine Betreuung in Bezug auf meine körperlichen Gesundheitsprobleme**', 32, 8, 25, 3),
('Im Moment brauche ich **eine Betreuung in Bezug auf meine psychischen Probleme**', 33, 8, 26, 3);

INSERT INTO subquestions(subquestion, parent_question_id, lang_id) VALUES
('le nom et la phase de sa maladie', 1, 1),
('la signification des termes médicaux', 1, 1),
('les causes, les symptômes et l’évolution de sa maladie', 1, 1),
('où trouver ce type d’information', 2, 1),
('les connaissances sur les causes et l’évolution', 2, 1),
('les résultats sur l’efficacité des traitements', 2, 1),
('qui et quand consulter', 3, 1),
('comment se déroulent les examens', 3, 1),
('que veulent dire les résultats', 3, 1),
('quels comportements adopter', 4, 1),
('quels facteurs peuvent aggraver les symptômes', 4, 1),
('quand consulter un∙e professionnel∙le et qui consulter', 4, 1),
('les médicaments', 5, 1),
('l’entraînement cognitif', 5, 1),
('le soutien psychosocial', 5, 1),
('comment choisir les traitements', 5, 1),
('les effets positifs et les effets secondaires possibles', 6, 1),
('quand et combien de temps prendre les médicaments', 6, 1),
('comment aider ma|mon proche à prendre ses médicaments', 6, 1),
('qui d’autre que moi pourrait l’aider à prendre ses médicaments', 6, 1),
('les aides au ménage ou aux soins', 7, 1),
('les services de transport', 7, 1),
('les lieux d’accueil de jour ou de nuit', 7, 1),
('les repas à domicile', 7, 1),
('le matériel tel que pilulier ou protections en cas d’incontinence', 7, 1),
('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', 7, 1),
('contenu et coûts de l’offre, quelle garantie de qualité', 7, 1),
('écoute et soutien', 8, 1),
('formation pour gérer la maladie au quotidien', 8, 1),
('médiation en cas de conflits avec l’entourage', 8, 1),
('soutien pour prendre des décisions ou du recul, mieux vivre les pertes', 8, 1),
('où s’adresser, quelles démarches, et quelles conditions doivent être remplies', 8, 1),
('contenu et coûts de l’offre, quelle garantie de qualité', 8, 1),
('**EMS** spécialisés ou non dans l’hébergement de personnes avec démence', 9, 1),
('**Lieux de vie** comme appartement ou colocation protégés', 9, 1),
('reconnaître et anticiper les situations de tensions dans les interactions, de stress ou d’échec', 10, 1),
('reconnaître lorsqu’un problème physique (par exemple douleur ou fièvre) augmente les difficultés de ma|mon proche', 10, 1),
('savoir comment adapter la situation ou réagir lorsque ma|mon proche est en difficulté', 10, 1),
('reconnaître quand elle|il a besoin d’aide par exemple pour se préparer un repas, choisir ses vêtements, s’habiller, se brosser les dents, aller aux WC', 11, 1),
('savoir comment faire pour l’aider de manière respectueuse et efficace, tout en lui laissant autant d’autonomie que possible', 11, 1),
('reconnaître une crise et savoir comment réagir', 12, 1),
('savoir quand contacter un∙e professionnel∙le de santé et lequel', 12, 1),
('savoir comment demander de l’aide', 12, 1),
('obtenir une procuration pour la prise de décision médicale', 13, 1),
('savoir ce qui est important pour ma|mon proche dans ce domaine', 13, 1),
('pouvoir m’impliquer dans les décisions qui concernent ma|mon proche malade et faire entendre mon avis', 13, 1),
('concernant les comportement difficiles comme l’agressivité, l’agitation, les refus d’être aidé∙e, la perte d’intérêt, les moments de confusion', 14, 1),
('concernant les émotions difficiles comme les changements brusques d’humeur, les moments d’angoisse ou de désespoir', 14, 1),
('concernant les tensions dues aux difficultés à se comprendre', 14, 1),
('concernant les occupations qui fassent plaisir sans mettre en échec ou en stress', 14, 1),
('pouvoir gérer mes émotions négatives ou douloureuses liées aux difficultés de ma|mon proche', 15, 1),
('pouvoir reconnaître mes besoins et mes limites, en trouvant des moyens pour les respecter', 15, 1),
('savoir rechercher de l’aide autour de moi et pouvoir l’accepter', 15, 1),
('savoir me préparer aux changements', 15, 1),
('pouvoir m’accorder des temps de pause pour me ressourcer', 15, 1),
('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend ce que je ressens en voyant que ma|mon proche perd ses capacités, me semble étranger∙ère, est dépendant∙e de moi…', 16, 1),
('être guidé∙e pour comprendre ce qui est difficile pour moi', 16, 1),
('recevoir des conseils pour vivre au mieux ce processus de deuil', 16, 1),
('être écouté∙e sans jugement et en toute confidentialité par une personne qui comprend que je peux me sentir par exemple prisonnier∙ère, isolé∙e, ou non reconnu∙e dans mon rôle de proche aidant∙e', 17, 1),
('être guidé∙e pour comprendre ce qui me fait souffrir', 17, 1),
('recevoir des conseils sur comment faire pour souffrir moins', 17, 1),
('pour me sentir moins surchargé∙e, en train de perdre le contrôle de ma vie ou à bout de nerfs', 18, 1),
('pour être moins tiraillé∙e entre mes diverses responsabilités', 18, 1),
('pour que mes compétences dans l’aide apportée soient plus reconnues', 19, 1),
('pour que ce que je fais pour elle|lui soit plus apprécié ou que je sois plus encouragée', 19, 1),
('pour pouvoir reconnaître les signes de valorisation et de reconnaissance lorsque mon entourage me les donne', 19, 1),
('pouvoir parler de ma situation avec d’autres proches aidant∙e∙s', 20, 1),
('pouvoir faire partie d’un groupe de personnes vivant des situations similaires', 20, 1),
('pouvoir faire profiter d’autres proches aidant∙e∙s de mes expériences et compétences', 20, 1),
('savoir qui dans mon entourage pourrait m’offrir de la présence', 21, 1),
('savoir qui dans mon entourage pourrait m’offrir de l’écoute et de la compréhension', 21, 1),
('savoir qui dans mon entourage pourrait m’offrir de l’aide pratique', 21, 1),
('pouvoir demander la présence ou le soutien dont j’ai besoin à une personne de mon entourage', 21, 1),
('pouvoir remercier pour la présence ou le soutien apporté', 21, 1),
('comprendre les sources de conflits ou de tensions', 22, 1),
('pouvoir parler avec mon entourage de manière constructive de la maladie et de ses effets', 22, 1),
('pouvoir expliquer comment s’y prendre face aux difficultés de ma|mon proche malade', 22, 1),
('pouvoir parler avec mon entourage de manière constructive de ce que je fais comme proche aidant∙e', 22, 1),
('pouvoir dire ouvertement à mon entourage mes besoins de soutien', 22, 1),
('pour quelques heures', 23, 1),
('pour un ou plusieurs jours chaque semaine', 23, 1),
('pour une ou plusieurs semaines', 23, 1),
('savoir qui contacter et comment procéder', 24, 1),
('pouvoir choisir où et comment mon proche malade sera pris en charge', 24, 1),
('comment procéder', 25, 1),
('ce que ceci impliquerait financièrement ou pratiquement', 25, 1),
('pouvoir décider selon ce qui est important pour moi, comme la proximité ou le type d’institution', 25, 1),
('pour des soins physiquement difficiles ou que je trouve désagréables', 26, 1),
('pour l’hygiène de ma|mon proche', 26, 1),
('pour la prise de ses médicaments', 26, 1),
('la gestion et la coordination de la prise en charge de ma|mon proche malade', 27, 1),
('le ménage, les courses, la lessive, ou le repassage', 27, 1),
('les repas', 27, 1),
('le jardin, de l’entretien de la maison ou des animaux domestiques', 27, 1),
('le transport de ma|mon proche malade', 27, 1),
('les affaires administratives ou les finances de ma|mon proche malade', 27, 1),
('éviter qu‘elle|il quitte son domicile et se perde', 28, 1),
('adapter son domicile pour éviter qu’elle|il tombe, se mette en danger ou cause des dégâts', 28, 1),
('veiller à ce que qu’elle|il mange et boive assez et de manière équilibrée', 28, 1),
('pouvoir bénéficier d’un dédommagement financier', 29, 1),
('pouvoir bénéficier de services à un prix adapté à mes ressources', 29, 1),
('pouvoir bénéficier d’un remboursement satisfaisant des prestations', 29, 1),
('pour adapter mon budget à ma situation actuelle, par exemple à la réduction de mon taux de travail ou aux dépenses liées à la maladie', 30, 1),
('pour savoir comment gérer les dépenses imprévues créées par ma|mon proche malade par exemple lorsqu’elle ou il perd de l’argent ou cause des dégâts', 30, 1),
('pour gérer les contrats signés par ma|mon proche', 31, 1),
('pour protéger ma|mon proche si elle|il ne connaît plus la valeur de l’argent et dépense trop', 31, 1),
('pour connaître les droits et obligations de ma|mon proche concernant le retrait de son permis de conduire', 31, 1),
('pour être désigné∙e représentant∙e (administratif, thérapeutique…)', 31, 1),
('pour connaître les droits et obligations de ma|mon proche et de ses proches après l’entrée en EMS', 31, 1),
('pouvoir faire les examens nécessaires concernant mes problèmes de santé physique', 32, 1),
('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', 32, 1),
('pouvoir faire les évaluations nécessaires concernant mes problèmes de santé mentale tels que dépression, envie de me faire du mal, épuisement, angoisses envahissantes ou irritabilité extrême', 33, 1),
('pouvoir recevoir un traitement médical et bénéficier du suivi nécessaire', 33, 1),
('den Namen und das Stadium der Krankheit', 34, 3),
('die Bedeutung von medizinischen Begriffen', 34, 3),
('Ursachen, Symptome und Verlauf der Krankheit', 34, 3),
('wo diese Art von Informationen zu finden sind', 35, 3),
('Kenntnisse über die Ursachen und den Verlauf', 35, 3),
('Ergebnisse über die Wirksamkeit von Behandlungen', 35, 3),
('wen und wann konsultieren', 36, 3),
('wie werden Untersuchungen durchgeführt', 36, 3),
('was bedeuten die Ergebnisse', 36, 3),
('wie soll man sich verhalten', 37, 3),
('welche Faktoren können die Symptome verschlimmern', 37, 3),
('wann sollte welche Fachperson konsultiert werden', 37, 3),
('Medikamente', 38, 3),
('kognitives Training', 38, 3),
('psychosoziale Unterstützung', 38, 3),
('Behandlungsmöglichkeiten auswählen', 38, 3),
('positive Wirkung und mögliche Nebenwirkungen', 39, 3),
('wann und wie lange sollen die Medikamente eingenommen werden', 39, 3),
('wie kann ich meiner angehörigen Person bei der Einnahme helfen', 39, 3),
('wer ausser mir könnte ihm|ihr bei der Einnahme der Medikamente helfen', 39, 3),
('Haushaltshilfe oder Pflegedienste', 40, 3),
('Transportdienste', 40, 3),
('Tagesheime oder Nachtbetreuung', 40, 3),
('Mahlzeitendienst', 40, 3),
('Hilfsmittel, wie Medikamentendispenser oder Inkontinenzmaterial', 40, 3),
('an wen kann man sich wenden, wie ist das Vorgehen und welche Bedingungen müssen erfüllt sein', 40, 3),
('Inhalt und Kosten der Angebote, wie wird die Qualität gewährleistet', 40, 3),
('Zuhören und Unterstützung', 41, 3),
('Schulung im Umgang mit der Krankheit im Alltag', 41, 3),
('Vermittlung bei Konflikten mit meinem Umfeld', 41, 3),
('Unterstützung bei Entscheidungen, Abstand nehmen oder Bewältigung von Verlusten', 41, 3),
('an wen kann man sich wenden, wie ist das Vorgehen und welche Bedingungen müssen erfüllt sein', 41, 3),
('Inhalt und Kosten der Angebote, wie wird die Qualität gewährleistet', 41, 3),
('auf Demenz spezialisierte oder nicht spezialisierte Pflegeheime', 42, 3),
('Lebensorte, wie Alterswohnungen oder Alterswohngemeinschaften', 42, 3),
('Spannungen bei Interaktionen, Stress oder Misserfolge erkennen und vermeiden', 43, 3),
('erkennen, wenn körperliche Gesundheitsprobleme (z. B. Schmerzen oder Fieber) die Schwierigkeiten meines|r Angehörigen verschlimmern', 43, 3),
('wissen, wie man Situationen anpassen oder reagieren kann, wenn mein∙e Angehörige∙r in Schwierigkeiten ist', 43, 3),
('erkennen, wann er|sie Hilfe braucht, z. B. beim Zubereiten von Mahlzeiten, Kleider auswählen, an- oder ausziehen, Zähneputzen, Toilettengang', 44, 3),
('wissen, wie ich ihn|sie respektvoll und effizient unterstützen kann und ihm|ihr dabei möglichst viel Autonomie belassen kann', 44, 3),
('eine Krise erkennen und wissen wie man reagieren kann', 45, 3),
('wissen, wann und welche Fachperson kontaktiert werden soll', 45, 3),
('wissen, wie man Hilfe anfordern kann', 45, 3),
('eine Vollmacht für medizinische Entscheidung einholen', 46, 3),
('wissen, was für meine∙n Angehörige∙n wichtig ist in diesem Bereich', 46, 3),
('sich bei Entscheidungen beteiligen können, die meine∙n erkrankte∙n Angehörige∙n betreffen und sich Gehör verschaffen', 46, 3),
('bei schwierigen Verhaltensweisen wie Aggressivität, Unruhe, ablehnendes Verhalten gegenüber Hilfestellungen, Verlust von Interessen oder Verwirrtheit', 47, 3),
('bei schwierigen Emotionen wie plötzliche Veränderungen der Stimmung, Angst oder Verzweiflung', 47, 3),
('bei Spannungen aufgrund von Verständnisproblemen', 47, 3),
('zu Aktivitäten/Beschäftigung, die der angehörigen Person Freude bereiten und keinen Stress oder Gefühle von Misserfolg verursachen', 47, 3),
('bewältigen von negativen oder schmerzhaften Emotionen im Zusammenhang mit den Schwierigkeiten meiner angehörigen Person', 48, 3),
('eigene Bedürfnisse und Grenzen erkennen und Wege finden, wie diese respektiert werden können', 48, 3),
('wissen, wie ich in meinem Umfeld Hilfe finden und diese annehmen kann', 48, 3),
('wissen, wie ich mich auf Veränderungen vorbereiten kann', 48, 3),
('mir Zeit für Pausen einräumen, um neue Energie zu tanken', 48, 3),
('eine Person, dir mir wertfrei und im Vertrauen zuhört, die versteht, wie ich mich fühle, wenn meine angehörige Person Fähigkeiten verliert, sie mir fremd vorkommt und sie von mir abhängig ist …', 49, 3),
('Unterstützung, um zu verstehen, was für mich schwierig ist', 49, 3),
('Beratung dazu, wie man den Trauerprozess am besten bewältigen kann', 49, 3),
('eine Person, dir mir wertfrei und im Vertrauen zuhört, die versteht, wie ich mich fühlen kann, wenn ich mich zum Beispiel gefangen, isoliert oder nicht anerkannt fühle in meiner Rolle als betreuende∙r Angehörige∙r', 50, 3),
('Unterstützung, um zu verstehen, was mich belastet', 50, 3),
('Beratung dazu, wie ich es machen kann, um weniger zu leiden', 50, 3),
('um mich weniger überlastet zu fühlen, weniger das Gefühl zu haben die Kontrolle über mein Leben zu verlieren oder mit den Nerven am Ende zu sein', 51, 3),
('um weniger hin- und hergerissen zu sein zwischen meinen verschiedenen Verpflichtungen', 51, 3),
('damit meine Fähigkeiten bezüglich der Unterstützung, die ich leiste, mehr anerkannt werden', 52, 3),
('damit das, was ich für sie|ihn tue, mehr geschätzt wird oder damit ich mehr ermutigt werde', 52, 3),
('damit ich erkennen kann, wenn mir mein Umfeld Zeichen von Wertschätzung und Anerkennung entgegenbringt', 52, 3),
('mit anderen betreuenden Angehörigen über meine Situation sprechen', 53, 3),
('Teil einer Gruppe sein mit Personen in ähnlichen Situationen', 53, 3),
('meine Erfahrungen und Fähigkeiten anderen betreuenden Angehörigen weitergeben', 53, 3),
('wissen, wer aus meinem Umfeld präsent sein könnte', 54, 3),
('wissen, wer aus meinem Umfeld ein offenes Ohr und Verständnis bieten könnte', 54, 3),
('wissen, wer aus meinem Umfeld praktische Unterstützung bieten könnte', 54, 3),
('jemanden aus meinem Umfeld, um die notwendige Präsenz oder Unterstützung bitten zu können', 54, 3),
('mich für die Präsenz oder die Unterstützung bedanken können', 54, 3),
('Ursachen für Konflikte oder Spannungen verstehen', 55, 3),
('mit meinem Umfeld konstruktiv über die Krankheit und ihre Auswirkungen sprechen können', 55, 3),
('erklären können, wie man mit den Schwierigkeiten meines|r Angehörigen umgehen kann', 55, 3),
('mit meinem Umfeld konstruktiv darüber sprechen können, was ich als betreuende∙r Angehörige∙r mache', 55, 3),
('mit meinem Umfeld offen über meine Bedürfnisse nach Unterstützung sprechen können', 55, 3),
('für ein paar Stunden', 56, 3),
('für einen oder mehrere Tage jede Woche', 56, 3),
('für eine oder mehrere Wochen', 56, 3),
('wissen, an wen man sich wenden und wie man vorgehen kann', 57, 3),
('auswählen können, wo und wie meine angehörige Person betreut wird', 57, 3),
('wie kann man vorgehen', 58, 3),
('was würde dies finanziell oder praktisch bedeuten', 58, 3),
('entscheiden können, was für mich wichtig ist, wie die Nähe zur Institution oder die Art der Institution', 58, 3),
('für die Pflege, die körperlich schwierig ist oder ich als unangenehm empfinde', 59, 3),
('über die Hygiene meines|r Angehörigen', 59, 3),
('über die Einnahme seiner|ihrer Medikamente', 59, 3),
('Organisation und Koordination der Betreuung meiner angehörigen Person', 60, 3),
('Haushalt, Einkaufen, Wäsche waschen oder Bügeln', 60, 3),
('Mahlzeiten', 60, 3),
('Gartenarbeit, Instandhaltung der Wohnung/des Hauses oder Haustiere', 60, 3),
('Transport meines|r erkrankten Angehörigen', 60, 3),
('administrative oder finanzielle Angelegenheiten meines|r erkrankten Angehörigen', 60, 3),
('verhindern, dass er|sie das Haus verlässt und sich verirrt', 61, 3),
('das Haus so einrichten, dass er|sie nicht stürzt, sich nicht in Gefahr bringt oder Schaden verursacht', 61, 3),
('sicherstellen, dass er|sie ausreichend und ausgewogen isst und trinkt', 61, 3),
('eine finanzielle Entschädigung erhalten können', 62, 3),
('an meine finanziellen Ressourcen angepasste Dienstleistungen', 62, 3),
('Ausreichend Rückvergütung erhalten für Leistungen', 62, 3),
('mein Budget an meine finanzielle Situation anpassen, z. B. bei einer Reduktion der Arbeitszeit oder krankheitsbedingten Ausgaben', 63, 3),
('wissen, wie man mit unerwarteten Ausgaben umgehen kann, die durch meine erkrankte angehörige Person versursacht sind, z. B. wenn er|sie Geld verliert oder Schäden verursacht', 63, 3),
('Umgang mit Verträgen, die von meinem|r Angehörigen unterschrieben wurden', 64, 3),
('Schutz meiner angehörigen Person, wenn sie den Wert des Geldes nicht mehr kennt und zu viel ausgibt', 64, 3),
('Rechte und Pflichten meines|r Angehörigen in Bezug auf den Führerscheinentzug', 64, 3),
('gesetzliche∙r Vertreter∙in werden (administrativ, therapeutisch...)', 64, 3),
('Rechte und Pflichten meiner angehörigen Person und der Verwandten beim Eintritt in ein Pflegeheim kennen', 64, 3),
('Durchführen von notwendigen Untersuchungen in Zusammenhang mit meinen körperlichen Gesundheitsproblemen', 65, 3),
('eine medizinische Behandlung und die notwendige Nachsorge erhalten', 65, 3),
('Durchführung von notwendigen Evaluationen in Bezug auf meine psychischen Probleme, wie Depressionen, selbstverletzendes Verhalten, Erschöpfung, überwältigende Angstzustände oder extreme Reizbarkeit', 66, 3),
('eine medizinische Behandlung und die notwendige Nachsorge erhalten', 66, 3);

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
           (1, 2),
           (1, 3),
           (2, 1),
           (2, 2),
           (2, 3),
           (3, 1),
           (3, 2),
           (3, 3),
           (4, 1),
           (4, 2),
           (4, 3),
           (5, 1),
           (5, 2),
           (5, 3),
           (6, 1),
           (6, 2),
           (6, 3),
           (7, 1),
           (7, 2),
           (7, 3),
           (8, 1),
           (8, 2),
           (8, 3),
           (9, 1),
           (9, 2),
           (9, 3),
           (10, 1),
           (10, 2),
           (10, 3),
           (11, 1),
           (11, 2),
           (11, 3),
           (12, 1),
           (12, 2),
           (12, 3),
           (13, 1),
           (13, 2),
           (13, 3),
           (14, 1),
           (14, 2),
           (14, 3),
           (15, 1),
           (15, 2),
           (15, 3),
           (16, 1),
           (16, 2),
           (16, 3),
           (17, 1),
           (17, 2),
           (17, 3),
           (18, 1),
           (18, 2),
           (18, 3),
           (19, 1),
           (19, 2),
           (19, 3),
           (20, 1),
           (20, 2),
           (20, 3),
           (21, 1),
           (21, 2),
           (21, 3),
           (22, 1),
           (22, 2),
           (22, 3),
           (23, 1),
           (23, 2),
           (23, 3),
           (24, 1),
           (24, 2),
           (24, 3),
           (25, 1),
           (25, 2),
           (25, 3),
           (26, 1),
           (26, 2),
           (26, 3),
           (27, 1),
           (27, 2),
           (27, 3),
           (28, 1),
           (28, 2),
           (28, 3),
           (29, 1),
           (29, 2),
           (29, 3),
           (30, 1),
           (30, 2),
           (30, 3),
           (31, 1),
           (31, 2),
           (31, 3),
           (32, 1),
           (32, 2),
           (32, 3),
           (33, 1),
           (33, 2),
           (33, 3);

INSERT INTO service_question (question_id, service_id)
VALUES (1, 1),
       (1, 2),
       (2, 1),
       (2, 2),
       (3, 1),
       (3, 2),
       (4, 1),
       (4, 2),
       (5, 1),
       (5, 2),
       (6, 1),
       (6, 2),
       (7, 1),
       (7, 2),
       (8, 1),
       (8, 2),
       (9, 1),
       (9, 2),
       (10, 1),
       (10, 2),
       (11, 1),
       (11, 2),
       (12, 1),
       (12, 2),
       (13, 1),
       (13, 2),
       (14, 1),
       (14, 2),
       (15, 1),
       (15, 2),
       (16, 1),
       (16, 2),
       (17, 1),
       (17, 2),
       (18, 1),
       (18, 2),
       (19, 1),
       (19, 2),
       (20, 1),
       (20, 2),
       (21, 1),
       (21, 2),
       (22, 1),
       (22, 2),
       (23, 1),
       (23, 2),
       (24, 1),
       (24, 2),
       (25, 1),
       (25, 2),
       (26, 1),
       (26, 2),
       (27, 1),
       (27, 2),
       (28, 1),
       (28, 2),
       (29, 1),
       (29, 2),
       (30, 1),
       (30, 2),
       (31, 1),
       (31, 2),
       (32, 1),
       (32, 2),
       (33, 1),
       (33, 2);

