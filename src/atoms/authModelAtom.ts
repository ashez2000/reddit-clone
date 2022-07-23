import { atom } from 'recoil'

export interface IAuthModel {
  isOpen: boolean
  view: 'login' | 'signup' | 'forgot'
}

const defaultAuthModel: IAuthModel = {
  isOpen: false,
  view: 'login',
}

export const authModelAtom = atom<IAuthModel>({
  key: 'authModel',
  default: defaultAuthModel,
})
