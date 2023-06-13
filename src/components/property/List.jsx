import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import useFetchGet from '../../utils/useFetch';

export default function List() {

  const { loginStatus } = useContext(UserContext);
    const navigate = useNavigate()
    useEffect(() =>{
        loginStatus ? navigate('/property') : navigate('/login')
    },[]);
    const data = useFetchGet({})


    return (
      <>
        {/* {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
          <ListGroup key={breakpoint} horizontal={breakpoint} className="">
            <ListGroup.Item>This ListGroup</ListGroup.Item>
            <ListGroup.Item>renders horizontally</ListGroup.Item>
            <ListGroup.Item>on {breakpoint}</ListGroup.Item>
            <ListGroup.Item>and above!</ListGroup.Item>
          </ListGroup>
        ))} */}
      </>
    );
}
