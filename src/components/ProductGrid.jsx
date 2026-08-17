import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="shop" id="shop">
      <div className="shop__header">
        <h2>The catalog</h2>
        <span className="shop__count">
          {visible.length} item{visible.length !== 1 ? "s" : ""}
        </span>
      </div>
      <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />
      <div className="grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
