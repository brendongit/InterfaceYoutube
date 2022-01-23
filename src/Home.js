import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Toolbar, ListSubheader, IconButton, Grid, Hidden, Typography, Button, Paper, InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoice from '@mui/icons-material/KeyboardVoice';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import AppsIcon from '@mui/icons-material/Apps';
import MoreVert from '@mui/icons-material/MoreVert';
import VideoCall from '@mui/icons-material/VideoCall';

import Whatshot from '@mui/icons-material/Whatshot';
import Cottage from '@mui/icons-material/Cottage';
import Subscriptions from '@mui/icons-material/Subscriptions';

import History from '@mui/icons-material/History';
import VideoLibrary from '@mui/icons-material/VideoLibrary';

import AddCircle from '@mui/icons-material/AddCircle';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 29,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  MenuIcon: {
    paddingRight: theme.spacing(5),
    paddingleft: theme.spacing(6),
  },
  icons: {
    width: theme.spacing(12),
    heght: theme.spacing(12),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const videos = [
  {
    id: 1,
    title:
      'React JS | Recriando o Youtube pt #01',
    channel: 'Brendon Oliveira',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
    'React JS | Recriando o Youtube pt #02',
    channel: 'Brendon Oliveira',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'React JS | Recriando o Youtube pt #03',
    channel: 'Brendon Oliveira',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'React JS | Recriando o Youtube pt #04',
    channel: 'Brendon Oliveira',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'React JS | Recriando o Youtube pt #05',
    channel: 'Brendon Oliveira',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'React JS | Recriando o Youtube pt #06',
    channel: 'Brendon Oliveira',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'React JS | Recriando o Youtube pt #07',
    channel: 'Brendon Oliveira',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'React JS | Recriando o Youtube pt #08',
    channel: 'Brendon Oliveira',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home() {
  const classes = useStyles();
  const drawerWidth = 240;

  return(
     <div className={classes.root}>
      <AppBar elevation={0} color="inherit" className={classes.appBar} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.MenuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="/images/preto.png" alt="logo" className={classes.logo} />  
         
          {/* BARRA DE PESQUISA */}
            <Box sx={{ marginLeft:"120px", width:'70%', display: "flex", justifyContent: "center", allignItems: "center"}}>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar"
        inputProps={{ 'aria-label': 'Pesquisar' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="terciary" sx={{ p: '10px' }} aria-label="KeyboardVoice">
        <KeyboardVoice />
      </IconButton>
    </Paper>
            </Box>
            {/* BARRA DE PESQUISA */}

          <div className={classes.grow}/>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <VideoCall />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
          <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
      <Box  display="flex">
        <Hidden mdDown>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  {<Cottage />}
                </ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Início'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                  {<Whatshot />}
                </ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Em alta'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                  {<Subscriptions />}
                </ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Inscrições'} />
              </ListItem>
          </List>
          <Divider /> 
          <List>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                  <VideoLibrary />
                </ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                  <History />
                </ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Histórico'} />
              </ListItem>
            </List>  
            <Divider />   
            <Box p={8}>
              <Typography variant='body2' >
                  Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<AccountCircle />}
                  >
                    Fazer login
                </Button>
              </Box>
            </Box>
            <Divider />
                {/* list */}
            <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader} 
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
                  {/* list */}
        </Box>
      </Drawer>
      </Hidden>
      <Box p={8}>
        <Toolbar />
        <Typography
          variant='h5'
          color='textPrimary'
          style={{ fontWeight:600 }}
          >
            Recomendados
        </Typography>  

        <Grid container spacing={4}>
          {
            videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>

                  <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>

              </Grid>
            ))
          }
        </Grid>

      </Box>
      </Box>

    </div>
  );
}

export default Home;
