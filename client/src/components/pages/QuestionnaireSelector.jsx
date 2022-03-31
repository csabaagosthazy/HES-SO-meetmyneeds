import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Spinner } from "react-bootstrap";
import { getCategories } from "../../services/api/service";
import info from "../../assets/info_empty.png";
import arrow from "../../assets/arrow_empty.png";
import routes from "../../assets/routes_empty.png";
import firstAid from "../../assets/first_aid_box_empty.png";
import welcomePic from "../../assets/welcome.jpg";

const QuestionnaireSelector = () => {
  //language will be selected by the user
  const lang = "fr";

  const [categories, setCategories] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    //call fetch
    let isMounted = true;
    (async () => {
      getCategories(lang)
        .then((obj) => {
          if (isMounted) {
            setCategories(obj);
          }
        })
        .catch((err) => setError(err));
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!categories) return <Spinner animation="border" variant="primary" />;
  console.log(categories);
  return (
    <Card>
      <Card.Title>{`ÉVALUER MES BESOINS`}</Card.Title>
      <Card.Subtitle>{`Dans cet outil d’évaluation, un besoin est 
      défini comme une condition qui est importante pour 
      moi et qui n’est pas remplie dans mon environnement actuel. 
      Ce besoin a ainsi un impact sur ma qualité de vie.`}</Card.Subtitle>
      <Card.Body>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={info} />
            <Card.Body>
              <Card.Title>{categories[0].label}</Card.Title>
              <Card.Subtitle>Last response / 22.03.2022</Card.Subtitle>
              <Card.Text>9 questions</Card.Text>
              <Link
                to={`/questionnaire/${categories[0].category_id}/${lang}/${categories[0].color_set}`}
              >
                Evaluer mes besoins dans ce domaine
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={arrow} />
            <Card.Body>
              <Card.Title>{categories[1].label}</Card.Title>
              <Card.Subtitle>Last response / 22.03.2022</Card.Subtitle>
              <Card.Text>9 questions</Card.Text>
              <Link
                to={`/questionnaire/${categories[1].category_id}/${lang}/${categories[1].color_set}`}
              >
                Evaluer mes besoins dans ce domaine
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={routes} />
            <Card.Body>
              <Card.Title>{categories[2].label}</Card.Title>
              <Card.Subtitle>Last response / 22.03.2022</Card.Subtitle>
              <Card.Text>9 questions</Card.Text>
              <Link
                to={`/questionnaire/${categories[2].category_id}/${lang}/${categories[2].color_set}`}
              >
                Evaluer mes besoins dans ce domaine
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={firstAid} />
            <Card.Body>
              <Card.Title>{categories[3].label}</Card.Title>
              <Card.Subtitle>Last response / 22.03.2022</Card.Subtitle>
              <Card.Text>9 questions</Card.Text>
              <Link
                to={`/questionnaire/${categories[3].category_id}/${lang}/${categories[3].color_set}`}
              >
                Evaluer mes besoins dans ce domaine
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
};

export default QuestionnaireSelector;
