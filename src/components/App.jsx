import React, { useState } from 'react';
import ImageUploader from './ImageUploader.jsx';
import SquareFootageInput from './SquareFootageInput.jsx';
import PaintSlider from './PaintSlider.jsx';
import ColorSelector from './ColorSelector.jsx';
import EstimateSummary from './EstimateSummary.jsx';
import DownloadEstimate from './DownloadEstimate.jsx';
import { calculateEstimate } from '../utils/costCalculator.js';

export default function App() {
  const [images, setImages] = useState([]);
  const [area, setArea] = useState(0);
  const [quality, setQuality] = useState('Medium');
  const [color, setColor] = useState('#ffffff');
  const estimate = calculateEstimate(area, quality);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Painting Estimator</h1>
      <ImageUploader onImages={setImages} />
      <SquareFootageInput onAreaChange={setArea} />
      <PaintSlider onQualityChange={setQuality} />
      <ColorSelector onColorChange={setColor} />
      <EstimateSummary area={area} quality={quality} color={color} estimate={estimate} />
      <DownloadEstimate area={area} quality={quality} color={color} estimate={estimate} />
    </main>
  );
}
