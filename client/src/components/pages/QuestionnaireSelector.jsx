import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Card, CardGroup, Spinner} from "react-bootstrap";
import {getCategories} from "../../services/api/service";
import {CustomButton} from "../button/CustomButton";
import info from "../../assets/need_for_information.png";
import develop from "../../assets/need_to_develop_my_skills.png";
import support from "../../assets/need_for_support.png";
import health from "../../assets/need_to_take_care_of_my_health.png";
import ErrorElement from "../errors/ErrorElement";

import "../../stylesheets/components/styles.css";

const images = [info, develop, support, health];

const QuestionnaireSelector = () => {
    //language will be selected by the user
    const navigate = useNavigate();
    const userSelectedLanguage = "fr";

    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            getCategories(userSelectedLanguage).then(setCategories).catch(setError);
        })();
    }, []);

    const navigateToQuestionnaire = (questionId, language, color) => {
        navigate("/questionnaire", {state: {id: questionId, lang: language, colorSet: color}});
    };

    if (!categories && !error) return <Spinner animation="border" variant="primary"/>;
    if (error)
        return (
            <ErrorElement err={error}>
                Erreur de chargement des catégories des questions
            </ErrorElement>
        );

    return (
        <Card>
            <Card.Title className="category-centered">{`ÉVALUER MES BESOINS`}</Card.Title>
            <Card.Subtitle className="category-centered">
                {`Dans cet outil d’évaluation, un besoin est 
         défini comme une condition qui est importante pour 
         moi et qui n’est pas remplie dans mon environnement actuel. 
         Ce besoin a ainsi un impact sur ma qualité de vie.`}
            </Card.Subtitle>
            <Card.Body>
                <CardGroup>
                    {categories.map((category, idx) => (
                        <Card
                            className={"card text-center"}
                            style={{width: "18rem"}}
                            key={category.category_id}
                        >
                            <Card.Img
                                variant="top"
                                src={images[idx % images.length]}
                                width={200}
                                height={180}
                            />

                            <Card.Body>
                                <Card.Title>{category.label}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>{`${category.questions_number} questions`}</Card.Text>
                            </Card.Footer>
                            <Card.Footer>
                                <CustomButton
                                    variant={"s"}
                                    bgColor={"lightBlue"}
                                    onClick={() =>
                                        navigateToQuestionnaire(
                                            category.category_id,
                                            userSelectedLanguage,
                                            category.color_set
                                        )
                                    }
                                >
                                    Evaluer mes besoins dans ce domaine
                                </CustomButton>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardGroup>
            </Card.Body>
        </Card>
    );
};

export default QuestionnaireSelector;
