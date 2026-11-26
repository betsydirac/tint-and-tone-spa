import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("indoor");
  const [finish, setFinish] = useState("");
  const [colorsInput, setColorsInput] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const colors = colorsInput
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    onAddProject({
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      category,
      finish: finish.trim(),
      colors,
      image: image.trim(),
    });

    setName("");
    setDescription("");
    setCategory("indoor");
    setFinish("");
    setColorsInput("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Project details</h2>

      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sunset Living Room" required />

      <label htmlFor="category">Category</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>

      <label htmlFor="finish">Finish</label>
      <input id="finish" type="text" value={finish} onChange={(e) => setFinish(e.target.value)} placeholder="e.g. matte, satin, gloss" required />

      <label htmlFor="colors">Colors (comma-separated)</label>
      <input id="colors" type="text" value={colorsInput} onChange={(e) => setColorsInput(e.target.value)} placeholder="#ff7a1a, #1f5f8b, teal" />

      <label htmlFor="image">Image link or path</label>
      <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/office.jpg or https://..." />

      <label htmlFor="description">Description</label>
      <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What did the space need, and what did you do?" required />

      <button type="submit">Add project</button>
    </form>
  );
}

export default ProjectForm;