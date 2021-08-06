import EntryDate from'./EntryDate';

function EntryItem(props) {
    return (
        <div className='entry-item'>
        <EntryDate date={props.date} />
        <div className='entry-item__note'>
          <h2>{props.note}</h2>
          <div className='entry-item__addamount'>Add: ${props.addamount}</div>
          <div className='entry-item__subtractamount'>Deduct: ${props.subtractamount}</div>
          <div className='entry-item__total'>Total: ${props.total}</div>
        </div>
      </div>
    );
  }
  
  export default EntryItem;