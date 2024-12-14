import StickyHeader from './StickyHeader'
import ProductCardList from './ProductCardList'
import Footer from './Footer'
import { useState } from 'react'

export default function Home({orderNumber, incrementOrderNumber}) {
  const [selectedCount, setSelectedCount] = useState(0)
  const [selectedMeals, setSelectedMeals] = useState([])


  const handleProductButtonClick = (meal) => {
    setSelectedMeals(prev => ({
      ...prev,
      [meal.id]: {
        ...meal,
        quantity: (prev[meal.id]?.quantity || 0) + 1
      }
    }))
    setSelectedCount(prevCount => prevCount + 1)
  }

  const formatOrderDetails = () => {
    return Object.values(selectedMeals)
      .map(meal => `${meal.quantity}x ${meal.name}`)
      .join('\n')
  }

  return (
    <>
      <StickyHeader title="Order Menu" />
      <ProductCardList onProductButtonClick={handleProductButtonClick} />
      <Footer
        selectedCount = {selectedCount}
        selectedMeals={formatOrderDetails()}
        orderNumber={orderNumber}
        incrementOrderNumber={incrementOrderNumber}
      />
    </>
  )
}
