import styled from "styled-components";
import Product from "./product";

const Container = styled.div`
      flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    box-sizing: border-box;
  padding: 50px 120px;
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  font-size: 60px;
  width: 100%;
  font-weight: 600;
`

const Products = ({ data }) => {
  return (
    <Container>
      {data.length > 0 ? (
        data.map((item) => <Product item={item} key={item.id} />)
      ) : (
        <NotFound>Không tìm thấy kết quả phù hợp</NotFound>
      )}
    </Container>
  );
};

export default Products;
