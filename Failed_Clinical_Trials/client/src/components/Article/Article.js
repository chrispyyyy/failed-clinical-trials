import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";

const Article = ({ article }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <section className="jumbotron" key={article._id}>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Medicinal product:</b> {article.medicinalProduct}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Study title:</b> {article.studyTitle}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Therapeutic class: </b> {article.therapeuticClass}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Sponsor: </b> {article.sponsor}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Disease: </b> {article.disease}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Phase: </b> {article.phase}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Interventions: </b> {article.interventions}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Planned enrollment: </b> {article.plannedEnrollment}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Actual enrollment: </b> {article.actualEnrollment}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Failure nature: </b> {article.failureNature}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Clinical trial registers: </b> {article.clinicalTrialRegisters.map(register => register)}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Medical literature: </b> {article.medicalLiterature.map(literature => literature)}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Articles">
              <b>Media reports: </b> {article.mediaReports.map(report => report)}
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Article;
