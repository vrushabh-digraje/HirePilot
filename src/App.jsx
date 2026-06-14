import { useMemo, useState } from "react";
import $ from "jquery";
import { Toast } from "bootstrap";
import { candidates, questionBank, stages } from "./data/interviewData.js";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MetricsGrid from "./components/MetricsGrid.jsx";
import CandidatePipeline from "./components/CandidatePipeline.jsx";
import CandidateSignal from "./components/CandidateSignal.jsx";
import InterviewBuilder from "./components/InterviewBuilder.jsx";
import ScheduleModal from "./components/ScheduleModal.jsx";
import ToastMessage from "./components/ToastMessage.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("Frontend Engineer");
  const [difficulty, setDifficulty] = useState(3);
  const [focus, setFocus] = useState("Problem solving");
  const [questions, setQuestions] = useState(questionBank["Frontend Engineer"]);
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[1]);

  const filteredCandidates = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return candidates;

    return candidates.filter((candidate) =>
      [candidate.name, candidate.role, candidate.stage, ...candidate.skills]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  function showToast(message) {
    $("#liveToast .toast-body").text(message);
    const toast = Toast.getOrCreateInstance(document.querySelector("#liveToast"));
    toast.show();
  }

  function generateQuestions() {
    const baseQuestions = questionBank[role] || questionBank["Frontend Engineer"];
    const difficultyLabel = ["", "entry", "junior", "mid-level", "senior", "lead"][difficulty];
    const nextQuestions = baseQuestions.map((question, index) => {
      const prompt = index === 0 ? focus.toLowerCase() : ["collaboration", "execution", "technical depth"][index];
      return `${question} Tailor your answer for a ${difficultyLabel} interview and emphasize ${prompt}.`;
    });

    setQuestions(nextQuestions);
    showToast("AI question set generated");
  }

  return (
    <div className="app-shell">
      <Sidebar onNotify={showToast} />

      <main className="main">
        <Topbar search={search} onSearch={setSearch} />

        <section className="content">
          <HeroSection onGenerate={generateQuestions} onNotify={showToast} />
          <MetricsGrid />

          <div className="dashboard-grid">
            <CandidatePipeline
              candidates={filteredCandidates}
              stages={stages}
              selectedCandidate={selectedCandidate}
              onSelectCandidate={setSelectedCandidate}
              onNotify={showToast}
            />
            <CandidateSignal candidate={selectedCandidate} />
          </div>

          <InterviewBuilder
            role={role}
            difficulty={difficulty}
            focus={focus}
            questions={questions}
            roles={Object.keys(questionBank)}
            onRoleChange={setRole}
            onDifficultyChange={setDifficulty}
            onFocusChange={setFocus}
            onGenerate={generateQuestions}
            onNotify={showToast}
          />
        </section>
      </main>

      <ScheduleModal candidate={selectedCandidate} onNotify={showToast} />
      <ToastMessage />
    </div>
  );
}
