export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari judul buku..."
      aria-label="Cari judul buku"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}