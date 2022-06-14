import { Fragment } from "react"
import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"
import { products } from "../model/products"

function isCategoryUnique(category, categorySet) {
  let isCategoryUnique = !categorySet.has(category)
  categorySet.add(category)
  return isCategoryUnique
}

function productPassFilter (product, filterText, inStockOnly) {
  const isNameMatch = product.name.toLowerCase().includes(filterText.toLowerCase())

  if(inStockOnly && !product.stocked)
    return false

  if(!isNameMatch)
    return false

  return true
}

export function ProductTable({ filterText, inStockOnly}) {
  const categorySet = new Set([])
  return (
    <>
      <table className="product-table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const showProduct = productPassFilter(product, filterText, inStockOnly)
            return (
            <Fragment key={index}>
              {isCategoryUnique(product.category, categorySet) &&
                <ProductCategoryRow category={product.category} />}
              {showProduct && <ProductRow product={product}/>}
            </Fragment>)
          })}
        </tbody>
      </table>
    </>
  )
}
