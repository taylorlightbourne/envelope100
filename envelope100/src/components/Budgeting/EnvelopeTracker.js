import EntryItem from './EntryItem';

function EnvelopeTracker() {
  const tracker = [
    {
      id: 't1',
      date: new Date(2020, 7, 14),
      note: 'tips',
      addamount: 94.12,
      subtractamount: 0,
      total: 1000.00,
    },
    {
      id: 't2',
      date: new Date(2021, 2, 12),
      note: 'HOA Fees',
      addamount: 0,
      subtractamount: 320.00,
      total: 680.00,
    },
    {
      id: 't3',
      date: new Date(2021, 2, 13),
      note: 'HOA Fees',
      addamount: 1500.00,
      subtractamount: 0,
      total: 2180.00,
    },  
  ];

  return (
    <div>
      <h2>Fixed</h2>
      {/* Add the + button to add new entry */}
      <EntryItem
        date={tracker[0].date}
        note={tracker[0].note}
        addamount={tracker[0].addamount}
        subtractamount={tracker[0].subtractamount}
        total={tracker[0].total}
      />
      <EntryItem
        date={tracker[1].date}
        note={tracker[1].note}
        addamount={tracker[1].addamount}
        subtractamount={tracker[1].subtractamount}
        total={tracker[1].total}
      />
      <EntryItem
        date={tracker[2].date}
        note={tracker[2].note}
        addamount={tracker[2].addamount}
        subtractamount={tracker[2].subtractamount}
        total={tracker[2].total}
      />
    </div>
  );
}

export default EnvelopeTracker;