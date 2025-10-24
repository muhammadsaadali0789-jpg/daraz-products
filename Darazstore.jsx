import React from 'react'
import './Daraz.css'

let productsData = [
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/6c900123f2319871d800f4de3bccb86c.jpg_400x400q80.jpg_.avif",
    productTitle: "Original men ring matt black titanium stainless steel ring for men superior quality gents ring outclass neat finishing",
    price: "$20"
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/7bdb5eb2530832f24f7c80289d199cae.jpg_400x400q80.jpg_.avif",
    productTitle: "ATM Cards Holder Wallet - Best Quality Card Holder Space Saving Wallets",
    price: "$90"
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/547c6242f2e05549f0aad85770d8e811.jpg_400x400q80.jpg_.avif",
    productTitle: "New Trendy SLIM PU Leather Long Wallet For Men and Women Cash And Card Holder",
    price: "$100"
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e7775740c2a31d8f862c0ced1615d401.jpg_400x400q80.jpg_.avif",
    productTitle: "Airpods Air Pro 3rd Gen TWS (True Wireless Stereo) Bluetooth Earbuds Dual Earphones Headset (Connect With All Bluetooth Devices)",

    price: "$300"
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sc4164c32a3eb44f1a8c8c2e301a93700i.jpg_400x400q80.jpg_.avif",
    productTitle: "Againtr Summer Printed Tracksuit For Men & Boys - Soft & Comfortable Fabric T Shirt & Trouser Printed Tracksuit black",
    price: "$450"
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/64f57760e8bc75a24582890388609580.jpg_400x400q80.jpg_.avif",
    productTitle: "Soft Bullet Toy Manual Lunch Gun Children Outdoor Shooting Toy Birthday Gift For Boys, Bullet Shell Ejection Blaster Automatic continuous Shooting Toy Gun Adults Boys Birthday Gifts Outdoor Handgun soft bullet, manual, lunch gun, children, outdoor, shooti",
    price: "$500"
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/91c4daf8379264a41356357c6d923d41.jpg_400x400q80.jpg_.avif",
    productTitle: "Orignal P47 Wireless Headset Bluetooth Foldable On-Ear Headphone Wireless Earbuds Invisible Ultra Small Bluetooth Handfree for all cell phones",
    price: "$700"
  }
].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))

function DarazStore() {
  return (
    <div>
      <h1>Daraz Store</h1>
      <div className="products">
        {
          productsData.map((myproduct) => {
            return <Product key={myproduct.productTitle} {...myproduct} />
          })
        }
      </div>
    </div>
  )
}

export default DarazStore

function Product(props) {
  console.log(props)
  return (
    <div className='product'>
      <img src={props.productImage} alt="product" />
      <h5>{props.productTitle}</h5>
      <p>{props.price}</p>
    </div>
  )
}
