import {action, observable} from 'mobx'
import Base from './base'

export default class AppStore extends Base {

  @observable title: string = ''

  @observable isMobile: boolean = true

  @action setTitle(title: string) {
    this.title = title
  }

  @action setIsMobile(isMobile: boolean) {
    this.isMobile = isMobile
  }
}
