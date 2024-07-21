import React from 'react'
import '../NewCollection/NewCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className="new-collections">
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => (
          <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </div>
  )
}

export default NewCollection
