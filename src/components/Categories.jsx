
const Categories = ({ value, onClickCategory }) => {
   const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]


   return (
      <div>
         <div className="categories">
            <ul>

               {categories.map((categoriesName, i) => (



                  <li key={i} onClick={() => onClickCategory(i)} className={value == i ? "active" : ""}>{categoriesName}</li>
               ))}


            </ul>
         </div>
      </div>
   );
};

export default Categories;