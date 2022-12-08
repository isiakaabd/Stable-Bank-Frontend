import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApproveDAOMember from "./pages/ApproveDAOMember";
import CreateProposal from "./pages/CreateProposal";
import Home from "./pages/Home";
import JoinDAO from "./pages/JoinDAO";
import ProposalDetails from "./pages/ProposalDetails";
import Proposals from "./pages/Proposals";
import VoteProposal from "./pages/VoteProposal";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-dao" element={<JoinDAO />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
        <Route path="/vote-proposal" element={<VoteProposal />} />
        <Route path="/approve-dao-member" element={<ApproveDAOMember />} />
        <Route path="/proposal/:id" element={<ProposalDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
