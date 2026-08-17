import { SITE } from "../data/products";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} {SITE.name}
      </span>
      <span>{SITE.address}</span>
    </footer>
  );
}
