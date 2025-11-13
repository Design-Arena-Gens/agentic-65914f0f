'use client';

import { useState } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    setLoading(true);

    const prompt = encodeURIComponent(
      "cinematic portrait photography of a young handsome man, glowing tan skin, modern stylish haircut, white linen shirt slightly unbuttoned, moody warm golden hour lighting, soft light on face, blurred city background bokeh, shallow depth of field, luxury fashion photoshoot aesthetic, elegant mood, detailed skin texture, professional photography, 50mm lens, f/1.8, cinematic color grading, warm tones, high resolution, photorealistic, 8k quality"
    );

    const width = 800;
    const height = 1200; // 2:3 aspect ratio
    const seed = Math.floor(Math.random() * 1000000);

    const url = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&nologo=true&enhance=true`;

    setImageUrl(url);
    setLoading(false);
  };

  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'cinematic-portrait.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Cinematic Portrait Generator</h1>
        <p style={styles.description}>
          Generate luxury fashion photoshoot portraits with cinematic lighting
        </p>

        <button
          onClick={generateImage}
          disabled={loading}
          style={{
            ...styles.button,
            ...(loading ? styles.buttonDisabled : {})
          }}
        >
          {loading ? 'Generating...' : 'Generate Portrait'}
        </button>

        {imageUrl && (
          <div style={styles.imageContainer}>
            <img
              src={imageUrl}
              alt="Cinematic Portrait"
              style={styles.image}
              onLoad={() => setLoading(false)}
            />
            <button
              onClick={downloadImage}
              style={styles.downloadButton}
            >
              Download Image
            </button>
          </div>
        )}

        {!imageUrl && !loading && (
          <div style={styles.placeholder}>
            <svg style={styles.placeholderIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p style={styles.placeholderText}>Click the button to generate your portrait</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  content: {
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  description: {
    fontSize: '1.2rem',
    color: '#cccccc',
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#d4af37',
    color: '#1a1a1a',
    border: 'none',
    padding: '18px 48px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  buttonDisabled: {
    backgroundColor: '#888888',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  imageContainer: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    border: '2px solid rgba(212, 175, 55, 0.3)',
  },
  downloadButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    border: '2px solid rgba(212, 175, 55, 0.5)',
    padding: '12px 32px',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  placeholder: {
    marginTop: '60px',
    padding: '60px',
    border: '2px dashed rgba(212, 175, 55, 0.3)',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  placeholderIcon: {
    width: '80px',
    height: '80px',
    color: 'rgba(212, 175, 55, 0.5)',
    margin: '0 auto 20px',
  },
  placeholderText: {
    color: '#888888',
    fontSize: '1.1rem',
  },
};
