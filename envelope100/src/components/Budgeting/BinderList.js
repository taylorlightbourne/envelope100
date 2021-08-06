import BinderItem from './BinderItem';

function BinderList() {
  const binder = [
    {
        id: 'b1',
        title: 'Fixed',
    },
    {
        id: 'b2',
        title: 'Variable',
    },
    {
        id: 'b3',
        title: 'Debt',
    },
    {
        id: 'b1',
        title: 'Sinking Funds',
    },   
  ];

  return (
    <div>
      <h2>Binders</h2>
      {/* Add the + button to create new binder */}
      {/* add onclicks to take you to envelopes */}
      <BinderItem
        title={binder[0].title}
      />
      <BinderItem
        title={binder[1].title}
      />
      <BinderItem
        title={binder[2].title}
      />
      <BinderItem
        title={binder[3].title}
      />
    </div>
  );
}

export default BinderList;