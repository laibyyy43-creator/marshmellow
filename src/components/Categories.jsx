import CategoryCard from "./CategoryCard";
import category1 from "../assets/Dresses/picture 1.jpg";
import category2 from "../assets/Dresses/picture2.jpg";
import category3 from "../assets/Dresses/picture 3.jpg";

function Categories() {
  return (
    <section className="categories" id="categories">

      <div className="section-heading">
        <p>EXPLORE OUR COLLECTION</p>

        <h2>Shop By Category</h2>

        <span>
          Find something beautiful for every special occasion.
        </span>
      </div>

      <div className="categories-grid">

        <CategoryCard
          image={category1}
          title="Everyday Dresses"
          description="Cute and comfortable dresses for everyday moments."
        />

        <CategoryCard
          image={category2}
          title="Party Wear"
          description="Beautiful outfits for birthdays and special occasions."
        />

        <CategoryCard
          image={category3}
          title="Little Princess"
          description="Pretty styles made for your little princess."
        />

      </div>

    </section>
  );
}

export default Categories;