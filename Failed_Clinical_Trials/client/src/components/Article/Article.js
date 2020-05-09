import React from "react";
import get from 'lodash//get';
import { Col, Row } from "react-styled-flexboxgrid";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Article = ({ article }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ marginTop: 30 }}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          <Typography className={classes.heading}>{get(article, 'medicinalProduct', '')}</Typography>
          <Typography className={classes.secondaryHeading}>{get(article, 'studyTitle', '')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Medicinal product:</b> {get(article, 'medicinalProduct', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Study title:</b> {get(article, 'studyTitle', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Therapeutic class: </b> {get(article, 'therapeuticClass', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Sponsor: </b> {get(article, 'sponsor', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Disease: </b> {get(article, 'disease', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Phase: </b> {get(article, 'phase', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Interventions: </b> {get(article, 'interventions', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Planned enrollment: </b> {get(article, 'plannedEnrollment', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Actual enrollment: </b> {get(article, 'actualEnrollment', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Failure nature: </b> {get(article, 'failureNature', '')}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Clinical trial registers: </b> {get(article, 'clinicalTrialRegisters', []).map(register => <Row> <a href={register}>{register}</a></Row>)}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Medical literature: </b> {get(article, 'medicalLiterature', []).map(literature => literature)}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="Articles">
                  <b>Media reports: </b> {get(article, 'mediaReports', []).map(report => <Row><a href={report}>{report}</a></Row>)}
                </div>
              </Col>
            </Row>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Article;
