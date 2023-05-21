export interface Paginator<T> {
  count: number;
  data: T[];
}

export const PageSizeSmall = 5;
