import PortraitImage from '../../public/images/PhotoServices.png';

import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { SocialProfiles } from '@components/SocialProfiles';
import { Link } from '@components/Link';

const StyledAboutSection = styled('section', {
  background: '$surface50',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '2rem',
    py: '5rem',

    '@md': {
      py: '6rem',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '4rem',
      rowGap: 'unset',
    },

    '.about-description': {
      marginBottom: '1rem',
      '.title': { marginBottom: '1.5rem' },
      p: { marginBottom: '1rem' },
    },

    '.about-picture': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      rowGap: '1rem',
    },
  },
});

export const AboutSection: React.FC = () => {
  return (
    <StyledAboutSection id="about-section">
      <ContentWrapper>
        <div className="about-description">
          <h3 className="title">A person who cares about the cyber security.</h3>
          <p>
          For me, cyber security has become an increasingly important issue in today's digital era. This is the reason why I started focusing on cyber security while working as Cyber Security Advisor.
          </p>
          <p>
          Nowadays, I work in a luxury hotel as a Head of Information Technology. Besides focusing on cyber security, I also develop modern front-end applications and websites.
          </p>
          <p>
          So if you are looking for a hands-on advisor who cares about users,{' '} <Link to="#contact-section">let’s put our heads together</Link>!
          </p>
        </div>
        <div className="about-picture">
          <Picture
            src={PortraitImage}
            placeholder="blur"
            alt="Rangga Saputra Portrait"
            height="22rem"
            width="20rem"
            className="portrait"
          />
          <SocialProfiles />
        </div>
      </ContentWrapper>
    </StyledAboutSection>
  );
};
