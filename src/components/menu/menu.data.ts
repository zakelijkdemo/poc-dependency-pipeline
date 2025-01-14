import { DataFromApi } from "@cz/cz-react-ui-library/dist/components/organisms/DsMainMenu/Menu/Menu.types";

// Mock data
export const menuData: DataFromApi = {
  brand: "cz",
  hamburgerButton: {
    labelIsClosed: "Menu",
    labelIsOpen: "Sluiten",
  },
  homeLink: {
    url: "http://localhost:8080/",
  },
  navigationAccount: {
    button: {
      description: "Kies een actie om in te loggen op Mijn CZ",
      name: "Jan Janssen",
    },
    items: [
      {
        icon: "huisje",
        name: "Mijn overzicht",
        url: "http://localhost:8080/",
      },
      {
        icon: "document",
        name: "Mijn verzekeringen",
        url: "http://localhost:8080/",
      },
      {
        icon: "taartdiagram",
        name: "Mijn vergoedingen",
        url: "http://localhost:8080/",
      },
      {
        icon: "document-euro",
        name: "Nota declareren",
        url: "http://localhost:8080/",
      },
      {
        icon: "geldmunten",
        name: "Betalen",
        url: "http://localhost:8080/",
      },
      {
        icon: "poppetje-achtergrond",
        name: "Mijn gegevens",
        url: "http://localhost:8080/",
      },
      {
        icon: "envelop",
        name: "Berichten",
        url: "http://localhost:8080/",
      },
    ],
    title: "ASMT van Amerooijen-Bilthuizen",
  },
  navigationDomain: [
    {
      name: "Consument",
      url: "http://localhost:8080/",
    },
    {
      name: "Zakelijk",
      url: "http://localhost:8080/",
    },
    {
      name: "ZZP",
      url: "http://localhost:8080/",
    },
    {
      name: "Zorgaanbieder",
      url: "http://localhost:8080/",
    },
    {
      name: "Over CZ",
      url: "http://localhost:8080/",
    },
  ],
  navigation: [
    {
      id: "2c11408e-7d22-4599-b553-21e8dcb78d6d",
      isHome: true,
      name: "Home",
      url: "http://localhost:8080/",
    },
    {
      id: "316fe0b8-d8a5-40c5-b6f1-229510c70c7a",
      name: "Zorgverzekering",
      subNavigation: [
        {
          items: [
            {
              name: "Basisverzekeringen en nog meer verzekeringen",
              url: "http://localhost:8080/zorgverzekering/basisverzekeringen",
            },
            {
              name: "Aanvullende verzekeringen",
              url: "http://localhost:8080/zorgverzekering/",
            },
            {
              name: "Tandartsverzekeringen",
              url: "http://tandarts.com",
              isExternal: true,
            },
            {
              name: "Alle verzekeringen",
              url: "http://localhost:8080/zorgverzekering",
              asButton: true,
            },
          ],
        },
        {
          items: [
            {
              name: "Mijn verzekeringen",
              url: "http://localhost:8080/zorgverzekering",
              isPersonal: true,
            },
            {
              name: "Collectieve verzekeringen",
              url: "http://localhost:8080/zorgverzekering/collectieveverzekeringen",
            },
            {
              name: "CZdirect verzekeringen",
              url: "http://localhost:8080/zorgverzekering/czdirect",
            },
            {
              name: "Zorg in het buitenland",
              url: "http://localhost:8080/zorgverzekering/zorgbuitenland",
            },
          ],
        },
      ],
      url: "http://localhost:8080/zorgverzekering",
    },
    {
      id: "fa1901a3-9aa8-4796-90f4-4fc5feb089aa",
      name: "Vergoedingen",
      subNavigation: [
        {
          items: [
            {
              name: "Alternatieve zorg",
              url: "http://localhost:8080/vergoedingen/alternatieve-zorg",
            },
            {
              name: "Brillen en lenzen",
              url: "http://localhost:8080/vergoedingen/brillen",
            },
            {
              name: "Fysiotherapie",
              url: "http://localhost:8080/vergoedingen/fysiotherapie",
            },
            {
              name: "Tandzorg",
              url: "http://localhost:8080/vergoedingen/tandzorg",
            },
            {
              name: "Zwangerschap en geboorte",
              url: "http://localhost:8080/vergoedingen/zwangerschap",
            },
            {
              name: "Alle vergoedingen",
              url: "http://localhost:8080/vergoedingen/ietsanders",
            },
          ],
        },
        {
          items: [
            {
              name: "Mijn vergoedingen",
              url: "http://localhost:8080/",
              isPersonal: true,
            },
            {
              name: "Nota declareren",
              url: "http://localhost:8080/",
              isPersonal: true,
            },
            { name: "Eigen risico", url: "http://localhost:8080/" },
          ],
        },
      ],
      url: "http://localhost:8080/vergoedingen",
    },
    {
      id: "40acd7db-1208-4008-bc55-878d4694887a",
      name: "Betalen",
      url: "http://localhost:8080/betalen",
    },
    {
      id: "8b313519-fc43-4cca-94ac-2c489ab15652",
      name: "CZ Extra",
      subNavigation: [
        {
          items: [
            { name: "Zwangerschap", url: "http://localhost:8080/" },
            { name: "Mantelzorg", url: "http://localhost:8080/" },
            { name: "Alle thema's", url: "http://localhost:8080/" },
          ],
          title: "Thema's",
        },
        {
          items: [
            { name: "Regel hulp voor thuis", url: "http://localhost:8080/" },
            { name: "Kies uw behandeling", url: "http://localhost:8080/" },
            { name: "Meer zelf regelen", url: "http://localhost:8080/" },
          ],
          title: "Zelf regelen",
        },
        {
          items: [
            { name: "App de verpleegkundige", url: "http://localhost:8080/" },
            { name: "Vind een zorgverlener", url: "http://localhost:8080/" },
            {
              name: "Bekijk alle extra's",
              url: "http://localhost:8080/",
              asButton: true,
            },
          ],
          title: "Extra",
        },
      ],
      url: "http://localhost:8080/extra",
    },
    {
      id: "f184e361-40bc-4da6-8474-c125f3d3b902",
      name: "Service & Contact",
      url: "http://localhost:8080/service-en-contact",
    },
  ],
  search: {
    action: "http://cz.nl/zoekresultaten",
    getSuggestions: () => {
      console.log("nope");
    },
    suggestions: [
      {
        title: "Test",
      },
      {
        title: "Test2",
      },
    ],
    withSuggestions: true,
    label: "Zoeken",
    searchQuery: "query",
  },
};
