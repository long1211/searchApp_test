import styled from "styled-components";
import Product from "./product";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 50px 120px;
`;

const Products = ({ data }) => {
  return (
    <Container>
      {data.length > 0 ? (
        data.map((item) => <Product item={item} key={item.id} />)
      ) : (
        <h1>Không tìm thấy kết quả</h1>
      )}
    </Container>
  );
};

export default Products;
