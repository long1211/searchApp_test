import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Price = styled.div``;
const PriceCompare = styled.div`
  color: #a5a5a5;
  text-decoration: line-through;
`;

const BoxPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxDiscount = styled.div``;
const WareHouse = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image.src} alt={item.title} />
      <h3>{item.title}</h3>
      <BoxPrice>
        <Price>
          <span>{item.variants[0].price}đ</span>
        </Price>
        <PriceCompare>{item.variants[0].compare_at_price}đ</PriceCompare>
      </BoxPrice>
      <BoxDiscount>
        {item.variants[0].price === "0" ? null : (
          <>
            Giảm:&nbsp;
            {Math.trunc(
              100 -
                (item.variants[0].price * 100) /
                  item.variants[0].compare_at_price
            )}
            %
          </>
        )}
      </BoxDiscount>
      <WareHouse>
        {item.variants[0].inventory_quantity <= "0" ? (
          "Hết hàng"
        ) : (
          <>
            Số lượng:&nbsp;
            {item.variants[0].inventory_quantity}
          </>
        )}
      </WareHouse>
    </Container>
  );
};

export default Product;
