import Restaurant from '../types/Restaurant';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => {
          const { id, name, category, menu } = restaurant;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                <ul>
                  {menu.map((item) => (
                    <li key={item.id}>
                      {item.name}({item.price.toLocaleString()}
                      원)
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
