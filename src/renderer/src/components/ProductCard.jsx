import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Chip from '@mui/joy/Chip'
import Typography from '@mui/joy/Typography'

export default function ProductCard({meal, onButtonClick }) {
  return (
    <Card sx={{ width: 0.25, maxWidth: '100%', boxShadow: 'lg', margin: 1 }}>
      <CardOverflow>
        <AspectRatio ratio={1 / 1} sx={{ minWidth: 200 }}>
          <img
            src={meal.image}
            alt={meal.name}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-lg">{meal.name}</Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Special offer
            </Chip>
          }
        >
          {meal.price} SAR
        </Typography>
        <Typography level="body-sm">(Ends By 29/11)</Typography>
      </CardContent>
      <CardOverflow>
        <Button onClick={onButtonClick} variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  )
}
