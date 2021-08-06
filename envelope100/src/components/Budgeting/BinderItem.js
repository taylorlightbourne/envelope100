// import './BinderItem.css';

function BinderItem(props) {
  return (
    <div className='binder-item'>
        <div className='binder-item__title'>
            <h2>{props.title}</h2>
        </div>
    </div>
  );
}

export default BinderItem;