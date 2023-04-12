const outputOrdersMock = [
  {
    id: 1,
    userId: 777,
    sellerId: 999,
    totalPrice: '10.50',
    deliveryAddress: 'Avenida A',
    deliveryNumber: '1100',
    saleDate: '2023-04-11T12:30:00.000Z',
    status: 'Pendente',
  },
  {
    id: 2,
    userId: 777,
    sellerId: 999,
    totalPrice: '5.00',
    deliveryAddress: 'Avenida A',
    deliveryNumber: '1100',
    saleDate: '2023-04-12T12:30:00.000Z',
    status: 'Pendente',
  },
];

const outputOrderDetailsMock = {
  id: 333,
  userId: 44,
  sellerId: 2,
  totalPrice: "8.40",
  deliveryAddress: "Santos Rua",
  deliveryNumber: "363",
  saleDate: "2023-04-10T21:45:25.000Z",
  status: "Pendente",
  user: { name: "Coelho Ricochete" },
  seller: { name: "Fulana Pereira" },
  products: [
    {
      id: 2,
      name: "Corote Azul 500ml",
      price: "4.20",
      urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg",
      SalesProducts: { saleId: 3, productId: 2, quantity: 2 },
    },
  ],
};

module.exports = {
  outputOrdersMock,
  outputOrderDetailsMock,
};