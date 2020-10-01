import React, { ReactNode } from 'react'

interface CarModel {
  modelName: string
  overlayNode: ReactNode
  sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>
  registeredModels: CarModel[]
  registerModel: (model: CarModel) => void
  unRegisterModel: (modelName: string) => void
  getModelByName: (modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)