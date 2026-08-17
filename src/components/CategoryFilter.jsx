export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter__pill ${active === cat ? "filter__pill--active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
