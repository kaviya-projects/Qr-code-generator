import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const qrRef = useRef();

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>✨ QR Code Generator ✨</h1>
        <p>Instantly create and download your own QR codes 🚀</p>
      </header>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter text or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* QR Display Section */}
      <div className="qr-card">
        <div ref={qrRef} className="qr-box">
          {text ? (
            <QRCodeCanvas value={text} size={200} includeMargin={true} />
          ) : (
            <p className="placeholder">Your QR code will appear here 👇</p>
          )}
        </div>

        {text && (
          <button className="download-btn" onClick={downloadQR}>
            📥 Download QR Code
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Made with 💙 using <strong>React</strong> | Designed by <strong>Kaviya</strong> ✨
        </p>
      </footer>
    </div>
  );
}

export default App;
