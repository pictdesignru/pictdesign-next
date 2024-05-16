import NavigationLink from "../NavigationLink/NavigationLink";

const CategoryList = ({categories}) => {

  return (
    <ul className='category-list'>
      <li className="navigation__item">
        <NavigationLink title={'Все'} link="/" />
      </li>
      {categories.map((category) => {
        return (
          <li key={category.id} className="navigation__item">
            <NavigationLink
              title={category.name}
              link={`/${category.slug}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
