import styled from "styled-components";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  margin: 20px 15px;
  flex-basis: 23%;
  max-width: 23%;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #222;
  line-height: 38px;
`;
const Price = styled.div`
  span {
    font-size: 18px;
  }
`;
const PriceCompare = styled.div`
  color: #a5a5a5;
  text-decoration: line-through;
  font-size: 18px;
`;

const BoxPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BoxDiscount = styled.div`
  position: absolute;
  background-color: rgba(249, 194, 5, 0.7);
  top: 0;
  right: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  span {
    display: block;
    padding: 5px;
  }
`;
const WareHouse = styled.div`
  span {
    color: red;
    font-weight: 700;
    font-size: 18px;
  }
  .quality {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image.src} alt={item.title} />
      <Title>{item.title}</Title>
      <BoxPrice>
        <Price>
          <span>{item.variants[0].price}đ</span>
        </Price>
        <PriceCompare>{item.variants[0].compare_at_price}đ</PriceCompare>
      </BoxPrice>
      <BoxDiscount>
        {item.variants[0].price === "0" ? null : (
          <span>
            Giảm:&nbsp;
            {Math.trunc(
              100 -
                (item.variants[0].price * 100) /
                  item.variants[0].compare_at_price
            )}
            %
          </span>
        )}
      </BoxDiscount>
      <WareHouse>
        {item.variants[0].inventory_quantity <= "0" ? (
          <span>Hết hàng</span>
        ) : (
          <div className="quality">
            Còn&nbsp;
            {item.variants[0].inventory_quantity}
            &nbsp;sản phẩm có sẵn
          </div>
        )}
      </WareHouse>
    </Container>
  );
};

export default Product;
