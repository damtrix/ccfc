'use client';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const CardDefault = () => {
  return (
    <Card className='mt-6 w-52'>
      <CardHeader className='relative h-32'>
        <img
          src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          alt='card-image'
        />
      </CardHeader>
      {/* <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          UI/UX Review Check
        </Typography>
        <Typography></Typography>
      </CardBody> */}
      <CardFooter className=''>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default CardDefault;
