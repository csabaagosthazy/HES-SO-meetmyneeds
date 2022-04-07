import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Alert, Card, CardGroup, Spinner} from "react-bootstrap";
import { getCategories } from "../../services/api/service";

import info from "../../assets/info_empty.png";
import arrow from "../../assets/arrow_empty.png";
import routes from "../../assets/routes_empty.png";
import firstAid from "../../assets/first_aid_box_empty.png";

const images = [
  info, arrow, routes, firstAid
]

const QuestionnaireSelector = () => {
  //language will be selected by the user
  const userSelectedLanguage = "fr";

  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        setCategories(await getCategories(userSelectedLanguage));
      } catch (e){
        setError(e)
      }
    })();
  }, []);

  if (!categories && !error) return <Spinner animation="border" variant="primary" />;
  if(error) return <Alert color="danger">Erreur de chargement de la page: {error}</Alert>;

  return (
    <Card>
      <Card.Title>{`ÉVALUER MES BESOINS`}</Card.Title>
      <Card.Subtitle>{
        `Dans cet outil d’évaluation, un besoin est 
         défini comme une condition qui est importante pour 
         moi et qui n’est pas remplie dans mon environnement actuel. 
         Ce besoin a ainsi un impact sur ma qualité de vie.`}
      </Card.Subtitle>
      <Card.Body>
        <CardGroup>
          {categories.map((category, idx) => (
            <Card style={{ width: "18rem" }} key={category.category_id}>
              <Card.Img variant="top" src={images[idx % images.length]} />
              <Card.Body>
                <Card.Title>{category.label}</Card.Title>
                <Card.Subtitle>Last response / 22.03.2022</Card.Subtitle>
                <Card.Text>9 questions</Card.Text>
                <Link
                    to={`/questionnaire/${category.category_id}/${userSelectedLanguage}/${category.color_set}`}
                >
                  Evaluer mes besoins dans ce domaine
                </Link>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Card.Body>
    </Card>
  );
};

export default QuestionnaireSelector;
