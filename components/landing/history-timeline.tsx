import Image from 'next/image';
import { Timeline } from '../../core/types/timeline';

interface Props {
  timeline: Timeline[];
}

export default function HistoryTimeline({ timeline }: Props) {
  return (
    <div className="relative mb-100 mt-50 max-w-1200 mx-auto">
      {timeline.map((group, timelineIndex) => (
        <div key={timelineIndex}>
          <div className="relative flex justify-around flex-col pl-30 md:pl-0 md:flex-row pt-0">
            <span className="point point-start md:left-1/2 top-0" />
            <div className="w-full" />
            <div className="w-full text-primary text-16 font-medium pt-20 pl-20 md:pl-90">
              {group.label}
            </div>
          </div>
          {group.events.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={
                'relative flex justify-around flex-col pl-30 md:pl-0 pt-70 ' +
                (itemIndex % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row')
              }
            >
              <span className="point md:left-1/2 top-70" />
              {!(
                timelineIndex === timeline.length - 1 &&
                itemIndex === group.events.length - 1
              ) && <span className="point-line md:left-1/2" />}
              <div
                className={
                  'flex flex-col items-start md:w-2/5 ' +
                  (itemIndex % 2 === 1 ? 'md:items-start' : 'md:items-end')
                }
              >
                <div className="text-30 font-bold leading-34 h-45 text-primary mb-5">
                  {item.label}
                </div>
                <div
                  className="text-light-500 p-25 rounded-md bg-white shadow-md"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
              <div className="pt-40 md:w-2/5">
                <Image
                  layout="responsive"
                  src={item.image}
                  width={item.width || 930}
                  height={item.height || 668}
                  alt={item.label}
                  placeholder="blur"
                  blurDataURL={item.blur}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
