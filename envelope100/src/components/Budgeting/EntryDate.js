

function EntryDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="entry-date">
      <div className="entry-date__month">{month}</div>
      <div className="entry-date__year">{year}</div>
      <div className="entry-date__day">{day}</div>
    </div>
  );
}

export default EntryDate;