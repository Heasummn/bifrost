import styled from 'styled-components';
import Header from '../components/Header/Header';
import Text from '../components/Text/Text';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/Content';
import Transition from '../components/Transition/Transition';
import Committee from '../components/Committee/Committee';
import social from '../stories/assets/social.jpg';
import capitalone from '../stories/assets/capitalone.png';
import Footersection from '../sections/Footersection';
import instagram from '../stories/assets/instagram.png';
import reflections from '../stories/assets/reflections.jpg';
import hackillinoislogo from '../stories/assets/hackillinoislogo.png';
import infrastructure from '../stories/assets/infrastructure.jpeg';
import LeadSection from '../sections/about/LeadershipSection';

const Main = styled.main`
  width: 1100px;
  margin: 0 auto;
`;

const PaddedNav = styled(Navbar)`
  padding-bottom: 20px;
`;

const AboutHeader = styled(Header)`
  margin-top: 00px;
  padding-top: 0px;
  margin-bottom: 20px;
`;

const CommitteeHeader = styled(Header)`
  margin-bottom: 10px;
`;

const About = () => {
  return (
    <>
      <PaddedNav />
      <Transition to="#fff" />
      <Content as="section">
        <AboutHeader level={1}>About us</AboutHeader>
        <Text>
          ACM@UIUC is a student chapter of the Association for Computing
          Machinery, a professional society dedicated to advancing human
          capabilities through information technology. Founded in 1947, the
          Association for Computing Machinery (ACM) is the largest and oldest
          international scientific and educational computer society in the
          industry today. Organized only a year after the unveiling of ENIAC,
          the first general purpose electronic computer, ACM was established by
          mathematicians and electrical engineers to advance the science and
          application of information technology.
        </Text>
        <Text>
          ACM@UIUC is a group of dedicated people who are interested in
          exploring the possibilities of computers and learning more about how
          to use and develop them. ACM is divided into Special Interest Groups,
          or SIGs, which focus on specific interest areas in computer science
          and computing. Each SIG holds its own meetings and is responsible for
          organizing its own activities and determining its own purpose. Several
          SIGs are project-based, with the majority of their activities
          dedicated to computing projects in their area of interest, often
          presented at Engineering Open House. Some SIGs run workshops and tech
          talks to discuss topics related to their interest group. To find out
          more about our SIGs, visit the home page and attend a meeting.
        </Text>
        <Text>
          ACM also hosts several general events, including social activities
          such as picnics, swim nights, activity weeks, game nights, outreach
          activities such as ACM Open House, Student Lecture Series, and
          educational activities for high school and middle school students, and
          the annual Reflections | Projections conference. All ACM activities
          and SIG meetings are open to the entire University community,
          regardless of computer experience and background.
        </Text>
        <Text>
          Executive meetings occur every other week, at which the direction of
          ACM is defined. Everyone is welcome to attend and make suggestions for
          new ACM groups or events. Decisions about such events and other
          important ACM matters are also made at these meetings.
        </Text>
        <Text>ACM@UIUC is a registered 501(c)(3) nonprofit organization.</Text>
        <Header level={1}>Leadership</Header>
        <LeadSection />
        <Header level={1} id="committees">
          Committees
        </Header>
        <a
          href="https://www.reflectionsprojections.org/"
          style={{ textDecoration: 'none' }}
        >
          <CommitteeHeader
            level={3}
            id="reflections"
            style={{ color: '#4577F8' }}
          >
            Reflections | Projections
          </CommitteeHeader>
        </a>
        <Committee
          image={reflections}
          title="We provide a forum to share and learn about progress 
                in computer science, with industry and academia 
                tech talks, workshops and events 
                for attendees, Mechmania, and Diversity × Tech."
          position='Chairs:'
          people="Garima Sharma, Sumedh Vaidyanathan"
          email={['garimas2@illinois.edu', 'sumedhv2@illinois.edu']}
        />
        <a href="https://hackillinois.org/" style={{ textDecoration: 'none' }}>
          <CommitteeHeader
            level={3}
            id="hackillinois"
            style={{ color: '#4577F8' }}
          >
            Hack Illinois
          </CommitteeHeader>
        </a>
        <Committee
          image={hackillinoislogo}
          title="HackIllinois is the premier collegiate hackathon. 
                  With over 1000 attendees and 50 mentors in 2019, the hackathon 
                  has become one of the largest and most well-regarded in the 
                  nation."
          position='Chairs:'
          people="Jonathan Gao, Deeya Bodas"
          email={['jg48@illinois.edu', 'deeyaab2@illinois.edu']}
        />
        <CommitteeHeader level={3}>Corporate</CommitteeHeader>
        <Committee
          image={capitalone}
          title="The corporate team handles communication with ACM@UIUC's sponsors, 
                including Numerade, IMC, and more."
          position='Chair:'
          email="yipengy2@illinois.edu"
          people="Yipeng Yang"
        />
        <CommitteeHeader level={3}>Social</CommitteeHeader>
        <Committee
          image={social}
          title="The social team organizes fun events for ACM@UIUC such as 
                picnics, activity weeks, game nights, and Happy Hour."
          position='Chairs:'
          people="Sujit Varadhan, Akul Joshi"
          email={['sujitv2@illinois.edu', 'akulj2@illinois.edu']}
        />
        <CommitteeHeader level={3}>Marketing</CommitteeHeader>
        <Committee
          image={instagram}
          title="The marketing team organizes social media and branding for ACM@UIUC."
          position='Chairs:'
          people="Emma Hartman, Minh Duong, Riya Kulkarni"
          email={['emmaih2@illinois.edu', 'minhd2@illinois.edu', 'riyark3@illinois.edu']}
        />
        <CommitteeHeader level={3}>Infrastructure</CommitteeHeader>
        <Committee
          image={infrastructure}
          title="The infra team maintains ACM@UIUC's infrastructure and engineering efforts
                like this website."
          position='Chairs:'
          people="Steven Gao, Ryan Ziegler"
          email={['hongyig3@illinois.edu', 'ryanjz2@illinois.edu']}
        />
      </Content>
      <Footersection />
    </>
  );
};

export default About;
