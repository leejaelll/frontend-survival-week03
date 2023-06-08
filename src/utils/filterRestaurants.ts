import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText: string;
  filterCategory: string;
};

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions
): Restaurant[] {
  // filter 함수 내부에서 사용할 콜백함수
  const match = (restaurant: Restaurant) =>
    restaurant.category === filterCategory;

  const filteredRestaurants =
    filterCategory === '전체' ? restaurants : restaurants.filter(match); // -> 선택한 카테고리에 맞는 restaurants

  const query = normalize(filterText); // -> 빈문자열을 제외한 문자열

  if (!query) {
    return filteredRestaurants; // -> 문자열이 없으면 filteredRestaurants를 그대로 리턴한다.
  }

  const contains = (restaurant: Restaurant) =>
    normalize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains); // filteredRestaurants 중에서도 query를 가지고 있는 메뉴들만 모아서 리턴
}
