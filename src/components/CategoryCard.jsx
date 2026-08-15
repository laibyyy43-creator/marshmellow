function CategoryCard({ image, title, description }) {
  return (
    <div className="category-card">

      <div className="category-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="category-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <button type="button">
          SHOP NOW
        </button>

      </div>

    </div>
  );
}

export default CategoryCard;