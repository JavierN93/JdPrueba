export interface TimelineEvent {
  label: string;
  text: string;
  image: string;
  width?: number;
  height?: number;
  blur?: string;
}

export interface Timeline {
  label?: string;
  events: TimelineEvent[];
}
