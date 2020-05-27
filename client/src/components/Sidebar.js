import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {GitHub, LinkedIn, Twitter} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
  title: 'Кратко о блоге',
  description:
    'Цель создания данного блога проста - ' +
    'создать доступный извне сайт, на котором можно будет ' +
    'тестировать, что-то из существующих технологий, ' +
    'пробовать внедрять фичи, а так же сохранять ' +
    'полезную информацию в виде постов. Ну и так, для истории...',
  archives: [
    {title: 'Сентябрь 2020', url: '#', __id: 1},
    {title: 'Июль 2020', url: '#', __id: 2},
    {title: 'Июнь 2020', url: '#', __id: 3},
    {title: 'Декабрь 1999', url: '#', __id: 4},
    {title: 'Ноябрь 1999', url: '#', __id: 5},
    {title: 'Октябрь 1999', url: '#', __id: 6},
    {title: 'Сентябрь 1999', url: '#', __id: 7},
    {title: 'Август 1999', url: '#', __id: 8},
    {title: 'Май 1999', url: '#', __id: 9},
    {title: 'Март 1999', url: '#', __id: 10},
    {title: 'Январь 1999', url: '#', __id: 11},
  ],
  social: [
    {name: 'GitHub', icon: GitHub, __id: 1},
    {name: 'LinkedIn', icon: LinkedIn, __id: 2},
    {name: 'Twitter', icon: Twitter, __id: 3},
  ],
};

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Grid item >
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {sidebar.title}
        </Typography>
        <Typography>{sidebar.description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Архив
      </Typography>
      {sidebar.archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.__id}
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Контакты в соцсетях
      </Typography>
      {sidebar.social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.__id}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default Sidebar;
