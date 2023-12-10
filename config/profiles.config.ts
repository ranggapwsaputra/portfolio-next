import type { SvgProps } from '@components/Icon';
import { MediumSvg } from '@components/Icon/Medium';
import { LinkedInSvg } from '@components/Icon/LinkedIn';
import { GithubSvg } from '@components/Icon/Github';
import { TwitterSvg } from '@components/Icon/Twitter';

export type Profile = {
  to: string;
  label: string;
  icon?: React.FC<SvgProps>;
};

export const TwitterHandle = '@ranggapwsaputra';

export const socialProfiles: Profile[] = [
  {
    to: 'https://www.linkedin.com/in/ranggapwsaputra/',
    label: 'LinkedIn',
    icon: LinkedInSvg,
  },
  {
    to: 'https://github.com/ranggapwsaputra/',
    label: 'Github',
    icon: GithubSvg,
  },
  {
    to: 'https://twitter.com/@ranggapwsaputra',
    label: 'Twitter',
    icon: TwitterSvg,
  },
  {
    to: 'mailto:email@ranggapwsaputra.id',
    label: 'Email',
  },
];
