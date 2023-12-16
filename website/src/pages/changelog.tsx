import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import {
  AiFillThunderbolt,
  AiOutlineArrowUp,
  AiOutlineCheck,
} from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';

const timelineStyle: Record<string, VerticalTimelineElementProps> = {
  current: {
    className: 'vertical-timeline-element--work',
    dateClassName: 'text-black',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <AiFillThunderbolt />,
  },
  normal: {
    className: 'vertical-timeline-element--work',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <AiOutlineCheck />,
  },
  start: {
    className: 'vertical-timeline-element--work',
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
    icon: <AiOutlineArrowUp />,
  },
};

function Timeline() {
  return (
    <div className="bg-gray-100">
      <VerticalTimeline>
        <VerticalTimelineElement {...timelineStyle.current} date="now">
          <h3 className="vertical-timeline-element-title">Still Developing</h3>
          <h4 className="vertical-timeline-element-subtitle">never stop</h4>
          <p>
            We have been continuously focusing on exploring the needs in this
            field and growing continuously. Just like you.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement {...timelineStyle.normal} date="2023/11/9">
          <h3 className="vertical-timeline-element-title">Start Alpha Test</h3>
          <p>Invite some people test it</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement {...timelineStyle.start} />
      </VerticalTimeline>
    </div>
  );
}

export default function Changelog(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={'Change Log'} description="Insight into everything">
      <Timeline />
    </Layout>
  );
}