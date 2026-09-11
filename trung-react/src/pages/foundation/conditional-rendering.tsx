
/* &&
- side left is true, then get side right
- side left is false, then get side left

tony && trung -> trung
tony && '' -> ''
tony && trung && react -> react

|| -> get truthly first
tony || trung -> tony
'' || tony || trung -> tony

*/

import React from "react";
import Button from "../../components/atoms/button";

interface ProductProps {
  id: number,
  title: string
}

function ConditionalRendering() {
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
      <h1 className="text-2xl font-bold">conditional rendering</h1>  
      <div>
        {products.length > 0 ? (
          <div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  Title: {product.title}
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

export default ConditionalRendering