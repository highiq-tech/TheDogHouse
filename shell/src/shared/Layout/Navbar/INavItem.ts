// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface INavItem {
  label: string
  subLabel?: string
  children?: Array<INavItem>
  href?: string
}
