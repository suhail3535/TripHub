import React, { useEffect, useState } from "react";
import { createContext } from "react";

// 1
export const AppContext = createContext();

const AllProductsData = {
  menData: [
    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Tark inn Near IGI Airport Delhi",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/322334158.webp?k=b8ce5ccf108773e0a5511e879ae738149440d1ff85fa8c8b7e07c5bb0470f270&o=&s=1",
      categary: "Classic Triple Room",
      price: 6200,
      Ratting: "4.8",
      id: "1",
      strikeprice: 1299,
      amount: 1,
      moreImage: [
        "https://cf.bstatic.com/xdata/images/hotel/square600/322334158.webp?k=b8ce5ccf108773e0a5511e879ae738149440d1ff85fa8c8b7e07c5bb0470f270&o=&s=1",
      ],
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Amrit Kashmir",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/399492450.webp?k=947261176ed14d5ab8c6e5dfce20757dce772d5ec5c2c2aa51636f7c3d3b4108&o=&s=1",

      categary: "Deluxe Room",
      price: 4200,
      Ratting: "4.4",
      id: "2",
      strikeprice: 1299,
      amount: 1,
      moreImage: [
        "https://cf.bstatic.com/xdata/images/hotel/square600/399492450.webp?k=947261176ed14d5ab8c6e5dfce20757dce772d5ec5c2c2aa51636f7c3d3b4108&o=&s=1",
      ],
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Jannat Delhi",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
      categary: "Deluxe Double Room (2 Adults + 1 Child)",
      Ratting: "4.5",
      price: 5200,
      id: "3",
      strikeprice: 1299,
      amount: 1,
      moreImage: [
        "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
      ],
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Rose near railway station Jaipur",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/103601620.webp?k=e8addf20164dc6d44495503b1f677cfa47dbda60d1839888caa1c819c6e9d587&o=&s=1",
      categary: "Classic Triple Room",
      price: 3500,
      Ratting: "4.9",
      id: "4",
      strikeprice: 1299,
      amount: 1,
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: " Hotel Magic Lucknow",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/338730432.webp?k=6330925e6fd3c3565dc23ccf4db84d40ba9227602b2aa6a1a049af83eef174ac&o=&s=1",
      categary: "Deluxe Double Room (2 Adults + 1 Child)",
      price: 5500,
      Ratting: "4.7",
      id: "5",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Shalimar near Airport,Pune",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/330803747.webp?k=5597d3d5668569ea40b2ff27da6a59de2741e0e9635e566c06ebba3dc6998a8b&o=&s=1",
      categary: "Classic Triple Room",
      price: 4500,
      Ratting: "4.6",
      id: "6",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Sangum Gomti Nager, Lucknow",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/271347518.webp?k=fc4b7d410099ec984b34199db4dc1767d728dbf6eb2e09409c4a3bb3f2344b39&o=&s=1",
      categary: "Deluxe Double Room (2 Adults + 1 Child)",
      Ratting: "4.5",
      price: 3500,
      id: "7",
    },

   

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel friends come ,Mumbai",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
      categary: "Standard Double or Twin Room",
      price: 2500,
      Ratting: "4.7",
      id: "9",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Elegance,Jaipur",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/338478237.webp?k=5c0aec7e4c2ae379ff2150fcf69bdb422f6c9dc86dc9df6a91d72db13868dba7&o=&s=1",
      categary: "Standard Double or Twin Room",
      price: 2800,
      Ratting: "4.6",
      id: "10",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: " Hotel Smart Plaze,Mumbai",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/368648087.webp?k=19314fe61587a48912e91d1bf046be9088495ef66268239afc4a9f1fa2a2cc51&o=&s=1",
      categary: "Classic Triple Room",
      price: 4500,
      Ratting: "4.9",
      id: "11",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: " The Tark Hotel Jaipur",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/395522435.webp?k=661b10278ec84041822e7031d55ed190bb53d382d8aa0848b63a7e7fc2b4ecb7&o=&s=1",
      categary: "Deluxe Room",
      Ratting: "4.8",
      price: 3500,
      id: "12",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Surya palace ,Mumbai",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/347286490.webp?k=3fee36965635be5b2bf83d5ae060fd3c27a35a5404a433510037b4b32614ae6b&o=&s=1",
      categary: "Standard Double or Twin Room",
      price: 3500,
      Ratting: "4.7",
      id: "9",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: "Hotel Royals blue,Pune",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/289858951.webp?k=4f7492c7615553317fbc87055f65bb1b9a8ee1960533a2ae4d09232ec84dc120&o=&s=1",
      categary: "Standard Double or Twin Room",
      price: 4000,
      Ratting: "4.6",
      id: "10",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: " Hotel Plaza,Lucknow",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/313898581.webp?k=001ada3d14a92b11dc591dd62cb2a2165014b6fe4b91409b913d9e52b4368cbd&o=&s=1",
      categary: "Classic Triple Room",
      price: 4500,
      Ratting: "4.9",
      id: "11",
    },

    {
      createdAt: "2022-11-11T02:06:49.054Z",
      title: " The Tourist palace Goa",
      avatar:
        "https://cf.bstatic.com/xdata/images/hotel/square600/347970946.webp?k=573d587969cd5b8250b0a5b48f1dbf70cd47b867790ec14e082ad4969658e19c&o=&s=1",
      categary: "Deluxe Room",
      Ratting: "4.8",
      price: 5500,
      id: "12",
    },
  ],
};

const CartDataToMatch = [
  {
    id: 1,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/322334158.webp?k=b8ce5ccf108773e0a5511e879ae738149440d1ff85fa8c8b7e07c5bb0470f270&o=&s=1",
    title: "Hotel Tark inn Near IGI Airport Delhi",
    categary: "Classic Triple Room",
    price: 6200,
    Ratting: "4.8",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/322334158.webp?k=b8ce5ccf108773e0a5511e879ae738149440d1ff85fa8c8b7e07c5bb0470f270&o=&s=1",
    ],
  },

  {
    id: 2,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/399492450.webp?k=947261176ed14d5ab8c6e5dfce20757dce772d5ec5c2c2aa51636f7c3d3b4108&o=&s=1",
    title: "Hotel Amrit Kashmir",
    categary: "Deluxe Room",
    price: 4200,
    Ratting: "4.4",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/399492450.webp?k=947261176ed14d5ab8c6e5dfce20757dce772d5ec5c2c2aa51636f7c3d3b4108&o=&s=1",
    ],
  },
  {
    id: 3,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
    title: "Hotel Jannat Delhi",
    categary: "Deluxe Double Room (2 Adults + 1 Child)",
    price: 5200,
    Ratting: "4.5",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
    ],
  },

  {
    id: 4,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/103601620.webp?k=e8addf20164dc6d44495503b1f677cfa47dbda60d1839888caa1c819c6e9d587&o=&s=1",
    title: "Hotel Jannat Delhi",
    categary: "Deluxe Double Room (2 Adults + 1 Child)",
    price: 5200,
    Ratting: "4.5",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/292947302.webp?k=c1a6abd3ba458633983c99fdfec65f4315ff120da63a94a2a82559732a5ee5b7&o=&s=1",
    ],
  },
  {
    id: 5,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/338730432.webp?k=6330925e6fd3c3565dc23ccf4db84d40ba9227602b2aa6a1a049af83eef174ac&o=&s=1",
    title: "Hotel Magic Lucknow",
    categary: "Deluxe Double Room (2 Adults + 1 Child)",
    price: 5500,
    Ratting: "4.7",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/338730432.webp?k=6330925e6fd3c3565dc23ccf4db84d40ba9227602b2aa6a1a049af83eef174ac&o=&s=1",
    ],
  },

  {
    id: 6,
    avatar:
      "https://cf.bstatic.com/xdata/images/hotel/square600/330803747.webp?k=5597d3d5668569ea40b2ff27da6a59de2741e0e9635e566c06ebba3dc6998a8b&o=&s=1",
    title: "Hotel Shalimar near Airport,Pune",
    categary: "Classic Triple Room",
    price: 4500,
    Ratting: "4.6",
    strikeprice: 1299,
    amount: 1,
    moreImage: [
      "https://cf.bstatic.com/xdata/images/hotel/square600/330803747.webp?k=5597d3d5668569ea40b2ff27da6a59de2741e0e9635e566c06ebba3dc6998a8b&o=&s=1",
    ],
  },
];

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState(null);

  const [cartData, setCartData] = useState([]);

  const [price, setPrice] = useState(0);
  const [discountPrice, setdiscountPrice] = useState(0);
  const [TotalQty, setTotalQty] = useState(0);
  const [Totalprice, setTotalPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    setCartData(arr);
    handlePrice();
  };

  const cartDataEmpty = () => {
    setCartData([]);
  };

  const handlePrice = () => {
    let ans = 0;
    let discountP = 0;
    let Qty = 0;

    cartData.map((item) => {
      ans += item.amount * item.price;
      discountP += item.amount * item.strikeprice;
      Qty += item.amount;
    });
    setPrice(ans);
    setdiscountPrice(discountP);
    setTotalPrice(ans + discountP);
    setTotalQty(Qty);
  };

  useEffect(() => {
    handlePrice();
  });

  console.log(price);

  const handleCart = (data) => {
    if (cartData.indexOf(data) !== -1) return;
    setCartData([...cartData, data]);
  };

  console.log(cartData);

  const handleChange = (item, d) => {
    const ind = cartData.indexOf(item);
    const arr = cartData;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);
  };

  const toggle = () => {
    setIsAuth(!isAuth);
  };

  const loginUser = (Name) => {
    setIsAuth(true);
    console.log("LOGIN USER RUNNING APP CONTEXT");
    setUserName(Name);
  };

  const logoutUser = () => {
    setIsAuth(false);
    setUserName(null);
    console.log(isAuth, userName);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          userName,
          isAuth,
          toggle,
          loginUser,
          logoutUser,
          AllProductsData,
          cartData,
          handleCart,
          CartDataToMatch,
          handleChange,
          handleRemove,
          price,
          discountPrice,
          Totalprice,
          cartDataEmpty,
          handlePrice,
          TotalQty,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;

