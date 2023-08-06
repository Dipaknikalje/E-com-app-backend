const accessoriesData = (req, res) => {
  res.send([
    {
      id: 1,
      name: "Apple AirPod Pro",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
      price: "₹18,000",
      oPrice: "₹20,499",
    },
    {
      id: 2,
      name: "Apple AirPod 2nd Gen",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg",
      price: "₹15,000",
      oPrice: "₹17,499",
    },
    {
      id: 3,
      name: "Apple AirPod Pro A2084",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://images.esellerpro.com/2131/I/252/394/DSC_5962_2.jpg",
      price: "₹20,000",
      oPrice: "₹25,000",
    },
    {
      id: 4,
      name: "Apple AirPod 3rd Gen",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861333000",
      price: "₹13,000",
      oPrice: "₹14,500",
    },
    {
      id: 5,
      name: "Apple Watch Series 4",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/51deGDOsgbL._SL1000_.jpg",
      price: "₹12,500",
      oPrice: "₹15,000",
    },
    {
      id: 6,
      name: "Apple Watch Series 5",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/71fp5ankbqL._SX522_.jpg",
      price: "₹10,000",
      oPrice: "₹12,499",
    },
    {
      id: 7,
      name: "Apple Watch Series 6",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://rukminim1.flixcart.com/image/800/900/cms-rpd-images/be2faba1bb6f4d0f9e35557ba64da795_1759bdade0b_image.jpeg?q=90",
      price: "₹12,000",
      oPrice: "₹13,500",
    },
    {
      id: 8,
      name: "Apple Watch Series 7",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1631661671000",
      price: "₹11,000",
      oPrice: "₹12,000",
    },
    {
      id: 9,
      name: "Apple Watch Series 3",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
      price: "₹10,000",
      oPrice: "₹11,499",
    },
    {
      id: 10,
      name: "Apple Watch Series 2",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP746/alu-spacegray-nike.jpg",
      price: "₹8,000",
      oPrice: "₹8,499",
    },
    {
      id: 11,
      name: "Apple AirPods Max",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
      price: "₹15,000",
      oPrice: "₹17,500",
    },
    {
      id: 12,
      name: "Apple AirPods ",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kigbjbk0-0/headphone/n/z/m/mgyl3hn-a-apple-original-imafy8wb7tuduaf2.jpeg?q=70",
      price: "₹13,000",
      oPrice: "₹16,499",
    },
    {
      id: 13,
      name: "boAt Rockers 255 CSK",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/51hC6pU-gsL._SY355_.jpg",
      price: "₹1,200",
      oPrice: "₹1,499",
    },
    {
      id: 14,
      name: "boAt Rockers 450 Iron Man",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SL1500_.jpg",
      price: "₹1,500",
      oPrice: "₹1,799",
    },
    {
      id: 15,
      name: "boAt Rockers 450 Black Panther",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://infiswap.com/wp-content/uploads/2022/04/boAt-Rockerz-450-Black-panther-1.jpg",
      price: "₹1,500",
      oPrice: "₹1,700",
    },
    {
      id: 16,
      name: "boAt Rockers 450 Pro",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/9/h/j/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.jpeg?q=70",
      price: "₹1,300",
      oPrice: "₹1,450",
    },
    {
      id: 17,
      name: "boAt Wave Lite",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/41qAgAkiXjL.jpg",
      price: "₹1,200",
      oPrice: "₹1,300",
    },
    {
      id: 18,
      name: "SanDisk 32GB 2.0",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://n2.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.jpg",
      price: "₹499",
      oPrice: "₹600",
    },
    {
      id: 19,
      name: "SanDisk 32GB 3.0",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg",
      price: "₹800",
      oPrice: "₹999",
    },
    {
      id: 20,
      name: "HP 32GB 3.0",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
      price: "₹1,000",
      oPrice: "₹1,200",
    },
    {
      id: 21,
      name: "HP 34GB 3.0",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
      price: "₹1,200",
      oPrice: "₹1,499",
    },
    {
      id: 22,
      name: "Jebra Microsoft",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://www.onedirect.co.uk/media/catalog/product/cache/2/image/600x/75fe832f739e7581346979d1fbb4a3c8/g/n/gnevol30dm-2.jpg",
      price: "₹55,00",
      oPrice: "₹6,499",
    },
    {
      id: 23,
      name: "Mi Powerbank 20000mAh",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
      price: "₹1,100",
      oPrice: "₹1,700",
    },
    {
      id: 24,
      name: "Sony 10000mAh Powerbank ",
      ratting:
        "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
      image:
        "https://www.brandedcorporategift.com/ecommerce/upload/images/edit/6121-2017-08-30.jpg",
      price: "₹1,300",
      oPrice: "₹1,699",
    },
  ]);
};
module.exports = accessoriesData;
