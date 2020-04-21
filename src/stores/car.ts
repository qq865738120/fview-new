import {action, observable} from 'mobx'
import Base from './base'

export default class CarStore extends Base {

  @observable outData: any = {}

  @action setOutData(outData: any) {
    this.outData = outData
  }
}
