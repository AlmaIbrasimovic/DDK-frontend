import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,

    boxShadow: 3,
    borderRadius: '13px'
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#d32f2f'
  }
});

const PojamKartica = ({
    className,
    sadrzaj,
    title,
    ...rest
  }) => {
    const classes = useStyles();

  return (
    <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {sadrzaj}
        </Typography>
      </CardContent>
    </Card>
  );
}

PojamKartica.propTypes = {
    className: PropTypes.string,
    sadrzaj: PropTypes.string, 
    title: PropTypes.string,
};
export default PojamKartica;