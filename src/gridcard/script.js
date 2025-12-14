import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const spotlightImgFinalPos = [
    [-140, -140],
    [40, -130],
    [-160, 40],
    [20, 30],
  ];

  const spotlightImages = document.querySelectorAll(".spotlight-img");

  // Pin the spotlight container
  ScrollTrigger.create({
    trigger: ".spotlight",
    start: "top top",
    end: `+${window.innerHeight * 6}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress; 
      const initialRotations = [5, -3, 3.5, -1];
      const phase1Startoffsets = [0, 0.1, 0.2, 0.3];
      spotlightImages.forEach((img, index) => {
        const initialRotation = initialRotations[index];
        const phase1Start = phase1Startoffsets[index];
        const phase1End = Math.min(
          phase1Start + (0.45 - phase1Start) * 0.9,
          0.45);
           let x = -50;
        let y, rotation; 
        const phaseTwoStartOffsets = [0.5, 0.55, 0.6, 0.65];
        const phase2Start = phaseTwoStartOffsets[index];
        const phase2End = Math.min(
          phase2Start + (0.95 - phase2Start) * 0.9,
          0.95
        );
        const finalX = spotlightImgFinalPos[index][0];
        const finalY = spotlightImgFinalPos[index][1];

       

        // Phase 1: Images slide up from bottom (0 -> 0.45)
        if (progress < phase1Start) {
          y = 200;
          rotation = initialRotation;
        } else if (progress <= 0.45) {
          let phase1Progress;
          if (progress >= phase1End) {
            phase1Progress = 1;
          } else {
            const linearProgress = (progress - phase1Start) / (phase1End - phase1Start);
            phase1Progress = 1 - Math.pow(1 - linearProgress, 3);
          }
          y = 200 - phase1Progress * 250;
          rotation = initialRotation;
        }
        // Phase 2: Images move to final positions (0.5 -> 0.95)
        else if (progress >= phase2Start && progress <= 0.95) {
          let phase2Progress;
          if (progress >= phase2End) {
            phase2Progress = 1;
          } else {
            const linearProgress = (progress - phase2Start) / (phase2End - phase2Start);
            phase2Progress = 1 - Math.pow(1 - linearProgress, 3);
          }
          x = -50 + (finalX + 50) * phase2Progress;
          y = -50 + (finalY + 50) * phase2Progress;
          rotation = initialRotation * (1 - phase2Progress);
        }
        // Phase 3: Final position (0.95+)
        else if (progress > 0.95) {
          x = finalX;
          y = finalY;
          rotation = 0;
        }
        // Between phases (0.45 -> 0.5)
        else {
          y = -50;
          rotation = initialRotation;
        }

        gsap.set(img, {
          transform: `translate(${x}%, ${y}%) rotate(${rotation}deg)`,
        });
      });
    }
  });


});