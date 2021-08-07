import BinderItem from "./Budgeting/BinderItem";
import EnvelopeItem from "./Budgeting/EnvelopeItem";

function BreakdownSheet() {
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
        <div className="breakdown-main-container">
                <div className="breakdown-main-contents">
                    <div className="header">
                        <h1>Amount Breakdown</h1>
                    </div>
                    <br></br>
                    <div>
                        <h1>"Binder Name"</h1>
                        <div>
                            <BinderItem title={binder[0].title} />
                        </div>
                        <div>
                            <EnvelopeItem
                            name={envelope[0].name}
                            />
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BreakdownSheet;