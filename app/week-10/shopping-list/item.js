export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
    className="border-2 border-pink-200 p-3 mb-3 rounded-lg bg-white shadow-sm hover:bg-pink-50 cursor-pointer transition-all duration-200"
    onClick={() => onSelect(name, category)}
  >
    <div className="flex justify-between items-center">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
        {quantity}
      </span>
    </div>
    <div className="text-xs text-pink-600 mt-1 italic">{category}</div>
  </li>
  );
}