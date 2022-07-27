import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '@/app/redux/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
