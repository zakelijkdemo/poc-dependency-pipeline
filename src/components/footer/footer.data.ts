import { SecondaryNavigation } from "@cz/cz-react-ui-library/dist/components/organisms/DsFooter/DsFooter.types";

// CZ Footer Mock data
export const footerData = {
  userInfo: { name: "Dhr. GPA. Janschen", details: "Relatienummer: 32789324" },
  quickLinks: [
    // { title: "Mijn Verzekering 1", links: [] },
    // { title: "Mijn Verzekering 2", links: [] },
    {
      title: "Mijn Verzekering",
      collapsed: true,
      links: [
        { name: "Mijn berichten", url: "#" },
        { name: "Mijn polis", url: "#", isPersonal: true },
        { name: "Persoonlijke gegevens wijzigen", url: "#" },
        { name: "Betaalgegevens wijzigen", url: "#" },
        { name: "Openstaande rekeningen", url: "#" },
      ],
    },
    {
      title: "Vergoedingen",
      collapsed: true,
      links: [
        { name: "Maximale vergoedingen", url: "#" },
        { name: "Mijn zorgkosten", url: "#" },
        { name: "Mijn declaraties", url: "#" },
        { name: "Nota declareren", url: "#" },
        { name: "Vergoedingen en voorwaarden", url: "#" },
      ],
    },
    {
      title: "Contact & Service",
      collapsed: true,
      links: [
        { name: "Bel ons", url: "#" },
        { name: "Whatsapp", url: "#" },
        { name: "Mail ons", url: "#" },
        { name: "Bezoek ons", url: "#", isExternal: true },
        { name: "Meer wijzigen of aanvragen", url: "#" },
      ],
    },
    {
      title: "CZ Extra",
      collapsed: true,
      links: [
        { name: "Vind een zorgverlener", url: "#", isExternal: true },
        { name: "Regel hulp voor thuis", url: "#", isExternal: true },
        { name: "Second opinion", url: "#", isExternal: true },
        { name: "Wachtlijstbemiddeling", url: "#", isExternal: true },
        { name: "Alle extra's", url: "#", isExternal: true },
      ],
    },
  ],
  footerNav: [
    { name: "Algemene voorwaarden Mijn CZ", url: "#" },
    { name: "Privacy", url: "#" },
    { name: "Disclaimer", url: "#" },
    { name: "CZ.nl", url: "#", isExternal: true },
    { name: "© 2024 CZ", url: "#", isDisabled: true },
  ],
  payoff: "Zorg die verder gaat",
  onClick: (item: SecondaryNavigation) => {
    console.log(item);
  },
};
