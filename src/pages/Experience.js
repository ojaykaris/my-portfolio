import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="verical-timeline-element--education"
          date="2016-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kogi State University Anyigba, Kogi State
          </h3>
          <p>Bachelor of science (Ed)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verical-timeline-element--education"
          date="2009-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government Science Secondary School, Kogi State
          </h3>
          <p>Senior Secondary School Certificate (SSCE)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verical-timeline-element--education"
          date="2020-2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern Front End Developer - SparkPay
          </h3>
          <p>Replicated various pages of the app</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verical-timeline-element--education"
          date="2022-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Front End Developer - PayEasy
          </h3>
          <p>Developed the front end infastructure for project</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
