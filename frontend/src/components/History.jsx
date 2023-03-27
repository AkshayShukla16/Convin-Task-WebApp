import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHistoryList } from '../redux/actions/HistoryAction'
import Paper from '@mui/material/Paper';
import { Alert, Grid, Link, Typography } from '@mui/material';

const History = () => {

    const dispatch = useDispatch();
    const HistoryList = useSelector(state => state.getHistoryList)

    useEffect(() => {
        dispatch(getHistoryList());
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <Typography variant='h6' sx={{ padding: "4px 0" }}>History</Typography>
                {
                    HistoryList?.HistoryList?.length > 0
                        ? HistoryList?.HistoryList?.map(list => {
                            return <Paper key={list._id} variant="outlined" square sx={{ p: 1.5 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='subtitle2'>{list.cardName}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2'>
                                           Created by: {'Akshay Shukla || '}
                                           Time: {list.hours}:{list.mintues}:{list.seconds}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {
                                            list.linkType === "mp4"
                                                ? <Link variant='body2' href={list.link} target="_blank">Video Link</Link>
                                                : <Link variant='body2' href={list.link} target="_blank">Audio Link</Link>
                                        }


                                    </Grid></Grid>
                            </Paper>
                        })
                        :
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Alert icon={false} severity="info" sx={{ justifyContent: "center", width: "fit-content" }}>
                                No History Available
                            </Alert>
                        </Box>
                }

            </Container>
        </>
    )
}

export default History