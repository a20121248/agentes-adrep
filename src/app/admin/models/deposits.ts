export interface PersonAccountsElement {
    name: string;
    banks: BankAccountsElement[];
  }
  
  export interface BankAccountsElement {
    name: string;
    accounts: AccountElement[];
  }
  
  export interface AccountElement {
    holder: string;
    number: string;
    ammount: number;
  }

export let deposits: PersonAccountsElement[] = [
    {
        name: 'Familia',
        banks: [
            {
                name: 'Scotiabank - Depósito',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '048 7801417', ammount: 15},
                    {holder: 'JAVIER MONZON', number: '048 7801995', ammount: 20},
                    {holder: 'JAVIER MONZON', number: '048 7807729', ammount: 20},
                    {holder: 'LORENA MONZON', number: '048 7795452', ammount: 15},
                    {holder: 'LORENA MONZON', number: '048 7793891', ammount: 20},
                    {holder: 'LORENA MONZON', number: '048 7793909', ammount: 20},
                ]
            },
            {
                name: 'CrediScotia - Depósito',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '245 170153270', ammount: 15},
                    {holder: 'LORENA MONZON', number: '245 170150174', ammount: 20}
                ]
            },
            {
                name: 'Scotiabank - Pago de Tarjeta de Crédito',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '152 3038786241', ammount: 15},
                    {holder: 'LORENA MONZON', number: '152 3038786241', ammount: 15}
                ]
            },
            {
                name: 'BBVA - Depósitos',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '0011-0142-0200931664', ammount: 10},
                    {holder: 'JAVIER MONZON', number: '0011-0814-0208895597', ammount: 15},
                    {holder: 'JAVIER MONZON', number: '0011-0814-0208895678', ammount: 20},
                    {holder: 'JAVIER MONZON', number: '0011-0814-0210871905', ammount: 10},
                    {holder: 'JAVIER MONZON', number: '0011-0814-0210974615', ammount: 15},
                    {holder: 'LORENA MONZON', number: '0011-0057-0243573468', ammount: 10},
                    {holder: 'LORENA MONZON', number: '0011-0057-0268721518', ammount: 15},
                    {holder: 'LORENA MONZON', number: '0011-0814-0214625178', ammount: 20},
                    {holder: 'LORENA MONZON', number: '0011-0814-0214625216', ammount: 10},
                    {holder: 'LORENA MONZON', number: '0011-0999-0200082926', ammount: 15},
                    {holder: 'PERCY MONZON', number: '0011-0135-0201090894', ammount: 10},
                    {holder: 'PERCY MONZON', number: '0011-0814-0210699118', ammount: 15},
                    {holder: 'PERCY MONZON', number: '0011-0814-0210735432', ammount: 20},
                    {holder: 'PERCY MONZON', number: '0011-0814-0210922119', ammount: 10},
                    {holder: 'PERCY MONZON', number: '0011-0814-0210974437', ammount: 15},
                    {holder: 'ZOILA DURAND', number: '0011-0135-0201095004', ammount: 10},
                    {holder: 'ZOILA DURAND', number: '0011-0814-0212411049', ammount: 15},
                    {holder: 'ZOILA DURAND', number: '0011-0814-0212411111', ammount: 20},
                    {holder: 'ZOILA DURAND', number: '0011-0814-0212411138', ammount: 10},
                    {holder: 'ZOILA DURAND', number: '0011-0814-0212411146', ammount: 15},
                ]
            },
            {
                name: 'BBVA - Pago de Tarjeta de crédito',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '4919 0982 4057 9777', ammount: 10},
                    {holder: 'PERCY MONZON', number: '4919 0982 5062 2194', ammount: 15},
                    {holder: 'LORENA MONZON', number: '4919 0982 5062 2251', ammount: 20},
                    {holder: 'LORENA MONZON', number: '4919 **** **** ****', ammount: 10}
                ]
            },
            {
                name: 'Mibanco',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '6021068576', ammount: 20}
                ]
            },
            {
                name: 'Interbank - Depósitos',
                accounts: [
                    {holder: 'JAVIER MONZON', number: '041 3130154392', ammount: 10},
                    {holder: 'JAVIER MONZON', number: '898 3173006952', ammount: 15},
                    {holder: 'JAVIER MONZON', number: '898 3173007398', ammount: 20},
                    {holder: 'LORENA MONZON', number: '898 3186175630', ammount: 20},
                    {holder: 'LORENA MONZON', number: '898 3195932737', ammount: 10},
                    {holder: 'LORENA MONZON', number: '898 3195932753', ammount: 15},
                    {holder: 'ZOILA DURAND', number: '157 3193321296', ammount: 10},
                    {holder: 'ZOILA DURAND', number: '898 3195932788', ammount: 15},
                    {holder: 'ZOILA DURAND', number: '898 3195932818', ammount: 20},
                    {holder: 'PERCY MONZON', number: '898 3233963420', ammount: 20},
                    {holder: 'PERCY MONZON', number: '898 3234606818', ammount: 10},
                    {holder: 'PERCY MONZON', number: '898 3234607636', ammount: 15}
                ]
            },
        ]
    },
    {
        name: 'Roberto Cáceres',
        banks: [
            {
                name: 'BBVA - Depósito',
                accounts: [
                    {holder: 'SILA CUEVA', number: '0011 0145 0200252259', ammount: 10},
                    {holder: 'ROBERTO CACERES', number: '0011 0145 0200253255', ammount: 15},
                    {holder: 'SILA CUEVA', number: '0011 0178 0200513710', ammount: 20},
                    {holder: 'SILA CUEVA', number: '0011 0814 0201691112', ammount: 10},
                    {holder: 'ROBERTO CACERES', number: '0011 0814 0201123297', ammount: 15},
                    {holder: 'ROBERTO CACERES', number: '0011 0814 0200880809', ammount: 20}   
                ]
            },
            {
                name: 'BBVA - Tarjeta de crédito',
                accounts: [
                    {holder: 'SILA CUEVA', number: '5124 0982 4339 2663', ammount: 10},
                    {holder: 'MAXIMO CUEVA', number: '5124 0982 4970 7468', ammount: 15},
                    {holder: 'BELEN CACERES', number: '5124 0982 8769 7795', ammount: 20},
                    {holder: 'LESLY DIONICIO', number: '5124 0982 5013 4248', ammount: 10},
                    {holder: 'ROBERTO CACERES', number: '5124 0982 4333 1505', ammount: 15}
                ]
            },
            {
                name: 'Interbank',
                accounts: [
                    {holder: 'ROBERTO CACERES', number: '152 3038786241', ammount: 15},
                    {holder: 'ROBERTO CACERES', number: '4772 **** **** 1945', ammount: 20},
                    {holder: 'ROBERTO CACERES', number: '152 3040279411', ammount: 20},
                    {holder: 'SILA CUEVA', number: '152 3043042919', ammount: 15},
                    {holder: 'ROBERTO CACERES', number: '898 3201672394', ammount: 20},
                    {holder: 'SILA CUEVA', number: '243 3028012003', ammount: 20},
                    {holder: 'ANA URQUIZO', number: '043 3202664517', ammount: 15},
                    {holder: 'ANA URQUIZO', number: '898 3205130707', ammount: 20},
                    {holder: 'ANA URQUIZO', number: '898 3205130740', ammount: 20},
                    {holder: 'ROBERTO CACERES', number: '5491 6103 7005 9595', ammount: 30},
                    {holder: 'ROBERTO CACERES', number: '3777 **** **** 225', ammount: 30},
                    {holder: 'SILA CUEVA', number: '4772 **** **** 1960', ammount: 30},
                    {holder: 'SILA CUEVA', number: '5491 **** **** 9587', ammount: 30},
                    {holder: 'SILA CUEVA', number: '3777 **** **** 935', ammount: 30}   
                ]
            }
        ]
    },
    {
        name: 'Artur',
        banks: [
            {
                name: 'BBVA',
                accounts: [
                    {holder: 'ARTURO HUAMAN', number: '0011 0317 0200495644', ammount: 15},
                    {holder: 'BRIGITTE SALCEDO', number: '0011 0125 0100036932', ammount: 15},
                    {holder: 'ARTURO HUAMAN', number: '0011 0814 0208944490', ammount: 20},
                    {holder: 'BRIGITTE SALCEDO', number: '0011 0125 0200375521', ammount: 15},
                    {holder: 'ARTURO HUAMAN', number: '0011 0814 0208944547', ammount: 15},
                    {holder: 'BRIGITTE SALCEDO', number: '0011 0317 0200469864', ammount: 20}
                ]
            },
            {
                name: 'Scotiabank',
                accounts: [
                    {holder: 'ARTURO HUAMAN', number: '082 0256980', ammount: 10},
                    {holder: 'BRIGITTE SALCEDO', number: '111 0180740', ammount: 15}
                ]
            },
            {
                name: 'CrediScotia',
                accounts: [
                    {holder: 'ARTURO HUAMAN', number: '251 170075792', ammount: 10},
                    {holder: 'BRIGITTE SALCEDO', number: '023 170058062', ammount: 15}
                ]
            }
        ]
    },
    {
        name: 'Mirian Jenny',
        banks: [
            {
                name: 'BBVA',
                accounts: [
                    {holder: 'MIRIAN JENNY', number: '0011-0814-0212901992', ammount: 15},
                    {holder: 'ROSSMERY CHOQUE', number: '0011-0814-0205905230', ammount: 15},
                    {holder: 'MIRIAN YANINA', number: '0011-0135-0200852650', ammount: 15}
                ]
            }
        ]
    },
    {
        name: 'Luis',
        banks: [
            {
                name: 'BBVA',
                accounts: [
                    {holder: 'ALIMBER CENTENO', number: '0011 0115 0200498203', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '0011 0269 0200257506', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '0011 0183 0201104439', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '0011 0129 0200408715', ammount: 15}
                ]
            },
            {
                name: 'Scotiabank',
                accounts: [
                    {holder: 'ALIMBER CENTENO', number: '038 8255184', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '038 8281263', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '402 0074458', ammount: 15}
                ]
            },
            {
                name: 'Interbank',
                accounts: [
                    {holder: 'ALIMBER CENTENO', number: '898 3153241416', ammount: 15},
                    {holder: 'ALIMBER CENTENO', number: '898 3171837865', ammount: 15}
                ]
            }
        ]
    },
    {
        name: 'Nelson',
        banks: [
            {
                name: 'BBVA',
                accounts: [
                    {holder: 'NELSON QUISPE', number: '0011 0368 0200424974', ammount: 10},
                    {holder: 'NELSON QUISPE', number: '0011 0814 0200261386', ammount: 15},
                    {holder: 'NELSON QUISPE', number: '0011 0814 0201025651', ammount: 20},
                    {holder: 'NELSON QUISPE', number: '0011 0814 0201500775', ammount: 25},
                    {holder: 'NELSON QUISPE', number: '0011 0814 0201962612', ammount: 30}
                ]
            },
            {
                name: 'Scotiabank',
                accounts: [
                    {holder: 'NELSON QUISPE', number: '002 3289903', ammount: 15},
                    {holder: 'NELSON QUISPE', number: '002 3295074', ammount: 20},
                    {holder: 'NELSON QUISPE', number: '002 3295082', ammount: 20}
                ]
            },
            {
                name: 'BanBif - Depósitos',
                accounts: [
                    {holder: 'NELSON QUISPE', number: '0080 18164207', ammount: 80},
                    {holder: 'NELSON QUISPE', number: '0080 18687102', ammount: 80}
                ]
            },
            {
                name: 'BanBif - Pago de Tarjeta de crédito',
                accounts: [
                    {holder: 'NELSON QUISPE', number: '4916 0601 0184 2952', ammount: 80}
                ]
            }
        ]
    }
];













