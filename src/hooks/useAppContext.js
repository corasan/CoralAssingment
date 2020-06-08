import { useContext } from 'react';
import AppContext from '../appContext';

export default function useAppContext() {
  return useContext(AppContext);
}
