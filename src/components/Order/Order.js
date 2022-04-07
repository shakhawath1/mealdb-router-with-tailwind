import React from 'react';

const Order = ({ order, removeOrder }) => {


    return (
        <div>
            <h4 className='font-bold text-lg text-center'>Ordered Item: {order.length}</h4>
            {
                order.map(meal => <p>{meal.strMeal}
                    <button onClick={() => removeOrder(meal.idMeal)} className='ml-10'>X</button>
                </p>)
            }
        </div>
    );
};

export default Order;