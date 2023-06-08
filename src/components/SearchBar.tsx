import React from 'react';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
};

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };
  const id = 'input-search';
  return (
    <>
      <label htmlFor={id}>검색</label>
      <input
        id={id}
        placeholder="식당이름"
        type="text"
        value={filterText}
        onChange={handleChange}
      />
      <div>
        <ul>
          {['전체', ...categories].map((category: string) => (
            <li key={category}>
              <button type="button" onClick={() => setFilterCategory(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
