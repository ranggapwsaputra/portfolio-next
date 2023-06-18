import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';

export const generateTweetUrl = (
  matter: EnrichedBlogPostMatter | EnrichedProjectMatter
) => {
  const twitterUrl = 'https://twitter.com/intent/tweet';

  if (matter.path.includes(MDXContentType.Project)) {
    const projectMatter = matter as EnrichedProjectMatter;
    return `${twitterUrl}?text=${projectMatter.name} by Rangga Saputra&url=https://ranggapwsaputra.id${projectMatter.path}`;
  }

  if (matter.path.includes(MDXContentType.BlogPost)) {
    const blogPostMatter = matter as EnrichedBlogPostMatter;
    return `${twitterUrl}?text=${blogPostMatter.title} by Rangga Saputra&url=https://ranggapwsaputra.id${blogPostMatter.path}`;
  }

  return twitterUrl;
};
