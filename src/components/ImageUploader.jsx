import { useState } from 'react'

export default function ImageUploader({ onImages }) {
  const [previews, setPreviews] = useState([])

  function handleSelect(e) {
    const files = Array.from(e.target.files).slice(0, 50)
    const thumbs = files.map(f => URL.createObjectURL(f))
    setPreviews(thumbs)
    onImages(files)        // bubble up to parent
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleSelect}
        className="hidden"
        id="uploader"
      />
      <label htmlFor="uploader"
             className="block p-4 border-2 border-dashed rounded-lg text-center cursor-pointer">
        Click or drag up to 50 photos
      </label>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {previews.map((src, i) => (
          <img key={i} src={src} alt="" className="h-24 object-cover rounded" />
        ))}
      </div>
    </div>
  )
}
