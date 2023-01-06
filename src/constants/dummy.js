import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Technical Training #1",
    creator: "Starting the Adventure",
    price: 32,
    description:
      "With Etendo it covers everything you need to manage your company, synchronizing all your commercial functions. You won't need to be at your desk to be in full control of your business. You can do it from your smartphone or tablet.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Bruno Romero",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Tomás Vesco",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Leandro Cazorla",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Technical Training #2",
    creator: "Continuing the progress",
    price: 47,
    description:
      "With Etendo it covers everything you need to manage your company, synchronizing all your commercial functions. You won't need to be at your desk to be in full control of your business. You can do it from your smartphone or tablet.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Leandro Cazorla",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Technical Training #3",
    creator: "Entry to a project will be very soon",
    price: 31,
    description:
      "With Etendo it covers everything you need to manage your company, synchronizing all your commercial functions. You won't need to be at your desk to be in full control of your business. You can do it from your smartphone or tablet.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Bruno Romero",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Tomás Vesco",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
];

export { NFTData };
