export function ProductRow({ product }) {
  const { name, price, stocked } = product

  return (
    <tr>
      <td style={{color: !stocked ? 'red': 'initial'}}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}
