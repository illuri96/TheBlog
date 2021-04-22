import React, {useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';


const Home = () => {
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

      return (
         <Container maxWidth="lg">
            <Grow in>
              <Grid container justify="space-between" alignItems="stretch" spacing={4} >
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Grow>
        </Container>
      )};

export default Home;


        