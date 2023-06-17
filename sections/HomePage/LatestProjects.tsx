import { useMemo } from 'react';

import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { LatestProjects } from '@config/content.config';
import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
// import { Link } from '@components/Link';
// import { TextDecoration } from '@components/TextDecoration';
import { ProjectPreview } from '@components/Project';

const StyledSection = styled('section', {
  '> .latest-projects-list': {
    '> div:not(:last-of-type)': {
      marginBottom: '3rem',
      '@sm': { marginBottom: '4rem' },
      '@md': { marginBottom: '6rem' },
    },
  },

  '> .latest-projects-content': {
    paddingTop: '4rem',
    paddingBottom: '3rem',

    '.description': {
      width: '100%',
      maxWidth: '30rem',

      '.title': { marginBottom: '1.5rem' },
      '.subtitle': { color: '$subtext' },
    },

    '.discover-projects': {
      py: '2rem',

      'a:hover [data-text-decoration] > svg': {
        fill: '$primary250',
        transform: 'rotate(45deg)',
      },
    },
  },
});
