import { NavItem } from "./nav-item";

export let menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard'
  },
  {
    displayName: 'Recargas y Pagos',
    iconName: 'receipt',
    route: 'recargas',
    children: [
      {
        displayName: 'Pago genérico',
        iconName: 'account_balance',
        route: 'recargas/pago-generico'
      },
      {
        displayName: 'Claro',
        iconName: 'account_balance',
        route: 'recargas/claro'
      },
      {
        displayName: 'Movistar',
        iconName: 'account_balance',
        route: 'recargas/movistar'
      },
      {
        displayName: 'Entel',
        iconName: 'account_balance',
        route: 'recargas/entel'
      },
      {
        displayName: 'Bitel',
        iconName: 'account_balance',
        route: 'recargas/bitel'
      },
      {
        displayName: 'DIRECTV',
        iconName: 'account_balance',
        route: 'recargas/directv'
      },
      {
        displayName: 'Flash Mobile',
        iconName: 'account_balance',
        route: 'recargas/flash-mobile'
      }
    ]
  },
  {
    displayName: 'Tickets',
    iconName: 'receipt',
    route: 'tickets',
    children: [
      {
        displayName: 'Luz del Sur - Cell Power',
        iconName: 'account_balance',
        route: 'tickets/luz-del-sur'
      },
      {
        displayName: 'Luz del Sur - Manual',
        iconName: 'account_balance',
        route: 'tickets/luz-del-sur-datos'
      },
      {
        displayName: 'BBVA',
        iconName: 'account_balance',
        route: 'tickets/bbva'
      },
      {
        displayName: 'BCP',
        iconName: 'account_balance',
        route: 'tickets/bcp'
      },
      {
        displayName: 'Interbank',
        iconName: 'account_balance',
        route: 'tickets/interbank'
      },
      {
        displayName: 'Scotiabank',
        iconName: 'account_balance',
        route: 'tickets/scotiabank'
      }/*,
      {
        displayName: 'Cell Power',
        iconName: 'account_balance',
        route: 'tickets/cell-power'
      }*/
    ]
  },
  {
    displayName: 'Depósitos',
    iconName: 'groups',
    route: 'depositos',
    children: [
      {
        displayName: 'Familia',
        iconName: 'face',
        route: 'depositos/familia'
      },
      {
        displayName: 'Roberto',
        iconName: 'face',
        route: 'depositos/roberto'
      },
      {
        displayName: 'Artur',
        iconName: 'face',
        route: 'depositos/artur'
      },
      {
        displayName: 'Mirian Jenny',
        iconName: 'face',
        route: 'depositos/mirian-jenny'
      },
      {
        displayName: 'Luis',
        iconName: 'face',
        route: 'depositos/luis'
      },
      {
        displayName: 'Nelson',
        iconName: 'face',
        route: 'depositos/nelson'
      }
    ]
  }
];