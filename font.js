fetch('https://promptcraft-ai-suite.lovable.app')
  .then(r => r.text())
  .then(t => {
    const fontFaces = t.match(/@font-face\s*\{[^}]+\}/g);
    console.log("Font Faces:", fontFaces);
    const links = t.match(/<link[^>]+rel="stylesheet"[^>]+>/g);
    console.log("CSS Links:", links);
  });
