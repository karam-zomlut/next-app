import { parseISO, format } from 'date-fns';

type Parameters = {
  dateString: string;
};

const Date = ({ dateString }: Parameters) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
