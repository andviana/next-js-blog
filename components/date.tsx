import { parseISO, format } from 'date-fns'

interface IDate {
  dateString: string
}

const Date: React.FC<IDate> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date