import EnvelopeItem from './EnvelopeItem';

function EnvelopeList() {
  const envelope = [
    {
        id: 'e1',
        name: 'Rent',
        total: 50.00,
    },
    {
        id: 'e2',
        name: 'Utilities',
        total: 50.560,
    },
    {
        id: 'e3',
        name: 'Car Note',
        total: 75.40,
    },
    {
        id: 'e1',
        name: 'Phone Bill',
        total: 98.00,
    },   
  ];

  return (
    <div>
      <h2>Fixed</h2>
      {/* Add the + button to create new envelope */}
      {/* add onclicks to take you to more details */}
      <EnvelopeItem
        name={envelope[0].name}
        total={envelope[0].total}
      />
      <EnvelopeItem
        name={envelope[1].name}
        total={envelope[1].total}
      />
      <EnvelopeItem
        name={envelope[2].name}
        total={envelope[2].total}
      />
      <EnvelopeItem
        name={envelope[3].name}
        total={envelope[3].total}
      />
    </div>
  );
}

export default EnvelopeList;