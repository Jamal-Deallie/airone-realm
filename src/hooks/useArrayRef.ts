import { useRef, MutableRefObject } from 'react';

export default function useArrayRef(): [MutableRefObject<any[]>, (ref: any) => void] {
  const refs = useRef<any[]>([]);
  refs.current = [];
  return [refs, (ref: any) => ref && refs.current.push(ref)];
}
