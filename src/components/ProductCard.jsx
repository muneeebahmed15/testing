import { openWhatsApp } from "../data/whatsapp";

export default function ProductCard({ product }) {
  const handleEnquire = () => {
    openWhatsApp(
      `Hi! I'm interested in "${product.name}" in ${product.color} ` +
        `(SKU ${product.sku}, $${product.price}). Do you have my size in stock?`
    );
  };

  return (
    <article className="card">
      <div className="card__swatch" style={{ backgroundColor: product.swatch }}>
        <span className="card__sku">{product.sku}</span>
        {!product.inStock && <span className="card__soldout">Sold out</span>}
      </div>
      <div className="card__body">
        <h3 className="card__name">{product.name}</h3>
        <p className="card__material">
          {product.color} &middot; {product.material}
        </p>
        <p className="card__desc">{product.description}</p>
        <div className="card__sizes">
          {product.sizes.map((size) => (
            <span key={size} className="card__size">
              {size}
            </span>
          ))}
        </div>
        <div className="card__footer">
          <span className="card__price">${product.price}</span>
          <button
            className="btn btn--ghost"
            onClick={handleEnquire}
            disabled={!product.inStock}
          >
            {product.inStock ? "Enquire on WhatsApp" : "Notify me"}
          </button>
        </div>
      </div>
    </article>
  );
}
