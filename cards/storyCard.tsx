import Head from 'next/head';
//import Layout from '';
import Image from 'next/image';
// import Date from '.../components/date';


export const houseData = {
  property: {
    imageUrl: 'https://unsplash.com/photos/t153G5AfVm',
    imageAlt: 'Awesome Wuthering Heights Style Manor',
    beds: 9,
    baths: 8,
    title: "Return to Wuthering Heights",
    priceInCents: 253000,
    formattedPrice: "$2,530.00",
    reviewCount: 31,
    rating: 1,
  },
};

interface HeadingProps {
  recipient: string;
}


const Card: React.FC = (HeadingProps) => {
  return (
    <Layout>
      <div>
        <Image alt={houseData.property.imageAlt} src={houseData.property.imageUrl} />
        <h4>{houseData.property.title}</h4>
        <div>
          {houseData.property.beds} beds &bull; {houseData.property.baths} baths
        </div>
        <div>
          {houseData.property.formattedPrice}
        </div>
        <div>
          {houseData.property.rating}
        </div>
      </div>
    </Layout>
  )
};

export default Card;