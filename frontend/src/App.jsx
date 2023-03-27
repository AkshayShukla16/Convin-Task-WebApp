import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Buckets from './components/Buckets'
import Header from './components/Header'
import History from './components/History'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { getBucketList } from './redux/actions/BucketListAction.jsx'

function App() {

  const dispatch = useDispatch();
  const BucketList = useSelector(state => state.getBucketList);

  useEffect(() => {
    dispatch(getBucketList());
  }, [])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Box sx={{ marginTop: "64px" }}>
              {
                BucketList?.BucketList?.map((list, index) => {
                  return <Buckets key={index} list={list} />
                })
              }
            </Box>
          } />
          <Route path='/history' element={
            <Box sx={{ marginTop: "72px" }}>
              <History />
            </Box>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
