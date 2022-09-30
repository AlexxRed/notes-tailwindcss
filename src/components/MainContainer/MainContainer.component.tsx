import  { ReactChild } from 'react';

interface ContainerProps {
  children?: ReactChild | ReactChild[];
}

export const Container = ({ children }: ContainerProps) => <div className='flex justify-center flex-col mt-5'>{children}</div>;
