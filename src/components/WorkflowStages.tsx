"use client";

import { useState } from "react";
import { WORKFLOW_STAGES } from "@/data/skillops-data";

export function WorkflowStages() {
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = WORKFLOW_STAGES[stageIndex] || WORKFLOW_STAGES[0];

  return (
    <section id="workflow" className="stages" aria-labelledby="stages-heading">
      <div className="frame">
        <div className="stages__split">
          <div className="stages__left">
            <div>
              <h2 id="stages-heading" className="stages__heading reveal-item">
                {currentStage.heading}
              </h2>
              <p className="stages__desc reveal-item">{currentStage.desc}</p>
            </div>
            <div className="stages__meta-grid">
              <div className="stages__stat reveal-item">
                <strong>{currentStage.statNum}</strong>
                <span>{currentStage.statLabel}</span>
              </div>
              <div className="stages__stat reveal-item">
                <strong>{currentStage.statMode}</strong>
                <span>{currentStage.statSub}</span>
              </div>
            </div>
          </div>

          <div className="stages__right reveal-item" data-ui>
            <div className="stages__terminal-wrap">
              <pre>
                <code>{currentStage.terminal}</code>
              </pre>
            </div>
            <p>{currentStage.caption}</p>
          </div>
        </div>

        <div className="stages__slider-bar">
          <label htmlFor="workflow-slider" className="stages__range-label reveal-item">
            Drag or use arrow keys to inspect each CLI stage
          </label>
          <input
            type="range"
            id="workflow-slider"
            className="stages__range"
            min={0}
            max={WORKFLOW_STAGES.length - 1}
            step={1}
            value={stageIndex}
            onChange={(e) => setStageIndex(Number(e.target.value) || 0)}
          />
          <div className="stages__stops">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <button
                key={stage.stopLabel}
                type="button"
                className="stage-stop-btn reveal-item"
                aria-current={stageIndex === idx ? "step" : undefined}
                onClick={() => setStageIndex(idx)}
              >
                {stage.stopLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
