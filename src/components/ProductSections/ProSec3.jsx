import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProSec3 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section>
      <Container>
        <div className="tab-wrap">
          <div className="tabs-text d-flex">
            <div className="bloc-tabs">
              <h4
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Description
              </h4>
            </div>
            <div className="bloc-tabs">
              <h4
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Reviews (3)
              </h4>
            </div>
          </div>
        

        <div className="content-tabs mt-3">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p>
              You can search for more templates on Google Search using keywords
              such as "templatemo digital marketing", "templatemo one-page",
              "templatemo gallery", etc. Please tell your friends about our
              website. If you need a variety of HTML templates, you may visit
              Tooplate and Too CSS websites.
              <br />
              <br />
              Coloring book air plant shabby chic, crucifix normcore raclette
              cred swag artisan activated charcoal. PBR&B fanny pack pok pok
              gentrify truffaut kitsch helvetica jean shorts edison bulb poutine
              next level humblebrag la croix adaptogen. Hashtag poke literally
              locavore, beard marfa kogi bruh artisan succulents seitan tonx
              waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo
              irony cray hell of bitters asymmetrical gluten-free art party raw
              denim chillwave tousled try-hard succulents street art.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p>
              Coloring book air plant shabby chic, crucifix normcore raclette
              cred swag artisan activated charcoal. PBR&B fanny pack pok pok
              gentrify truffaut kitsch helvetica jean shorts edison bulb poutine
              next level humblebrag la croix adaptogen.
              <br />
              <br />
              Hashtag poke literally locavore, beard marfa kogi bruh artisan
              succulents seitan tonx waistcoat chambray taxidermy. Same cred
              meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical
              gluten-free art party raw denim chillwave tousled try-hard
              succulents street art.
            </p>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default ProSec3;
