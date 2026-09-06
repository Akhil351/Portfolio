export default function TechTags({ items }: { items: string[] }) {
  return (
    <ul className="tech-tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
