import { Component, ComponentType } from 'react'
import { IRequirePubProps, RequirePub } from './RequirePub'

export function withRequirePub<Props>(Wrapper: ComponentType<Props>, props?: Omit<IRequirePubProps, 'children'>) {
  // eslint-disable-next-line react/display-name
  return class extends Component<Props> {
    render() {
      return (
        <RequirePub to={props?.to}>
          <Wrapper {...this.props} />
        </RequirePub>
      )
    }
  }
}
