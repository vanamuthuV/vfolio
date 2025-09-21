import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Technologies from "./pages/Technologies";
import AllTimelines from "./pages/Others";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="flex items-center justify-center py-5 bg-[#eff6e0]">
      <div className="w-5/8 shadow-2xl flex flex-col gap-5 bg-white">
        <Header />
        <AboutMe />
        <Technologies />
        <AllTimelines />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
