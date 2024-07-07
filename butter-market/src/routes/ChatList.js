import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Header from '../components/Header';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    backgroundColor: 'red',
  },
}));

function ChatList() {
  return (
    <>
      <Header />

      <Container maxWidth="md" sx={{ mt: 10 }}>
        <List sx={{ width: 1, bgcolor: 'background.paper' }}>
          <ListItem alignItems="center" sx={{ mb: 3, bgcolor: '#F7D99F', height: 120, borderRadius: '15px' }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60, mr: 3 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
            <Box sx={{ border: ' 1px solid red', textAlign: 'left', maxWidth: '100px', }}>
              <ListItemText
                primary="오후 11:00"
              />
              <StyledBadge badgeContent={4} color="secondary" sx={{ width: '10px' }}>
              </StyledBadge>
            </Box>
          </ListItem>
          <ListItem alignItems="center" sx={{ mb: 3, bgcolor: '#F7D99F', height: 120, borderRadius: '15px' }}>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 60, height: 60, mr: 3 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="center" sx={{ mb: 3, bgcolor: '#F7D99F', height: 120, borderRadius: '15px' }}>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 60, height: 60, mr: 3 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="center" sx={{ mb: 3, bgcolor: '#F7D99F', height: 120, borderRadius: '15px' }}>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 60, height: 60, mr: 3 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
    </>
  );
}

export default ChatList;