import StickyHeader from './StickyHeader'
import ProductCardList from './ProductCardList'
import Footer from './Footer'
import { useState } from 'react'

export default function Home({orderNumber, incrementOrderNumber}) {
  const [selectedCount, setSelectedCount] = useState(0)

  const handleProductButtonClick = () => {
    setSelectedCount(selectedCount + 1)
  }

  return (
    <>
      <StickyHeader title="Order Menu" />
      <ProductCardList onProductButtonClick={handleProductButtonClick} />
      <Footer
        selectedCount = {selectedCount}
        orderNumber={orderNumber}
        incrementOrderNumber={incrementOrderNumber}
      />
    </>
  )
}
