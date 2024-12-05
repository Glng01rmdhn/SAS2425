const cardData = [
  {
    id: 1,
    title: "Laptop A",
    price: "Rp 5.000.000",
    desc: "Laptop dengan performa tinggi untuk pekerjaan profesional.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Smartphone B",
    price: "Rp 3.000.000",
    desc: "Smartphone canggih dengan kamera 48MP dan baterai tahan lama.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Tablet c",
    price: "Rp 2.000.000",
    desc: "Tablet ringan dengan layar besar untuk pengalaman multimedia.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

// Komponen kartu
const Card = ({ title, desc, imageUrl,  }) => (
  
  <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', Width: '300px'  }}>
    <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
    <h3>{title}</h3>
    <p>{desc}</p> {/* Properti diganti dari description ke desc */}

  </div>
);

// Komponen utama aplikasi
const App = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          desc={card.desc} // Mengirimkan prop desc ke komponen Card
          image={card.image}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

  // Filter produk dengan harga di atas Rp 4 juta
  const filteredProducts = products.filter((product) => parsePrice(product.price) > 4000000);



// export default App;


// const products = [
//     {
//       id: 1,
//       name: "Laptop A",
//       price: "Rp 5.000.000",
//       description: "Laptop dengan performa tinggi untuk pekerjaan profesional.",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       name: "Smartphone B",
//       price: "Rp 3.000.000",
//       description: "Smartphone canggih dengan kamera 48MP dan baterai tahan lama.",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       name: "Tablet C",
//       price: "Rp 2.000.000",
//       description: "Tablet ringan dengan layar besar untuk pengalaman multimedia.",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//   ];
  
//   // Helper untuk konversi harga string ke angka
//   const parsePrice = (priceString) => {
//     return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
//   };
  
//   // Filter produk dengan harga di atas Rp 4 juta
//   const filteredProducts = products.filter((product) => parsePrice(product.price) > 4000000);
  
//   // Tampilkan data menggunakan map()
//   filteredProducts.map((product) => {
//     console.log(`Nama: ${product.name}`);
//     console.log(`Harga: ${product.price}`);
//     console.log(`Deskripsi: ${product.description}`);
//     console.log(`Gambar: ${product.imageUrl}`);
//     console.log("----------------------");
//   });
  