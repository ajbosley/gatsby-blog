import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CodeImages from "../components/CodeImages";

const uos = require("../../content/assets/uos.svg");
class Resume extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Resume" />
        <div className="resume-title" style={{ textAlign: "center" }}>
          <h1 className="h1-title">Ahh, a Resume</h1>
        </div>
        <div className="resume-container">
          <div className="resume-content">
            <h2>A little about me</h2>
            <p
              className="text-content"
              style={{ width: "80%", margin: "auto" }}
            >
              I am an energetic, enthusiastic character and throw myself into
              projects with full commitment, I take pride in my ability to learn
              anything quickly, and have a natural lean towards mathematics and
              programming. That said, I am also a practical person. My skill and
              proficiency in climbing, sailing, surfing and many other outdoor
              activities demonstrate this. Throughout my time at university I
              demonstrated my leadership skill, built upon this grounding at
              Lazy Susan and have continued this progression at Consortiq. Most
              of all I am eager to work on projects where my abilities and
              characteristics will make a difference.
            </p>
            <h2>Qualifications</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <img
                src={uos}
                style={{
                  width: "200px",
                  maxWidth: "30%",
                  display: "inline",
                  paddingRight: "30px"
                }}
                alt="University of Southampton logo"
              />
              <span>BSc Mathematics - Second class</span>
            </div>
            <h2>Previous Experience</h2>

            <h4>Full Stack Developer - Consortiq (June 2018 - Present) </h4>
            <ul>
              <li>UI/UX Design and optimization.</li>
              <li>Introduced tracking across all web apps.</li>
              <li>Created automated on-boarding scripts for new clients.</li>
              <li>
                Re-designed mission creation UI/UX with a target of 15 minute
                reduction in creation time.
              </li>
              <li>
                Communicated with clients to develop new features for the
                product.
              </li>
              <li>Workflow optimisation within the CQNet web app.</li>
              <li>
                Communicated breaking API changes with external development
                partners.
              </li>
              <li>Integrated multiple API's into the CQNet system.</li>
              <li>
                Worked with partners to deliver new product demo's to tight
                deadlines.
              </li>
              <li>
                Headed communications between internal, external and partner
                development teams.
              </li>
              <li>Championed company code review process.</li>
              <li>Ownership of team stand-up process.</li>
              <li>Assisted in the design for a new platform architecture.</li>
              <li>Wrote internal and external release notes.</li>
              <li>Optimised release process.</li>
              <li>Design and track new features.</li>
              <li>Followed company design principles.</li>
              <li>
                Engage regularly with upper management to steer product
                pipelines and discuss potential new products.
              </li>
              <li>
                Track errors, bugs and issues using&nbsp;
                <a style={{ fontWeight: "bold" }} href="https://sentry.io">
                  Sentry.io
                </a>
              </li>
              <li>
                Adapted a Wordpress design to create&nbsp;
                <a style={{ fontWeight: "bold" }} href="http://www.cqnet.io">
                  CQNet.io
                </a>
              </li>
              <li>
                Completed the theoretical side of Consortiq's UAQ qualification.
              </li>
              <li>I can also make tea / coffee to each team members taste.</li>
            </ul>

            <h4>
              Operations and Merchandising Data Analyst - Lazy Susan (June 2017
              - Present)
            </h4>
            <ul>
              <li>
                Reported to upper management on marketplace performance to
                define and drive the business strategy.
              </li>
              <li>
                Financial forecasting to track against KPI’s and define budgets.
              </li>
              <li>
                Created a vast array of analytical dashboards and toolkits to
                analyse sales, stock and advertising performance.
              </li>
              <li>
                Analysed previous sales data to create the purchase orders for
                the 2018 sales season.
              </li>
              <li>
                Communicated with multiple foreign suppliers to create purchase
                orders, organise container shipment schedules and all other
                aspects of shipping logistics.
              </li>
              <li>
                Designed and implemented UI improvements in the form of “colour
                swatches” for the main three Lazy Susan websites. (Since
                surpassed due to new website design)
              </li>
              <li>
                Worked with, and managed, two digital marketing agencies, to
                optimise ad spend and create new digital marketing campaigns and
                strategies.
              </li>
              <li>
                Took the lead on software research projects and spoke on behalf
                of Lazy Susan to multiple development agencies to scope and
                specify projects.
              </li>
              <li>
                Provided training to members of staff on a range of technical
                solutions.
              </li>
              <li>
                Implemented product data feeds from the Magento CMS to external
                service providers and platforms.
              </li>
              <li>
                Automated live stock and sales dashboards as well as weekly
                stock and sales price tracking using Google Apps Scripts.
              </li>
              <li>
                Automated weather forecast data extractions using Google Apps
                Scripts and the DarkSky API.
              </li>
            </ul>

            <h4>
              President - Southampton University Mountaineering Club (2015-16)
            </h4>
            <ul>
              <li>
                Managed, supervised and was responsible for the continual
                running and administration of the club.
              </li>
              <li>
                Managed and worked in conjunction with the other eleven
                committee members to maintain high levels of club activity and
                membership engagement.
              </li>
              <li>
                Assisted the treasurer in pricing structure changes to ensure
                future financial viability.
              </li>
              <li>
                As the principal face of the club, I took care to welcome new
                members, through speaking and organising events such as; the
                Fresher’s Presentation, the AGM and created the climbing varsity
                competition.
              </li>
            </ul>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>
          Some of the technologies I've worked with
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CodeImages className="small-screen" />
        </div>
      </Layout>
    );
  }
}

export default Resume;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
