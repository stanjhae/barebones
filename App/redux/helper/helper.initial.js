import { Localization } from 'expo';

export default {
  clientExploreDetailsLoader: false,
  courierExploreDetailsLoader: false,
  itemDetailsLoader: false,
  tripDetailsLoader: false,
  isLoading: false,
  asyncStorage: {
    user: {
      address: {
        postalCode: '',
        city: '',
        street: '',
        country: '',
        houseNumber: '',
        doorNumber: '',
        doorBellNumber: '',
      },
    },
    mode: '',
    language: Localization.locale,
  },
  filter: {
    size: 0,
    category: [],
    initCountry: '',
    initCity: '',
    destCountry: '',
    destCity: '',
    offset: 0,
    filter: false,
  },
  dateTime: {
    initDate: new Date().toLocaleDateString(),
    initTime: new Date().toLocaleTimeString(),
    destDate: new Date().toLocaleDateString(),
    destTime: new Date().toLocaleTimeString(),
  },
  itemTrip: {
    item: 0,
    trip: 0,
    clientexplore: 0,
    courierexplore: 0,
    user: '',
  },
  modeMail: {
    mode: '',
    email: '',
  },
  appointAddress: {
    pickUp: '',
    dropOff: '',
  },
  countryPicker: {
    initCountry: {
      value: '',
    },
    destCountry: {
      value: '',
    },
  },
  stateOrRegionPicker: {
    initCity: {
      value: '',
    },
    destCity: {
      value: '',
    },
  },
  statusBar: true,
};
