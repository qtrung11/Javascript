
/* 
chỉ sử dụng index của mảng làm key khi list item chỉ show (not edit, remove)

*/

import React from "react";
import Button from "../../components/atoms/button";

interface ProductProps {
  id: number,
  title: string
}

function List() {
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  function addProduct() {
    const item = {
      id: Date.now(),
      title: 'Product ' + Date.now()
    }
    // setProducts(prevState => [...prevState, item]); // add new item
    setProducts(prevState => {
      return [...prevState, item]
    })
  }
  
  console.log('ConditionalRendering product: ', products)
  return (
    <div>
      <h1 className="text-2xl font-bold">List & Key</h1>  
      <div>
        {products.length > 0 ? (
          <div>
            {products.map((product, index) => {
              const key = product.id + index + Date.now();
              return (
                <div key={key}>
                  Title: {product.title} - {key}
                </div>
              )
            })}
          </div>
        ) : (
          <div>
            Please choose item
          </div>
        )}
      </div>
      <Button onClick={addProduct}>Add Product</Button>

    </div>
  )
}

export default List