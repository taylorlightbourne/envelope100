import BinderItem from "./Budgeting/BinderItem";
import EnvelopeItem from "./Budgeting/EnvelopeItem";
import "./BreakdownSheet.css";

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
            <div className="header">
                <h1>Amount Breakdown</h1>
            </div>
            <div className="binders-and-envelopes">
                <div>
                    <BinderItem title={binder[0].title} />
                </div>
                <div id="envelope-amounts">
                    <EnvelopeItem name={envelope[0].name} />
                    <input className="breakdown-input-amount"></input>
                </div>
            </div>
            <br></br>
            <div className="breakdown-cash-request">
                <button id="breakdown-links">Cash Breakdown Request</button>
            </div>
            <br></br>
            <div className="breakdown-tobinder-buttons">
                <button id="breakdown-links">Auto Add to Binders</button>
                <br></br>
                <button id="breakdown-links">Manually Add to Binders</button>
            </div>
        </div>
    )
}

export default BreakdownSheet;