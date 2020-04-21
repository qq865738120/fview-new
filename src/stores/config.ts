import appStore from './app'
import carStore from './car'
import Base from './base'

const config: { [key: string]: typeof Base } = {
  appStore,
  carStore
}

export default config
