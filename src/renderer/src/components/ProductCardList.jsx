import ProductCard from './ProductCard'
import '../assets/ProductCardList.css'

const meals = [
  {
    id: 1,
    name: "Big Mac Combo Meal",
    price: "32",
    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202307_8936_EVM_M_BigMac_Coke_1564x1564"
  },
  {
    id: 2,
    name: "Chicken McNuggets Meal",
    price: "28",
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Mc-Nuggets-9-pcs-ry-0824:product-header-desktop?wid=829&hei=455&dpr=off"
  },
  {
    id: 3,
    name: "Quarter Pounder Meal",
    price: "35",
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Quarter-Pounder-ry-0824:product-header-desktop?wid=829&hei=455&dpr=off"
  },
  {
    id: 4,
    name: "McChicken Meal",
    price: "25",
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-McChicken-ry-0824:product-header-desktop?wid=829&hei=455&dpr=off"
  },
  {
    id: 5,
    name: "Filet-O-Fish Meal",
    price: "30",
    image: "https://s7d1.scene7.com/is/image/mcdonalds/filetofishmeal:product-header-desktop?wid=830&hei=456&dpr=off"
  },
  {
    id: 6,
    name: "Happy Meal",
    price: "18",
    image: "https://s7d1.scene7.com/is/image/mcdonalds/happy-meal-chicken-burger-with-fries-ry-v1:product-header-desktop?wid=829&hei=455&dpr=off"
  }
];

export default function ProductCardList({ onProductButtonClick }) {
  return (
    <>
      <div className="ProductCardList">
        {meals.map((meal) => (
          <ProductCard 
            key={meal.id}
            meal={meal}
            onButtonClick={() => onProductButtonClick(meal)}
          />
        ))}
      </div>
    </>
  )
}