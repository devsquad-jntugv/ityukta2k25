import React, { useEffect } from "react";
import './styles/Sphere.css';
import TagCloud from "TagCloud";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Globe = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      '<i class="fab fa-react" style="color:#61dafb;"></i>',
      '<i class="fab fa-html5" style="color:#e34f26;"></i>',
      '<i class="fab fa-css3-alt" style="color:#264de4;"></i>',
      '<i class="fab fa-github" style="color:#fff;"></i>',
      '<i class="fab fa-js-square" style="color:#f7df1e;"></i>',
      '<i class="fab fa-node-js" style="color:#68a063;"></i>',
      '<i class="fab fa-git-alt" style="color:#f05032;"></i>',
      '<i class="fab fa-vuejs" style="color:#42b883;"></i>',
      '<i class="fab fa-figma" style="color:#f24e1e;"></i>',
      '<i class="fa-brands fa-linkedin" style="color:#0077b5;"></i>',
      '<i class="fa-brands fa-wordpress" style="color:#21759b;"></i>',
      '<i class="fa-brands fa-docker" style="color:#2496ed;"></i>',
      '<i class="fa-solid fa-code" style="color:#fff;"></i>',
      '<i class="fab fa-react" style="color:#61dafb;"></i>',
      '<i class="fab fa-html5" style="color:#e34f26;"></i>',
      '<i class="fab fa-css3-alt" style="color:#264de4;"></i>',
      '<i class="fab fa-github" style="color:#fff;"></i>',
      '<i class="fab fa-js-square" style="color:#f7df1e;"></i>',
      '<i class="fab fa-node-js" style="color:#68a063;"></i>',
      '<i class="fab fa-git-alt" style="color:#f05032;"></i>',
      '<i class="fab fa-vuejs" style="color:#42b883;"></i>',
      '<i class="fab fa-figma" style="color:#f24e1e;"></i>',
      '<i class="fa-brands fa-linkedin" style="color:#0077b5;"></i>',
      '<i class="fa-brands fa-wordpress" style="color:#21759b;"></i>',
      '<i class="fa-brands fa-docker" style="color:#2496ed;"></i>',
      '<i class="fa-solid fa-code" style="color:#fff;"></i>',
    ];

    const options = {
      radius: 240,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Clear previous instances to prevent duplication
    const existingCloud = document.querySelector('.tagcloud');
    if (existingCloud) {
      existingCloud.innerHTML = '';  // Remove existing tags
    }

    TagCloud(container, texts, options);

    // Ensure HTML is parsed correctly
    const tags = document.querySelectorAll(".tagcloud span");
    tags.forEach(tag => {
      tag.innerHTML = tag.textContent;
    });

  }, []);

  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Globe;
