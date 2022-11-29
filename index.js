import { useMemo, useState } from 'react';

export function useToggle(defaultValue) {
    const [ state, setState ] = useState(defaultValue || false);
    const toggle = () => {
        setState( state => !state ); 
    };

  toggle.toString = () => {
    return String(state);
  }

  toggle.isOpen = () => {
    return state + "" === 'true'
  }

  return useMemo(() => {
    return toggle;
  },[ state ]);
}

export default useToggle;
