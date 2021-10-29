import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import useStyles from './styles/navbar_styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function Cutlet() {
  const classes = useStyles()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 0',
      }}
    >
      <Card className={classes.cardroot}>
        <CardContent>
          <Typography
            className={classes.cardtitle}
            color='textSecondary'
            gutterBottom
          ></Typography>
          <Typography variant='h5' component='h2'>
            <b>Deficiency Detection</b>
          </Typography>
          <Typography style={{ margin: '15px 15px' }} color='textSecondary'>
            We will detect if your crops are infected by some disease or not by
            inspecting the pictures which we will get from the client!
          </Typography>
          <Button size='large'>Read More</Button>
          <Link to='/diseasedetection'>
            <Button variant='contained' size='large'>
              Explore!
            </Button>
          </Link>
        </CardContent>
        <img
          src='https://image.freepik.com/free-photo/farmer-holds-rice-hand_1150-6063.jpg'
          alt='image'
          width='200px'
          height='auto'
        />
      </Card>
    </div>
  )
}

export default Cutlet
