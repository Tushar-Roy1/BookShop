import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
  <>
  <div className='mt-4 my-3 p-3 mx-8'>
  <div className="h-5/6 card bg-base-100 w-72 h-70 shadow-xl  cursor-pointer hover:scale-105 duration-150 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline px-2 py-1 cursor-pointer hover:bg-pink-600 duration-300 hover:text-white ">Buy Now</div>
    </div>
  </div>
</div>
</div>
  </>
  )
}

export default Cards