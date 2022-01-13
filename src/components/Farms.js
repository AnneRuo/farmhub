import React, { useState, useEffect } from 'react'
import farm1 from './img/farm1.jpg'
import farm2 from './img/farm2.jpg'
import farm3 from './img/farm3.jpg'
import farm4 from './img/farm4.jpg'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Farms = () => {
  const [farms, setFarms] = useState(null)

  const images = {
    1: farm1,
    2: farm2,
    3: farm3,
    4: farm4,
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/v1/farms')
      const json = await response.json()
      setFarms(json)
    }

    fetchData().catch(console.error)
  }, [])

  if (farms === null) {
    return <p>Loading farms...</p>
  }
  return (
    <div>
      <h2>Partner farms</h2>

      {farms.map((farm) => (
        <Card className="farm-card" sx={{ maxWidth: 400 }} key={farm.farm_id}>
          <CardMedia
            component="img"
            height="140"
            image={images[farm.farm_id]}
            alt={farm.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {farm.name}
            </Typography>
            <Typography variant="h7" color="text">
              Location: {farm.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Doggies frogs crickets chirp. In the straw rain barrels. Gourds
              utters at welding equipment a oink oink haybine. Pick up truck
              livestock, pets and storage shed, troughs feed bale manure, is
              garden wheat oats at augers.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Show on map</Button>
            <Button size="small">Contact</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Farms
