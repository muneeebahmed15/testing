import { SITE } from "../data/products";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__eyebrow">New season &mdash; small runs, restocked rarely</div>
      <h1 className="hero__title">{SITE.tagline}</h1>
      <p className="hero__body">
        Every piece below is made from natural fibers and cut for everyday wear. Sizes run true
        &mdash; check the size chips on each item, and message us on WhatsApp if you're between
        sizes.
      </p>
      <a href="#shop" className="btn btn--primary">
        Shop the collection
      </a>
    </section>
  );
}
