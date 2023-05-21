import Link from 'next/link';
import IdeaMasonryBlock from './idea-masonry-block';
import IdeaGridBlock from './idea-grid-block';
import CompletenessComparisonBlock from './completeness-comparison-block';

interface Props {
  title: string;
  description: string;
  moreLink: string | null;
  name: string;
  count: number;
}

export default function GenericServiceDetail({
  title,
  description,
  moreLink,
  name,
  count,
}: Props) {
  return (
    <>
      <h3 className="text-23 text-light-500 mb-25 font-medium">{title}</h3>
      <p
        className="text-light-400 mb-35"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="mb-50">
        {(() => {
          if (name === 'complete-transformations') {
            return <CompletenessComparisonBlock name={name} />;
          } else if (name === 'design-services') {
            return <IdeaGridBlock name={name} />;
          } else {
            return <IdeaMasonryBlock name={name} />;
          }
        })()}
      </div>
      <div className="btn-wrapper justify-center">
        {moreLink ? (
          <Link href={moreLink} passHref>
            <button className="btn btn-primary">View More</button>
          </Link>
        ) : (
          ''
        )}
        <Link
          href="https://estimate.jdlandscaping.net/request-estimate/step-1"
          passHref
        >
          <button className="btn btn-primary">Request Estimate</button>
        </Link>
      </div>
    </>
  );
}
