import React, { useRef, useState, useEffect } from 'react';
import './BottomSheet.css';

const snapPoints = {
  closed: 0,
  half: 50,
  full: 90,
};

function BottomSheet() {
  const sheetRef = useRef();
  const [position, setPosition] = useState(snapPoints.closed);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(null);
  const [startPosition, setStartPosition] = useState(null);

  useEffect(() => {
    if (sheetRef.current && !isDragging) {
      sheetRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      sheetRef.current.style.transform = `translateY(${100 - position}%)`;
    }
  }, [position, isDragging]);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setStartY(e.touches[0].clientY);
    setStartPosition(position);
    setIsDragging(true);
    sheetRef.current.style.transition = 'none';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaY = e.touches[0].clientY - startY;
    const deltaPercent = (deltaY / window.innerHeight) * 100;
    const newPosition = Math.min(100, Math.max(0, startPosition - deltaPercent));
    sheetRef.current.style.transform = `translateY(${100 - newPosition}%)`;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);
    const deltaY = e.changedTouches[0].clientY - startY;
    const deltaPercent = (deltaY / window.innerHeight) * 100;
    const finalPosition = startPosition - deltaPercent;
    setPosition(getNearestSnapPoint(finalPosition));
    setStartY(null);
    setStartPosition(null);
  };

  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setStartPosition(position);
    setIsDragging(true);
    sheetRef.current.style.transition = 'none';

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const deltaPercent = (deltaY / window.innerHeight) * 100;
      const newPosition = Math.min(100, Math.max(0, startPosition - deltaPercent));
      sheetRef.current.style.transform = `translateY(${100 - newPosition}%)`;
    };

    const handleMouseUp = (e) => {
      setIsDragging(false);
      const deltaY = e.clientY - startY;
      const deltaPercent = (deltaY / window.innerHeight) * 100;
      const finalPosition = startPosition - deltaPercent;
      setPosition(getNearestSnapPoint(finalPosition));
      setStartY(null);
      setStartPosition(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const getNearestSnapPoint = (value) => {
    const points = Object.values(snapPoints);
    return points.reduce((a, b) => Math.abs(b - value) < Math.abs(a - value) ? b : a);
  };

  const goTo = (point) => setPosition(point);

  return (
    <div className="bottom-sheet-container">
      <div className="content">
        <h1>Bottom Sheet Demo</h1>
        <p>Drag the bottom sheet or use the buttons below</p>
      </div>

      <div className="controls">
        <button onClick={() => goTo(snapPoints.closed)}>Close</button>
        <button onClick={() => goTo(snapPoints.half)}>Half</button>
        <button onClick={() => goTo(snapPoints.full)}>Full</button>
      </div>

      <div
        ref={sheetRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        tabIndex={0}
        className={`bottom-sheet ${isDragging ? 'dragging' : ''}`}
        style={{ transform: `translateY(${100 - position}%)` }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp') goTo(snapPoints.full);
          else if (e.key === 'ArrowDown' || e.key === 'Escape') goTo(snapPoints.closed);
        }}
      >
        <div className="handle" />
        <div className="sheet-content">
          <h2>Bottom Sheet</h2>
          <p>You can drag this sheet or use buttons to change its position.</p>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
export function getNearestSnapPoint(current, snapPoints) {
  return snapPoints.reduce((prev, curr) =>
    Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
  );
}
