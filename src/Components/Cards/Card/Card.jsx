import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Card.module.css';
import classNames from 'classnames';
import CountUp from 'react-countup';

const CardComponent = ({
   className,
   cardTitle,
   value,
   lastUpdate,
   cardSubtitle,
}) => {
   return (
      <Grid
         item
         xs={12}
         md={3}
         component={Card}
         className={classNames(styles.card, className)}
      >
         <CardContent>
            <Typography color="textSecondary" gutterBottom>
               {cardTitle}
            </Typography>
            <Typography variant="h5" component="h2">
               <CountUp start={0} end={value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
               {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
               {cardSubtitle}
            </Typography>
         </CardContent>
      </Grid>
   );
};

export default CardComponent;
