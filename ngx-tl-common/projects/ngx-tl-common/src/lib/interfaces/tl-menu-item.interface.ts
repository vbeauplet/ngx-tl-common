export interface ITlMenuItem {
  id: string,
  label: string,
  icon: string,
  route?: string,
  subItems?: ITlMenuItem[],
  badgeNumber?:number,
  badgeIcon?:string
}
