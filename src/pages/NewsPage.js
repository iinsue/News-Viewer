import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

import { useParams } from "react-router-dom";

const NewsPage = () => {
  // 카테고리가 선택되지 않았으면 기본값 all 사용
  const params = useParams();
  console.log(params);
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;