import React, { useEffect, useState, useRef, useCallback } from "react";

export const AchillesAndTortoise = () => {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(250);
  const [achillesSpeed, setAchillesSpeed] = useState(
    achillesPosition === tortoisePosition - 50 ? 2 : 3
  );
  const [tortoiseSpeed, setTortoiseSpeed] = useState(1);
  const [frameCount, setFrameCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);

  const areaLimit = 460;

  const maxAchillesPosition = areaLimit - 20;
  const maxTortoisePosition = areaLimit - 20;

  function changeAchillesSpeed() {
    if (achillesPosition === tortoisePosition - 50) {
      setAchillesSpeed(1);
    }
  }

  const animate = useCallback(() => {
    const newAchillesPosition = achillesPosition + achillesSpeed;
    const newTortoisePosition = tortoisePosition + tortoiseSpeed;

    const limitedTortoisePosition =
      newTortoisePosition > maxTortoisePosition
        ? maxTortoisePosition
        : newTortoisePosition;

    const limitedAchillesPosition =
      newAchillesPosition > maxAchillesPosition
        ? maxAchillesPosition
        : newAchillesPosition;

    setAchillesPosition(limitedAchillesPosition);
    setTortoisePosition(limitedTortoisePosition);

    setFrameCount(frameCount + 1);

    if (achillesPosition === 250) {
      setAchillesSpeed(1);
    }
  }, [
    achillesPosition,
    tortoisePosition,
    maxAchillesPosition,
    maxTortoisePosition,
  ]);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let previousTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (previousTimestamp != null) {
          changeAchillesSpeed();
          animate();
        }
        previousTimestamp = timestamp;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [isVisible, animate]);

  return (
    <div ref={containerRef}>
      {isVisible && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100vh",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "500px",
              height: "100px",
              backgroundColor: "#ccc",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: `${achillesPosition}px`,
                width: "20px",
                height: "20px",
                backgroundColor: "blue",
                color: "red",
              }}
            >
              Achilles
            </div>
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: `${tortoisePosition}px`,
                width: "20px",
                height: "20px",
                backgroundColor: "green",
                color: "red",
              }}
            >
              Tortoise
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
