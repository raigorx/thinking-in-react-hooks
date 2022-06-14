export function SearchBar(props) {
  const { filterText, setFilterText, inStockOnly, setInStockOnly } = props

  const handleChangeFilterText = (evt) => {
    setFilterText(evt.target.value)
  }

  const handleChangeStockOnly = (evt) => {
    setInStockOnly(evt.target.checked)
  }

  return (
    <div className="search-bar-container">
      <input onChange={handleChangeFilterText} value={filterText} className="block" type="text" placeholder="Search..." required />
      <label className="block">
        <input onChange={handleChangeStockOnly} checked={inStockOnly} type="checkbox" />
        Only show products in stock
      </label>
    </div>
  )
}
