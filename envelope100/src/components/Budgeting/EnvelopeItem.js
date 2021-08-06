function EnvelopeItem(props) {
  return (
    <div className='envelope-item'>
      <div className='envelope-item__name'>
        <h2>{props.name}</h2>
        <div className='envelope-item__total'>${props.total}</div>
      </div>
    </div>
  );
}

export default EnvelopeItem;