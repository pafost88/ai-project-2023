import './billing.css';
import '../../../assets/styles/main.css';

export default function ProfileBilling() {
    return (
        <div className="billing-inner">
            <div className="billing-card">
                <div className="card-header">
                    <span className='subheadline-sh1-bold'>Payment Method</span>
                </div>
                <div className="card-content">
                    <span className="green-label">Add Payment Method</span>
                </div>
            </div>
            <div className="billing-card">
                <div className="card-header">
                    <span className='subheadline-sh1-bold'>Plans</span>
                </div>
                <div className="card-content plan-content">
                    <span className='regular-body-2'>No active subscriptions at the moment</span>
                    <span className='green-label'>Select Plan</span>
                </div>
            </div>
        </div>
    )
}