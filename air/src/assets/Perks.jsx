export default function Perks({ selected, onChange }) {
  function handleCheckboxClick(ev) {
    const { name, checked } = ev.target;

    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((check) => check !== name)]);
    }
  }
  return (
    <div className="grid grid-cols-4 gap-3 mt-2">
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="wify" onChange={handleCheckboxClick} />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="parking" onChange={handleCheckboxClick} />
        <span>Free parking</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="tv" onChange={handleCheckboxClick} />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="pets" onChange={handleCheckboxClick} />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="entrance" onChange={handleCheckboxClick} />
        <span>Private Entrance</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-cente cursor-pointer">
        <input type="checkbox" name="radio" onChange={handleCheckboxClick} />
        <span>Radio</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="ac" onChange={handleCheckboxClick} />
        <span>AC</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="pool" onChange={handleCheckboxClick} />
        <span>Pool</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="beach" onChange={handleCheckboxClick} />
        <span>Beach view</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="maid" onChange={handleCheckboxClick} />
        <span>Maid</span>
      </label>
    </div>
  );
}
