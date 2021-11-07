import React from 'react'

export const AppTransaction = () => {
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Label</label>
                    <input type="text" placeholder="Enter label..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">(<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense, +income]</label>
                    <input type="number" placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
        
    )
}
