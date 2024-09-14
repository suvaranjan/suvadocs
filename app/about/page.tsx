import React from "react";
// import "./FamilyTree.css";

const FamilyTree = () => {
  return (
    <div className="tree-container">
      {/* First Generation */}
      <div className="generation">
        <div className="node male">Pratisravas</div>
        <div className="vertical-line"></div>
        <div className="node male">Pratipa</div>
      </div>

      {/* Second Generation */}
      <div className="generation">
        <div className="horizontal-line"></div>
        <div className="node male">Shantanu</div>
        <div className="horizontal-line-dotted"></div>
        <div className="node female">Ganga</div>
        <div className="node female">Satyavati</div>
      </div>

      {/* Shantanu's children */}
      <div className="generation">
        <div className="vertical-line"></div>
        <div className="node male">Bhishma</div>
        <div className="vertical-line"></div>
        <div className="node male">Chitrangada</div>
        <div className="vertical-line"></div>
        <div className="node male">Vichitravirya</div>
      </div>

      {/* Vichitravirya's spouses and children */}
      <div className="generation">
        <div className="horizontal-line"></div>
        <div className="node female">Ambika</div>
        <div className="horizontal-line"></div>
        <div className="node female">Ambalika</div>
      </div>

      {/* Dhritarashtra and Pandu (Children of Vichitravirya) */}
      <div className="generation">
        <div className="vertical-line"></div>
        <div className="node male">Dhritarashtra</div>
        <div className="node male">Pandu</div>
        <div className="horizontal-line-dotted"></div>
        <div className="node female">Gandhari</div>
        <div className="node female">Kunti</div>
        <div className="node female">Madri</div>
      </div>

      {/* Dhritarashtra's children */}
      <div className="generation">
        <div className="vertical-line"></div>
        <div className="node male special">Duryodhana</div>
        <div className="node female">Dussala</div>
        <div className="node male special">Dushasana</div>
      </div>

      {/* Pandu's children */}
      <div className="generation">
        <div className="vertical-line"></div>
        <div className="node male special">Yudhishthira</div>
        <div className="node male special">Bhima</div>
        <div className="node male special">Arjuna</div>
        <div className="node female">Subhadra</div>
        <div className="node male special">Nakula</div>
        <div className="node male special">Sahadeva</div>
      </div>
    </div>
  );
};

export default FamilyTree;
