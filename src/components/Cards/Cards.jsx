import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

function Cards() {

  
    return (
   
        <div className= {styles.container}>

          
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} lg = {2.5} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>  </Typography>
                        <Typography variant="h5"> 
                        <CountUp start={0} end={10000} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" > {100}</Typography>
                        <Typography variant="body2"> </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>  </Typography>
                        <Typography variant="h5"> 
                        <CountUp start={0} end={10000} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" > {100}</Typography>
                        <Typography variant="body2"> </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom></Typography>
                        <Typography variant="h5"> 
                        <CountUp start={0} end={10000} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" > {100}</Typography>
                        <Typography variant="body2"></Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards